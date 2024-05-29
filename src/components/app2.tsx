import React, { FC, Fragment, lazy, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Layout/Header/Header2";
import { Sidebar2 } from "../Layout/Sidebar/Sidebar2";
import Switcher from "../Layout/Switcher/Switcher";
import BacktoTop from "../Layout/Backtotop/Backtotop";
import useAuth from "../Hooks/UseAuth";
import { isEmpty } from "../service/CommonUtils";
interface App2Props {}

const Footers = lazy(() => import("../Layout/Footer2/Footer2"));

const App2: FC<App2Props> = () => {
  document
    .querySelector("body")
    ?.classList.remove("login-img", "landing-page", "horizontal");
  document
    .querySelector("body")
    ?.classList.add("app", "sidebar-mini", "ltr", "light-mode");

  const { auth }: any = useAuth();
  const [allowedRoles] = useState(auth?.role);

  const MainFooter = () => {
    if (isEmpty(allowedRoles)) {
      if (allowedRoles === "ADMIN" || allowedRoles === "USER") {
        return <></>;
      } else {
        return <Footers />;
      }
    }
  };

  return (
    <Fragment>
      <div className="horizontalMenucontainer">
        <Switcher />
        <div className="page">
          <div className="page-main">
            <Header />
            <div className="sticky" style={{ paddingTop: "-74px" }}>
              <Sidebar2 />
            </div>
            <div className="jumps-prevent" style={{ paddingTop: "74px" }}></div>
            <div className="main-content app-content mt-0">
              <div className="">
                <div className="main-container">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
          <MainFooter />
        </div>
        <BacktoTop />
      </div>
    </Fragment>
  );
};

export default App2;
