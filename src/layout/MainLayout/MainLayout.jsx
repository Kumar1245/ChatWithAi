import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./mainLayout.module.scss";
import Sidebar from "../../components/Header/sidebar/Sidebar";
import { connect, useSelector } from "react-redux";
const MainLayout = () => {
  const [sidebar, setSidebar] = useState();
  const location = useLocation();
  const { authToken } = useSelector((state) => state.Auth);
  return (
    <>
      <div className={`${styles.mainLayout} d-flex align-items-start`}>
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <main
          className={`${styles.MainBody} ms-auto MainBody position-relative`}
        >
          <Header sidebar={sidebar} setSidebar={setSidebar} />
          <Outlet />
        </main>
      </div>
    </>
  );
};
const mapStateToPros = (state) => {
  return {
    isAuthenticated: state.Auth.authToken,
    user: state.Auth.user,
    // loader: state.persistStore.loader,
  };
};
export default connect(mapStateToPros)(MainLayout);
