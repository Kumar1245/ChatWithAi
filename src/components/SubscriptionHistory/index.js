import React, { useEffect, useState } from "react";
import { Col, Row,} from "react-bootstrap";
import TableLayout from "../TableLayout";

import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getUsersSubscription } from "../../store/actions";
import { toast } from "react-toastify";

const SubscriptionHistory = ({ id }) => {
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
    dispatch(getUsersSubscription({ data: filter, callback }));
  };
  useEffect(() => {
    getUserPrivate();
  }, []);

  const handlePageChange = (page) => {
    setFilter((prev) => ({ ...prev, pageNo: page.selected + 1 }));
  };
  const column = [
    {
      head: "Plan Name",
      accessor: "name",
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">{item?.plan?.name}</p>
              </div>
            </div>
          </>
        );
      },
    },

    {
      head: "Badge",
      accessor: "badge",
      isComponent: true,
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">{item?.plan?.badge}</p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      head: "Start Date",
      accessor: "current_period_start",
      isComponent: true,
      component: (item, key) => {
        const formattedDate = item?.current_period_end
          ? moment(item.current_period_start).format("YYYY-MM-DD")
          : "N/A";

        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">{formattedDate}</p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      head: "End Date",
      accessor: "current_period_end",
      component: (item, key) => {
        const formattedDate = item?.current_period_end
          ? moment(item.current_period_end).format("YYYY-MM-DD")
          : "N/A";

        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">{formattedDate}</p>
              </div>
            </div>
          </>
        );
      },
    },
    {
      head: "Words",
      accessor: "words",
      isComponent: true,
      component: (item, key) => {
        return (
          <>
            <div className="d-flex align-items-center gap-10">
              <div className="content">
                <p className="m-0 text-muted">{item?.plan?.words}</p>
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
      component: (item, ind) => (
        <>
          <div className="d-flex align-items-center gap-10">
            <div className="content">
              <p className="m-0 text-muted">
                {item?.plan?.price ? "$ " + item?.plan?.price : ""}
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
              {moment(item?.createdAt).format("YYYY-MM-DD")}
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
            item.status == "absent"
              ? "redStatus"
              : item.status == "approved"
              ? "greenStatus"
              : item.status == "pending"
              ? "yellowStatus"
              : ""
          } status m-0 rounded-pill d-flex justify-content-center align-item-center px-3 text-capitalize py-1 fw-sbold`}
        >
          {item.status}
        </p>
      ),
    },
    // {
    //   head: "Actions",
    //   accessor: "",
    //   isComponent: true,
    //   component: (item) => (
    //     <div className="ActnBtn d-flex align-items-center  gap-10">
    //       <Button
    //         // onClick={handleConfirmation}
    //         className="p-0"
    //         variant="transparent"
    //         type="button"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="20"
    //           height="21"
    //           viewBox="0 0 20 21"
    //           fill="none"
    //         >
    //           <g clip-path="url(#clip0_0_733)">
    //             <path
    //               d="M2.43921 4.85352V18.9023C2.43921 19.3163 2.60367 19.7133 2.89641 20.0061C3.18915 20.2988 3.58619 20.4633 4.00018 20.4633H16.488C16.902 20.4633 17.299 20.2988 17.5918 20.0061C17.8845 19.7133 18.049 19.3163 18.049 18.9023V4.85352H2.43921ZM7.12214 16.9511C7.12214 17.0546 7.08102 17.1538 7.00784 17.227C6.93465 17.3002 6.83539 17.3413 6.73189 17.3413H5.9514C5.8479 17.3413 5.74864 17.3002 5.67546 17.227C5.60228 17.1538 5.56116 17.0546 5.56116 16.9511V8.36571C5.56116 8.26221 5.60228 8.16295 5.67546 8.08977C5.74864 8.01658 5.8479 7.97547 5.9514 7.97547H6.73189C6.83539 7.97547 6.93465 8.01658 7.00784 8.08977C7.08102 8.16295 7.12214 8.26221 7.12214 8.36571V16.9511ZM11.0246 16.9511C11.0246 17.0546 10.9835 17.1538 10.9103 17.227C10.8371 17.3002 10.7378 17.3413 10.6343 17.3413H9.85384C9.75034 17.3413 9.65108 17.3002 9.5779 17.227C9.50471 17.1538 9.4636 17.0546 9.4636 16.9511V8.36571C9.4636 8.26221 9.50471 8.16295 9.5779 8.08977C9.65108 8.01658 9.75034 7.97547 9.85384 7.97547H10.6343C10.7378 7.97547 10.8371 8.01658 10.9103 8.08977C10.9835 8.16295 11.0246 8.26221 11.0246 8.36571V16.9511ZM14.927 16.9511C14.927 17.0546 14.8859 17.1538 14.8127 17.227C14.7395 17.3002 14.6403 17.3413 14.5368 17.3413H13.7563C13.6528 17.3413 13.5535 17.3002 13.4803 17.227C13.4072 17.1538 13.366 17.0546 13.366 16.9511V8.36571C13.366 8.26221 13.4072 8.16295 13.4803 8.08977C13.5535 8.01658 13.6528 7.97547 13.7563 7.97547H14.5368C14.6403 7.97547 14.7395 8.01658 14.8127 8.08977C14.8859 8.16295 14.927 8.26221 14.927 8.36571V16.9511Z"
    //               fill="#F16573"
    //             />
    //             <path
    //               d="M14.568 7.58545H13.7251C13.6129 7.58544 13.5053 7.62972 13.4256 7.70865C13.346 7.78758 13.3007 7.89478 13.2997 8.00691V17.3103C13.3007 17.4225 13.346 17.5297 13.4256 17.6086C13.5053 17.6875 13.6129 17.7318 13.7251 17.7318H14.568C14.6801 17.7318 14.7877 17.6875 14.8674 17.6086C14.9471 17.5297 14.9923 17.4225 14.9933 17.3103V8.00691C14.9923 7.89478 14.9471 7.78758 14.8674 7.70865C14.7877 7.62972 14.6801 7.58544 14.568 7.58545ZM14.927 16.9513C14.927 17.0548 14.8859 17.1541 14.8127 17.2272C14.7395 17.3004 14.6403 17.3415 14.5368 17.3415H13.7563C13.6528 17.3415 13.5535 17.3004 13.4803 17.2272C13.4071 17.1541 13.366 17.0548 13.366 16.9513V8.36594C13.366 8.26244 13.4071 8.16318 13.4803 8.08999C13.5535 8.01681 13.6528 7.97569 13.7563 7.97569H14.5368C14.6403 7.97569 14.7395 8.01681 14.8127 8.08999C14.8859 8.16318 14.927 8.26244 14.927 8.36594V16.9513ZM10.6343 7.58545H9.7914C9.67926 7.58544 9.57165 7.62972 9.49199 7.70865C9.41233 7.78758 9.36706 7.89478 9.36603 8.00691V17.3103C9.36706 17.4225 9.41233 17.5297 9.49199 17.6086C9.57165 17.6875 9.67926 17.7318 9.7914 17.7318H10.6343C10.7465 17.7318 10.8541 17.6875 10.9337 17.6086C11.0134 17.5297 11.0587 17.4225 11.0597 17.3103V8.00691C11.0587 7.89478 11.0134 7.78758 10.9337 7.70865C10.8541 7.62972 10.7465 7.58544 10.6343 7.58545ZM10.9933 16.9513C10.9933 17.0548 10.9522 17.1541 10.879 17.2272C10.8059 17.3004 10.7066 17.3415 10.6031 17.3415H9.82262C9.71912 17.3415 9.61986 17.3004 9.54667 17.2272C9.47349 17.1541 9.43237 17.0548 9.43237 16.9513V8.36594C9.43237 8.26244 9.47349 8.16318 9.54667 8.08999C9.61986 8.01681 9.71912 7.97569 9.82262 7.97569H10.6031C10.7066 7.97569 10.8059 8.01681 10.879 8.08999C10.9522 8.16318 10.9933 8.26244 10.9933 8.36594V16.9513ZM6.70067 7.58545H5.85774C5.7456 7.58544 5.63799 7.62972 5.55833 7.70865C5.47867 7.78758 5.4334 7.89478 5.43237 8.00691V17.3103C5.4334 17.4225 5.47867 17.5297 5.55833 17.6086C5.63799 17.6875 5.7456 17.7318 5.85774 17.7318H6.70067C6.81281 17.7318 6.92041 17.6875 7.00007 17.6086C7.07973 17.5297 7.125 17.4225 7.12603 17.3103V8.00691C7.125 7.89478 7.07973 7.78758 7.00007 7.70865C6.92041 7.62972 6.81281 7.58544 6.70067 7.58545ZM7.05969 16.9513C7.05969 17.0548 7.01858 17.1541 6.94539 17.2272C6.87221 17.3004 6.77295 17.3415 6.66945 17.3415H5.88896C5.78546 17.3415 5.6862 17.3004 5.61301 17.2272C5.53983 17.1541 5.49871 17.0548 5.49871 16.9513V8.36594C5.49871 8.26244 5.53983 8.16318 5.61301 8.08999C5.6862 8.01681 5.78546 7.97569 5.88896 7.97569H6.66945C6.77295 7.97569 6.87221 8.01681 6.94539 8.08999C7.01858 8.16318 7.05969 8.26244 7.05969 8.36594V16.9513Z"
    //               fill="#DB5669"
    //             />
    //             <path
    //               d="M10.2441 4.85352L15.4036 5.42678C15.5945 5.44801 15.7708 5.53889 15.8989 5.68202C16.027 5.82516 16.0978 6.01051 16.0978 6.20259V20.4633H16.488C16.902 20.4633 17.2991 20.2988 17.5918 20.0061C17.8846 19.7133 18.049 19.3163 18.049 18.9023V4.85352H10.2441Z"
    //               fill="#DB5669"
    //             />
    //             <path
    //               d="M9.85384 4.85352L4.00018 5.50405V20.4633C3.58619 20.4633 3.18915 20.2988 2.89641 20.0061C2.60367 19.7133 2.43921 19.3163 2.43921 18.9023V4.85352H9.85384Z"
    //               fill="#F97A8D"
    //             />
    //             <path
    //               d="M7.90253 0.951172H12.5855C12.9995 0.951172 13.3965 1.11563 13.6892 1.40837C13.982 1.70111 14.1464 2.09815 14.1464 2.51215V3.29264H6.34155V2.51215C6.34155 2.09815 6.50601 1.70111 6.79875 1.40837C7.09149 1.11563 7.48853 0.951172 7.90253 0.951172Z"
    //               fill="#374F68"
    //             />
    //             <path
    //               d="M0.4879 3.29248H19.6099C19.7134 3.29248 19.8126 3.3336 19.8858 3.40678C19.959 3.47997 20.0001 3.57923 20.0001 3.68272V4.46321C20.0001 4.56671 19.959 4.66597 19.8858 4.73916C19.8126 4.81234 19.7134 4.85346 19.6099 4.85346H0.4879C0.384401 4.85346 0.285141 4.81234 0.211956 4.73916C0.138771 4.66597 0.0976563 4.56671 0.0976562 4.46321V3.68272C0.0976563 3.57923 0.138771 3.47997 0.211956 3.40678C0.285141 3.3336 0.384401 3.29248 0.4879 3.29248Z"
    //               fill="#30455C"
    //             />
    //             <path
    //               d="M20.0001 3.68272H0.878144C0.774645 3.68272 0.675385 3.72384 0.6022 3.79702C0.529015 3.87021 0.4879 3.96947 0.4879 4.07297V4.85346C0.384401 4.85346 0.285141 4.81234 0.211956 4.73916C0.138771 4.66597 0.0976563 4.56671 0.0976562 4.46321V3.68272C0.0976563 3.57923 0.138771 3.47997 0.211956 3.40678C0.285141 3.3336 0.384401 3.29248 0.4879 3.29248H19.6099C19.7134 3.29248 19.8126 3.3336 19.8858 3.40678C19.959 3.47997 20.0001 3.57923 20.0001 3.68272Z"
    //               fill="#374F68"
    //             />
    //             <path
    //               d="M8.68302 1.34142H13.3659C13.4604 1.34064 13.5544 1.34961 13.6469 1.36873C13.3582 1.10103 12.9792 0.951936 12.5855 0.951172L7.90253 0.951172C7.48853 0.951172 7.09149 1.11563 6.79875 1.40837C6.50601 1.70111 6.34155 2.09815 6.34155 2.51215V3.29264H11.0245L8.20224 3.01049C8.04401 2.99513 7.89425 2.93183 7.77299 2.82904C7.65172 2.72626 7.56474 2.58889 7.52366 2.43533C7.48258 2.28176 7.48938 2.11931 7.54314 1.96971C7.5969 1.82011 7.69505 1.69049 7.82448 1.5982C8.07924 1.43018 8.37783 1.34087 8.68302 1.34142Z"
    //               fill="#46617A"
    //             />
    //           </g>
    //           <defs>
    //             <clipPath id="clip0_0_733">
    //               <rect
    //                 width="19.9024"
    //                 height="19.9024"
    //                 fill="white"
    //                 transform="translate(0.0976562 0.755859)"
    //               />
    //             </clipPath>
    //           </defs>
    //         </svg>
    //       </Button>
    //     </div>
    //   ),
    // },
  ];

  return (
    <>
      <Row>
        <Col lg="12" className="my-2">
          <div className="cardCstm  h-100 rounded  bg-white">
            <div className="cardHead m-0 pb-2">
              <h6 className="m-0 fw-bolder">Subscription List</h6>
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

export default SubscriptionHistory;
