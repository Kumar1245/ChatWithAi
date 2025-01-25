import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";
import { getUserDetails } from "../../../../store/actions";
import SubscriptionHistory from "../../../../components/SubscriptionHistory";
import PersonalCharacterView from "../../../../components/PersonalCharacter";
import PublicCharacterView from "../../../../components/PublicCharcter";
import moment from "moment";
import UserTokenList from "../../../../components/UserToken";
const UserView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();
  const { loading } = useSelector((state) => state.User);
  const getUserViews = () => {
    const callback = (err, res) => {
      if (err) {
        console.log(err);
      } else {
        toast.success(res);
        setUserDetails(res);
      }
    };
    dispatch(getUserDetails({ data: id, callback }));
  };
  useEffect(() => {
    getUserViews();
  }, []);

  return (
    <>
      {loading && (
        <div className="main-loader">
          <FadeLoader size={1000} />
        </div>
      )}
      <section className="addForm position-relative py-1">
        <Container>
          <Row className="pt-4">
            <Col lg="6">
              <div className=" border-1 h-100 border rounded bg-white ">
                <div className="py-2 px-2 border-bottom">
                  <div className="topHead pb-1">
                    <h5 className="m-0 fw-sbold" style={{ color: "#2E3A59" }}>
                      User Details
                    </h5>
                  </div>
                </div>
                <div className="my-0 border-bottom ">
                  <span className="px-0 d-flex justify-content-between px-2 border-bottom-2 border-1 cardCstm">
                    <p className="fw-medium">User Name :-</p>
                    <p>{userDetails?.user?.userName}</p>
                  </span>
                </div>
                <div className="my-0  border-bottom">
                  <span className="px-0 d-flex justify-content-between px-2 border-bottom-2 border-1 cardCstm">
                    <p className="fw-medium">Email :-</p>
                    <p>{userDetails?.user?.email}</p>
                  </span>
                </div>
                <div className="my-0 border-bottom">
                  <span className="px-0 d-flex justify-content-between px-2 border-bottom-2 border-1 cardCstm">
                    <p className="fw-medium">Phone Number :-</p>
                    <p>{userDetails?.user?.phoneNo}</p>
                  </span>
                </div>
                <div className="my-0 ">
                  <span className="px-0 d-flex justify-content-between px-2  border-1 cardCstm">
                    <p className="fw-medium">Status :-</p>
                    <p>{userDetails?.user?.status}</p>
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="6" className="">
              <div className="border-1 h-100 border rounded bg-white ">
                <div className="py-2 px-2 border-bottom">
                  <div className="topHead pb-1">
                    <h5 className="m-0 fw-sbold" style={{ color: "#2E3A59" }}>
                      Current Subscription Plan
                    </h5>
                  </div>
                </div>
                <div className="my-0 border-bottom ">
                  <span className="px-0 d-flex justify-content-between px-2 border-bottom-2 border-1 cardCstm">
                    <p className="fw-medium"> Current Plan Name :-</p>
                    <p>{userDetails?.currentSubscription?.plan?.name}</p>
                  </span>
                </div>
                <div className="my-0  border-bottom">
                  <span className="px-0 d-flex justify-content-between px-2 border-bottom-2 border-1 cardCstm">
                    <p className="fw-medium">Time Period Start :-</p>

                    <p>
                      {userDetails?.currentSubscription?.current_period_start
                        ? `${moment(
                            userDetails?.currentSubscription
                              ?.current_period_start
                          ).format("MMMM Do, YYYY")}`
                        : "No active subscription"}
                    </p>
                  </span>
                </div>
                <div className="my-0 border-bottom">
                  <span className="px-0 d-flex justify-content-between px-2 border-bottom-2 border-1 cardCstm">
                    <p className="fw-medium">Time period End :-</p>
                    <p>
                      {userDetails?.currentSubscription?.current_period_end
                        ? `${moment(
                            userDetails?.currentSubscription?.current_period_end
                          ).format("MMMM Do, YYYY")}`
                        : "No active subscription"}
                    </p>
                  </span>
                </div>
                <div className="my-0 border-bottom">
                  <span className="px-0 d-flex justify-content-between px-2 border-bottom-2 border-1 cardCstm">
                    <p className="fw-medium">Price :-</p>
                    <p>${userDetails?.currentSubscription?.plan?.price}</p>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="">
            <Col lg="12" className="my-2">
              <Tab.Container
                id="left-tabs-example"
                defaultActiveKey="Dashboard"
              >
                <Nav variant="pills" className="btnPillsTab row mx-0">
                  <Nav.Item className="col-lg-3 col-sm-6 my-2 px-0">
                    <Nav.Link
                      className="d-flex align-items-center justify-content-center border rounded-0"
                      eventKey="Dashboard"
                    >
                      Public Character
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-lg-3 col-sm-6 my-2 px-0">
                    <Nav.Link
                      className="d-flex align-items-center justify-content-center border rounded-0"
                      eventKey="Programs"
                    >
                      Personal Character
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-lg-3 col-sm-6 my-2 px-0">
                    <Nav.Link
                      className="d-flex align-items-center justify-content-center border rounded-0"
                      eventKey="Applications"
                    >
                      Subscription History
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="col-lg-3 col-sm-6 my-2 px-0">
                    <Nav.Link
                      className="d-flex align-items-center justify-content-center border rounded-0"
                      eventKey="TokenList"
                    >
                      Token List
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content className="pt-4">
                  <Tab.Pane eventKey="Dashboard">
                    <PublicCharacterView id={id} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Programs">
                    <PersonalCharacterView id={id} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="Applications">
                    <SubscriptionHistory id={id} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="TokenList">
                    <UserTokenList id={id} />
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default UserView;
