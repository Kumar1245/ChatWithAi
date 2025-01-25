import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import FadeLoader from "react-spinners/FadeLoader";
// import { SubscriptionDetail } from "common/viewContent";
// import Helmet from "react-helmet";
// import * as Path from "routes/Path/index";
// import Table from "components/Table";
import { toast } from "react-toastify";
import Select from "react-select";
import { SUBSCRIPTIONDETAIL } from "../../../../store/subscription/actions";
import { Button, Col, Container, Row } from "react-bootstrap";

const SubscriptionDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [planDetails, setPlanDetails] = useState();

  const getMerchantDetails = () => {
    const callback = (err, res) => {
      if (err) {
        console.log(err);
      } else {
        toast.success(res);
        setPlanDetails(res);
      }
    };
    dispatch(SUBSCRIPTIONDETAIL({ data: id, callback }));
  };
  useEffect(() => {
    getMerchantDetails();
  }, []);


  return (
    <>
      <section className="py-4 position-relative">
        <Container>
          <Row>
            <Col lg="12" className="my-2">
              <div className="top border-bottom pb-3">
                <h4 className="m-0 fw-bold">{planDetails?.data?.name}</h4>
              </div>
            </Col>
            <Col lg="12" className="my-2"></Col>
            <Col lg="12" className="my-2">
              <Row>
                <Col md="4" sm="6" className="my-2">
                  <div className="cardCstm p-3 border rounded-4 bg-light shadow-sm">
                    <div className="top pt-2 pb-3 border-bottom border-secondary">
                      <h5 className="m-0 fw-bold themeClr">
                        {planDetails?.data?.name}{" "}
                        <span
                          className="text-muted fw-sbold text-capitalize"
                          style={{ fontSize: 12 }}
                        >
                          ({planDetails?.data?.status})
                        </span>
                      </h5>
                      <div className="price mt-3">
                        <h4 className="m-0 fw-bold">
                          ${planDetails?.data?.price} /
                          <span className="fw-sbold" style={{ fontSize: 12 }}>
                            {planDetails?.data?.interval}
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="content pt-3 pb-2">
                      <ul className="list-unstyled ps-0 mb-0">
                        {planDetails?.data?.description?.map((item, key) => (
                          <li
                            key={key}
                            className="py-1 d-flex align-items-start gap-10 fw-sbold"
                          >
                            <span className="icn flex-shrink-0">
                              <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <mask
                                  id="mask0_5_2"
                                  style={{ maskType: "luminance" }}
                                  maskUnits="userSpaceOnUse"
                                  x="1"
                                  y="1"
                                  width="22"
                                  height="22"
                                >
                                  <path
                                    d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z"
                                    fill="white"
                                    stroke="white"
                                    stroke-width="2"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M8 12L11 15L17 9"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </mask>
                                <g mask="url(#mask0_5_2)">
                                  <path d="M0 0H24V24H0V0Z" fill="#008DFF" />
                                </g>
                              </svg>
                            </span>{" "}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default SubscriptionDetail;
