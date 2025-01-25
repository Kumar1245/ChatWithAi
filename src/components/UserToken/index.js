import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import TableLayout from "../TableLayout";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getUsersToken } from "../../store/actions";
import { toast } from "react-toastify";

const UserTokenList = ({ id }) => {
  const [data, setData] = useState();
  const { totalCount, loading } = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const [filter, setFilter] = useState({
    id: id,
    limit: 10,
    pageNo: 1,
  });
  const getUserPrivate = () => {
    const callback = (err, res) => {
      if (err) {
        console.log(err);
      } else {
        toast.success(res);
        setData(res);
      }
    };
    dispatch(getUsersToken({ data: filter, callback }));
  };
  useEffect(() => {
    getUserPrivate();
  }, []);
  const handlePageChange = (page) => {
    setFilter((prev) => ({ ...prev, pageNo: page.selected + 1 }));
  };
  const column = [
    {
      head: "Package Size",
      accessor: "packageSize",
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">
                  {item?.tokenPackage?.packageSize}
                </p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      head: "Price",
      accessor: "price",
      isComponent: true,
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">{item?.tokenPackage?.price}</p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      head: "Cost Per Token",
      accessor: "costPerToken",
      isComponent: true,
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">
                  {item?.tokenPackage?.costPerToken}
                </p>
              </div>
            </div>
          </>
        );
      },
    },

    {
      head: "TotalTokens",
      accessor: "totalTokens",
      isComponent: true,
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">
                  {item?.tokenPackage?.totalTokens}
                </p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      head: "ImageGeneration",
      accessor: "imageGeneration",
      isComponent: true,
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">
                  {item?.tokenPackage?.imageGeneration}
                </p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      head: "Words Additional",
      accessor: "additionalWords",
      isComponent: true,
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">
                  {item?.tokenPackage?.additionalWords}
                </p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      head: "BonusTokens",
      accessor: "bonusTokens",
      isComponent: true,
      component: (item, ind) => (
        <>
          <div className="d-flex align-items-center gap-10">
            <div className="content">
              <p className="m-0 text-muted">
                {item?.tokenPackage?.bonusTokens}
              </p>
            </div>
          </div>
        </>
      ),
    },

    {
      head: "Created At",
      accessor: "createdAt",
      isComponent: true,
      component: (item, ind) => (
        <>
          <div className="d-flex align-items-center gap-10">
            <div className="content">
              <p className="m-0 text-muted">
                {moment(item?.createdAt).format("YYYY-MM-DD")}
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      head: "Status",
      accessor: "",
      isComponent: true,
      component: (item, ind) => (
        <p
          className={`${
            item.status == "InComplete"
              ? "redStatus"
              : item.status == "Success"
              ? "greenStatus"
              : item.status == "pending"
              ? "yellowStatus"
              : ""
          } status m-0 rounded-pill d-flex justify-content-center align-item-center  px-3 text-capitalize py-1 fw-sbold`}
        >
          {item.status}
        </p>
      ),
    },
  ];
  return (
    <>
      <Row>
        <Col lg="12" className="my-2">
          <div className=" cardCstm  h-100 rounded bg-white">
            <div className="cardHead m-0 pb-2">
              <h6 className="m-0 fw-bolder">Buy Token Package List</h6>
            </div>
            {!loading && data?.length > 0 ? (
              <>
                <TableLayout
                  data={data}
                  column={column}
                  totalCount={totalCount}
                  limit={filter.limit}
                  handlePageChange={handlePageChange}
                  pageNo={filter.pageNo}
                  status={"status"}
                />
              </>
            ) : (
              <div className="d-flex justify-content-center p-2">
                <p className="m-0">No Data Found</p>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default UserTokenList;
