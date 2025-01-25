import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import TableLayout from "../../../components/TableLayout";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import FadeLoader from "react-spinners/FadeLoader";
import { toast } from "react-toastify";
import { getTransaction } from "../../../store/transaction/actions";
const Transaction = () => {
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const [transactionData, setTransactionData] = useState();
  const [status, setStatus] = useState("All");
  const { transaction, loading, totalCount } = useSelector(
    (state) => state.Transaction
  );
  const [filter, setFilter] = useState({
    status: status,
    pageNo: 1,
    limit: pageSize,
    search: "",
  });
  const fetchData = async () => {
    try {
      const callback = (err, res) => {
        if (err) {
          toast.error(err);
        } else {
          console.log(res);
          setTransactionData(res);
          toast.success(res.message);
        }
      };
      dispatch(getTransaction({ data: filter, callback }));
    } catch (error) {
      console.error(error, "<===err");
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => fetchData(), 500);
    return () => clearTimeout(timer);
  }, [filter]);

  const clearFilter = () => {
    setFilter({ pageNo: 1, limit: pageSize, status: "Success", search: "" });
    setStatus("Success");
  };
  const handleFilter = () => {
    setFilter((prev) => ({
      ...prev,
      status: status,
    }));
  };
  const handlePageChange = (page) => {
    setFilter((prev) => ({ ...prev, pageNo: page.selected + 1 }));
  };
  const column = [
    {
      head: "Sr No",
      accessor: "",
      isComponent: true,
      component: (item, ind) => {
        const calculateRowIndex = (ind) =>
          (filter.pageNo - 1) * pageSize + (ind + 1);
        return (
          <span className="text-capitalize cursor-pointer">
            {calculateRowIndex(ind)}
          </span>
        );
      },
    },
    {
      head: "UserName",
      accessor: "userName",
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-4">
              <div className="content">
                <p className="m-0 text-muted">{item?.user?.userName}</p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      head: "Amount ",
      accessor: "amount",
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">
                  {item?.amount ? "$ " + item?.amount : ""}
                </p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      head: "TransactionId",
      accessor: "chargeId",
    },
    {
      head: "Payment Method",
      accessor: "paymentMethod",
    },
    {
      head: "Payment Type",
      accessor: "paymentType",
      isComponent: true,
      component: (item, ind) => (
        <span className="text">{item?.paymentType}</span>
      ),
    },
    {
      head: "Status",
      accessor: "status",
      isComponent: true,
      component: (item, ind) => (
        <p
          className={`${
            item.status == "Success"
              ? "greenStatus"
              : item.status == "Failed"
              ? "redStatus"
              : ""
          } status text-capitalize m-0 d-flex justify-content-center align-item-center rounded-pill px-3 py-1 `}
        >
          {item.status}
        </p>
      ),
    },
    {
      head: "Created At",
      accessor: "createdAt",
      isComponent: true,
      component: (item, ind) => (
        <span className="text">
          {moment(item?.createdAt).format("YYYY-MM-DD")}
        </span>
      ),
    },
  ];
  return (
    <>
      {loading && (
        <div className="main-loader">
          <FadeLoader size={1000} />
        </div>
      )}
      <section className="ManageTeacher position-relative">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="d-flex align-items-center justify-content-between gap-10">
                <h5 className="mb-0 py-3 fw-sbold text-capitalize">
                  Manage Transaction
                </h5>
              </div>
            </Col>
            <Row className="mb-3 px-4">
              <Col md={4}>
                <Form.Control
                  type="text"
                  name="search"
                  placeholder="Search using userName ,transactionId"
                  value={filter.search || ""}
                  onChange={(e) =>
                    setFilter((prev) => ({ ...prev, search: e.target.value }))
                  }
                />
              </Col>
              <Col md={4}>
                <Form.Select
                  className="p-2"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="All">All</option>
                  <option value="Success">Completed</option>
                  <option value="Failed">Failed</option>
                </Form.Select>
              </Col>
              <Col md={4}>
                <Button onClick={handleFilter} variant="primary">
                  Filter
                </Button>
                <Button
                  onClick={clearFilter}
                  variant="secondary"
                  className="ms-2"
                >
                  Clear
                </Button>
              </Col>
            </Row>
            <Col lg="12" className="">
              {!loading && (
                <div className="cardCstm p-2 rounded bg-white">
                  {!loading && transaction?.length > 0 ? (
                    <>
                      <TableLayout
                        data={transaction}
                        column={column}
                        totalCount={totalCount}
                        limit={filter.limit}
                        handlePageChange={handlePageChange}
                        pageNo={filter.pageNo}
                        status={"status"}
                      />
                    </>
                  ) : (
                    <div className="d-flex justify-content-center">
                      <p>No Data Found</p>
                    </div>
                  )}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Transaction;
