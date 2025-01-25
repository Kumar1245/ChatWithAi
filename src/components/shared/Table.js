import React from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"
import BootstrapTable from "react-bootstrap-table-next"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider from "react-bootstrap-table2-toolkit"
import { Card, CardBody, Row, Col, Button } from "reactstrap"
import  { LoaderOverlay } from "components/Common/Loader"

function Table(props) {
  const pageOptions = {
    sizePerPage: 10,
    totalSize: props.total,
    custom: true,
    page: props?.filter?.page,
  }

  const handleTableChange = (type, data) => {
    if (type === "pagination") {
      props.setFilter(prevState => ({ ...prevState, page: data.page }))
    } else if (type === "sort") {
      props.setFilter(prevState => ({
        ...prevState,
        orderBy: data.sortField,
        order: data.sortOrder === "asc" ? 1 : -1,
      }))
    }
  }

  if (props.columns.length <= 0) return <React.Fragment></React.Fragment>

  const { i18n } = useTranslation()
  const navigate = useNavigate()

  return (
    <Card>
      <CardBody>
        {props.loading && <LoaderOverlay />}

        <Row>
          {props.children}

          <div className="clearfix">
            {props.newButtonLink && (
              <Button
                type="button"
                color="success"
                className="float-end"
                onClick={() => navigate(props.newButtonLink)}
              >
                <i className="mdi mdi-plus mr-1" />
                {i18n.t(props.newButtonText)}
              </Button>
            )}
          </div>
        </Row>

        <PaginationProvider pagination={paginationFactory(pageOptions)}>
          {({ paginationProps, paginationTableProps }) => (
            <ToolkitProvider
              keyField="id"
              data={props.data}
              columns={props.columns}
              loading={props.loading}
              bootstrap4
              search
            >
              {toolkitProps => (
                <React.Fragment>
                  <div className="table-responsive">
                    <BootstrapTable
                      remote
                      responsive
                      bordered={false}
                      striped={false}
                      classes="table table-centered table-nowrap"
                      headerWrapperClasses={"thead-light"}
                      onTableChange={handleTableChange}
                      {...toolkitProps.baseProps}
                      {...paginationTableProps}
                      {...props.tableProps}
                      defaultSorted={
                        props.filter
                          ? [
                              {
                                dataField: props.filter.orderBy,
                                order:
                                  props.filter.order === 1 ? "asc" : "desc",
                              },
                            ]
                          : []
                      }
                      defaultSortDirection="desc"
                      sort={{
                        dataField: props.filter?.orderBy,
                        order: props.filter?.order === 1 ? "asc" : "desc",
                        sortCaret: order =>
                          order === "asc" ? (
                            <span className="caret">
                              <i className="bx bx-caret-up" />
                            </span>
                          ) : order === "desc" ? (
                            <span className="caret">
                              <i className="bx bx-caret-down" />
                            </span>
                          ) : null,
                      }}
                    />
                  </div>

                  <Row className="align-items-md-center mt-30">
                    <Col className="pagination pagination-rounded justify-content-end mb-2 inner-custom-pagination">
                      <PaginationListStandalone {...paginationProps} />
                    </Col>
                  </Row>
                </React.Fragment>
              )}
            </ToolkitProvider>
          )}
        </PaginationProvider>
      </CardBody>
    </Card>
  )
}

Table.propTypes = {
  total: PropTypes.number,
  newButtonLink: PropTypes.string,
  newButtonText: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  handleTableChange: PropTypes.func,
  tableProps: PropTypes.object,
  children: PropTypes.element,
}

Table.defaultProps = {
  total: 0,
  data: [],
  columns: [],
  tableProps: {},
  newButtonText: "Add New",
}

export default Table
