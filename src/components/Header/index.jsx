import React, { useEffect, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import {
  Link,

  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../Assets/images/usericon.png";

import ConfirmationPop from "../Modals/ConfirmationPop";
import { useDispatch, useSelector } from "react-redux";
import { ProfileView } from "../../store/profile/actions";

const Header = ({ sidebar, setSidebar }) => {
  const { user, authToken } = useSelector((state) => state.Auth);
  const [adminProfile, setAdminProfile] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [confirmation, setConfirmation] = useState();
  const pageName = location.pathname;
  const { id } = useParams();
  let lastSlashIndex = pageName.lastIndexOf("/");
  let heading;
  if (lastSlashIndex !== -1) {
    const afterLastSlash = pageName.substring(lastSlashIndex + 1);
    heading = afterLastSlash;
  }
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };
  const handleConfirmation = () => setConfirmation(!confirmation);

  const fetchData = async () => {
    try {
      const callback = (err, res) => {
        if (err) {
          toast.error(err);
        } else {
          console.log(res);
          setAdminProfile(res);
          toast.success(res.data.message);
        }
      };
      dispatch(ProfileView({ callback }));
    } catch (error) {
      console.error(error, "<===err");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ConfirmationPop
        confirmation={confirmation}
        setConfirmation={setConfirmation}
      />
      <header
        className={`${styles.siteHeader}  siteHeader bg-white  sticky-top pt-lg-3 py-1 w-100 border-bottom`}
        style={{ zIndex: 99 }}
      >
        <Container>
          <Navbar expand="lg" className="">
            <Button
              onClick={handleSidebar}
              className="d-lg-none border-0 p-0"
              variant="transparent"
              style={{ width: 30 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M3.75 10.5C3.55109 10.5 3.36032 10.4209 3.21967 10.2803C3.07902 10.1396 3 9.94887 3 9.74996V3.75146C3 3.55255 3.07902 3.36179 3.21967 3.22113C3.36032 3.08048 3.55109 3.00146 3.75 3.00146H9.75C9.94891 3.00146 10.1397 3.08048 10.2803 3.22113C10.421 3.36179 10.5 3.55255 10.5 3.75146V9.74996C10.5 9.94887 10.421 10.1396 10.2803 10.2803C10.1397 10.4209 9.94891 10.5 9.75 10.5H3.75ZM14.25 10.5C14.0511 10.5 13.8603 10.4209 13.7197 10.2803C13.579 10.1396 13.5 9.94887 13.5 9.74996V3.75146C13.5 3.55255 13.579 3.36179 13.7197 3.22113C13.8603 3.08048 14.0511 3.00146 14.25 3.00146H20.2485C20.4474 3.00146 20.6382 3.08048 20.7788 3.22113C20.9195 3.36179 20.9985 3.55255 20.9985 3.75146V9.74996C20.9985 9.94887 20.9195 10.1396 20.7788 10.2803C20.6382 10.4209 20.4474 10.5 20.2485 10.5H14.25ZM3.75 21C3.55109 21 3.36032 20.9209 3.21967 20.7803C3.07902 20.6396 3 20.4489 3 20.25V14.25C3 14.051 3.07902 13.8603 3.21967 13.7196C3.36032 13.579 3.55109 13.5 3.75 13.5H9.75C9.94891 13.5 10.1397 13.579 10.2803 13.7196C10.421 13.8603 10.5 14.051 10.5 14.25V20.25C10.5 20.4489 10.421 20.6396 10.2803 20.7803C10.1397 20.9209 9.94891 21 9.75 21H3.75ZM14.25 21C14.0511 21 13.8603 20.9209 13.7197 20.7803C13.579 20.6396 13.5 20.4489 13.5 20.25V14.25C13.5 14.051 13.579 13.8603 13.7197 13.7196C13.8603 13.579 14.0511 13.5 14.25 13.5H20.2485C20.4474 13.5 20.6382 13.579 20.7788 13.7196C20.9195 13.8603 20.9985 14.051 20.9985 14.25V20.25C20.9985 20.4489 20.9195 20.6396 20.7788 20.7803C20.6382 20.9209 20.4474 21 20.2485 21H14.25Z"
                  fill="#5392A9"
                />
              </svg>
            </Button>
            <Navbar.Brand className={`${styles.logo} d-lg-none`} href="#">
              <img src={logo} alt="" className={`img-fluid`} />
            </Navbar.Brand>
            <Navbar.Toggle
              className="border-0 p-0"
              aria-controls="navbarScroll"
            />
            <Navbar.Collapse
              className={` justify-content-end w-100`}
              id="navbarScroll"
            >
              <Nav className=" my-2 my-lg-0 align-items-center justify-content-between w-100 gap-10 flex-wrap">
                <div className="left d-flex align-items-center gap-10 flex-wrap">
                  <h5 className="m-0 fw-sbold text-capitalize d-lg-block d-none">
                    {id && "Details"}
                  </h5>
                </div>
                <div className="right d-flex align-items-center gap-10 flex-wrap">
                  <Link
                    className={`${styles.profileLink} px-3 d-flex align-items-center gap-10`}
                    to="/profile"
                  >
                    {adminProfile?.data?.imageUrl ? (
                      <img
                        src={adminProfile?.data?.imageUrl}
                        style={{ aspectRatio: 1, height: 40, width: 40 }}
                        alt=""
                        className="img-fluid rounded-circle object-fit-cover flex-shrink-0"
                      />
                    ) : (
                      <img
                        src={logo}
                        style={{ aspectRatio: 1, height: 40, width: 40 }}
                        alt=""
                        className="img-fluid rounded-circle object-fit-cover flex-shrink-0"
                      />
                    )}

                    <div className="content">
                      <h6 className="m-0 fw-bold text-dark">
                        {adminProfile?.data?.name}
                      </h6>
                      <p className="m-0 themeClr fw-sbold">
                        {adminProfile?.data?.email}
                      </p>
                    </div>
                  </Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    </>
  );
};

export default Header;
