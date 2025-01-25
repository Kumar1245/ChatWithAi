import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { privateRoutes, routes } from "./pages/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Assets/css/style.css";
import "./Assets/css/responsive.css";
import AuthLayout from "./layout/Auth/authLayout";
import MainLayout from "./layout/MainLayout/MainLayout";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
  const { authToken, user } = useSelector((state) => state.Auth);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("authToken", authToken, user);

  return (
    <Routes>
      {!authToken ? (
        <Route element={<AuthLayout />}>
          <Route index element={<Navigate to="/login" />} />
          {routes.map((data, index) => (
            <Route
              onUpdate={() => window.scrollTo(0, 0)}
              key={index}
              path={data.path}
              element={data.component}
            />
          ))}
          <Route path="*" element={<Navigate to="/login" />} />
        </Route>
      ) : (
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" />} />
          {privateRoutes.map((data, index) => (
            <Route key={index} path={data.path} element={data.component} />
          ))}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
