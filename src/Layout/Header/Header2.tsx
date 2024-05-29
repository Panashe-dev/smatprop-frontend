import React, { useState, useEffect } from "react";
import styles from "./Header.module.scss";
import { Link, useNavigate, useLocation } from "react-router-dom";
import verify from "jwt-decode";
import {
  FormControl,
  Navbar,
  Dropdown,
  InputGroup,
  Modal,
  Form,
} from "react-bootstrap";
import { postLoginApi, postRegisterApi } from "../../service/RestApiService";
import { getErrorMessage } from "../../service/CommonUtils";
import { isEmpty } from "../../service/CommonUtils";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideMenuIcon: any = () => {
  document.querySelector(".app")?.classList.toggle("sidenav-toggled");
};

const Header = () => {
  const errorMessage = (message) =>
    toast.error(<p className="text-white tx-16 mb-0">{message}</p>, {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 2000,
      theme: "colored",
    });

  const successMesage = () =>
    toast.success(
      <span className="text-white tx-16 mb-0">
        Registration was successful, please click the link sent to your email to
        activate your account.
      </span>,
      {
        position: toast.POSITION.TOP_RIGHT,
        hideProgressBar: true,
        autoClose: 5000,
        theme: "colored",
      }
    );

  document.querySelector(".main-content")?.addEventListener("click", () => {
    console.log("search-result");
    document.querySelector(".search-result")?.classList.add("d-none");
  });

  const userInfoLocalStorage = localStorage.getItem("userInfo");

  const location = useLocation();
  const from = location.state?.from?.pathname || "/user/dashboard";
  const admin = location.state?.from?.pathname || "/admin/dashboard";
  const to = location.state?.from?.pathname || "/#";

  const [err, setError] = useState("");
  const [loading, setLoader] = useState(false);
  const [loading2, setLoader2] = useState(false);
  const [passwordshow, setpasswordshow] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [data2, setData2] = useState({
    usernames: "",
    email: "",
    firstName: "",
    lastName: "",
    passwords: "",
    confirmPassword: "",
  });

  const { usernames, email, firstName, lastName, passwords } = data2;

  const { username, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    setError("");
  };

  const changeRegistrationHandler = (e) => {
    setData2({ ...data2, [e.target.name]: e.target.value });
    setError("");
  };

  const Login: any = async (e) => {
    if (username === "" || password === "") {
      errorMessage("please fill in all the required feilds");
    } else {
      try {
        setLoader(true);
        e.preventDefault();
        const loginResponse = await postLoginApi(data);
        setLoader(false);
        const accessToken = loginResponse?.accessToken;
        const token: any = verify(accessToken);
        const role = token["Granted_Authorities"][0]["role"];
        const userId = token["sub"];

        const userInfo = {
          token: loginResponse?.accessToken,
          userId: userId,
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        if (role === "USER") {
          window.location.replace(from);
        }
        if (role === "ADMIN") {
          window.location.replace(admin);
        }
      } catch (error) {
        errorMessage(getErrorMessage(error));
        setLoader(false);
        getErrorMessage(error);
      }
    }
  };

  const register: any = async (e) => {
    if (
      usernames === "" ||
      email === "" ||
      firstName === "" ||
      lastName === "" ||
      passwords === ""
    ) {
      errorMessage("please fill in all the required feilds");
    } else {
      try {
        setLoader2(true);
        e.preventDefault();
        const response = await postRegisterApi(data2);
        successMesage();
        setLoader2(false);
      } catch (error) {
        errorMessage(getErrorMessage(error));
        setLoader2(false);
        getErrorMessage(error);
      }
    }
  };

  let navigate = useNavigate();

  const RouteChange_ = () => {
    let path = `${process.env.PUBLIC_URL}/#`;
    navigate(path);
  };

  const [show, setShow] = useState(false);
  const viewDemoClose = () => setShow(false);
  const viewDemoShow = () => {
    RouteChange_();
    setShow(true);
  };

  const [showRegister, setShowRegister] = useState(false);
  const viewDemoCloseRegister = () => setShowRegister(false);
  const viewDemoShowRegister = () => {
    RouteChange_();
    setShowRegister(true);
  };

  const signOut = () => {
    localStorage.clear();
    window.location.replace(to);
  };

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [InputValue, setInputValue] = useState("");
  const [searchval, setsearchval] = useState("Type tariff code or Nappi Code");
  const [searchcolor, setsearchcolor] = useState("text-dark");
  const [NavData, setNavData] = useState<any>([]);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    RouteChange_();
    setShow(true);
  };

  return (
    <div className={styles.Header}>
      <div
        className="header sticky app-header header1"
        style={{ background: "#21356A" }}
      >
        <ToastContainer />
        <div className="container-fluid main-container">
          <div className="d-flex">
            <Link
              aria-label="Hide Sidebar"
              className="app-sidebar__toggle"
              data-bs-toggle="sidebar"
              to="#"
              onClick={() => SideMenuIcon()}
            />
            <Link
              className="logo-horizontal "
              to={`${process.env.PUBLIC_URL}/#`}
            >
              <img
                className=" cover-image"
                src={require("../../assets/smatprop.PNG")}
                alt="logo"
              ></img>
            </Link>

            <Navbar className="d-flex order-lg-2 ms-auto header-right-icons">
              <Dropdown className="dropdown d-none">
                <Link to="#" className="nav-link icon ">
                  <i className="fe fe-search"></i>
                </Link>
                <Dropdown.Menu className="header-search dropdown-menu-start ">
                  <InputGroup className="input-group w-100 p-2">
                    <FormControl type="text" placeholder="Search...." />
                    <InputGroup.Text className="btn btn-primary">
                      <i className="fe fe-search" aria-hidden="true"></i>
                    </InputGroup.Text>
                  </InputGroup>
                </Dropdown.Menu>
              </Dropdown>
              <Navbar.Toggle className="d-lg-none ms-auto header2">
                <span className="navbar-toggler-icon fe fe-more-vertical"></span>
              </Navbar.Toggle>

              <div className="responsive-navbar p-0">
                <Navbar.Collapse className="" id="navbarSupportedContent-4">
                  <div className="d-flex order-lg-2">
                    {/* Dark Mode */}

                    {isEmpty(userInfoLocalStorage) ? (
                      <>
                        <div className="dropdown d-flex">
                          <Link
                            to="#;"
                            className="nav-link icon"
                            data-bs-toggle="sidebar-right"
                            data-target=".sidebar-right"
                          >
                            <span
                              style={{ fontSize: 15, color: "#FAB006" }}
                              className="m-2 fw-bold"
                            ></span>
                          </Link>
                        </div>
                      </>
                    ) : (
                      <></>
                    )}

                    {!isEmpty(userInfoLocalStorage) ? (
                      <>
                        <div className="dropdown  d-flex">
                          <Link
                            to={"#"}
                            className="btn-sm btn btn-pill text-white"
                            style={{ background: "#F3764A", color: "#fff" }}
                            onClick={signOut}
                          >
                            <i
                              className="fe fe-log-out fs-7"
                              onClick={signOut}
                            ></i>{" "}
                            Sign Out
                          </Link>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="dropdown  d-flex">
                          <Link
                            to={"#"}
                            className="btn-sm btn  btn-pill text-white ml-3"
                            style={{ background: "#F3764A", color: "#fff" }}
                            onClick={viewDemoShowRegister}
                          >
                            <i className="fe fe-log-in fs-7"></i> Sign Up
                          </Link>
                        </div>
                        <div className="dropdown  d-flex">
                          <Link
                            to={"#"}
                            className="btn-sm btn  btn-pill text-white"
                            style={{
                              background: "#F3764A",
                              color: "#fff",
                              marginLeft: 8,
                            }}
                            onClick={viewDemoShow}
                          >
                            <i className="fe fe-lock fs-7"></i> Log On
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </Navbar.Collapse>
              </div>
            </Navbar>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={viewDemoClose}>
        <Modal.Body>
          <span className="d-flex ms-auto" onClick={viewDemoClose}>
            <i className="fe fe-x ms-auto"></i>
          </span>
          <h3 className="fx-bold text-center" style={{ color: "#F3764A" }}>
            SignIn
          </h3>
          <br />

          <div className="wrap-input100 validate-input input-group">
            <Link to="#" className="input-group-text bg-white text-muted">
              <i className="zmdi zmdi-email text-muted" aria-hidden="true"></i>
            </Link>
            <Form.Control
              className="input100 border-start-0 form-control ms-0"
              type="test"
              name="username"
              placeholder="Username"
              onChange={changeHandler}
              value={username}
              required
            />{" "}
          </div>

          <InputGroup
            className="wrap-input100 validate-input"
            id="Password-toggle"
          >
            <InputGroup.Text
              id="basic-addon2"
              className="bg-white p-0"
              onClick={() => setpasswordshow(!passwordshow)}
            >
              <Link to="#" className="bg-white text-muted p-3">
                <i
                  className={`zmdi ${
                    passwordshow ? "zmdi-eye" : "zmdi-eye-off"
                  } text-muted`}
                ></i>
              </Link>
            </InputGroup.Text>
            <Form.Control
              className="input100 border-start-0 ms-0"
              type={passwordshow ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={changeHandler}
              required
            />{" "}
          </InputGroup>

          <div className="container-login100-form-btn mb-4">
            <Link
              onClick={Login}
              to={`${process.env.PUBLIC_URL}/#`}
              className="login100-form-btn "
              style={{ background: "#21356A", color: "#fff" }}
            >
              Login
              {loading ? (
                <span
                  role="status"
                  aria-hidden="true"
                  className="spinner-border spinner-border-sm ms-2"
                ></span>
              ) : (
                ""
              )}
            </Link>
          </div>
        </Modal.Body>
      </Modal>

      <Modal show={showRegister} onHide={viewDemoCloseRegister}>
        <Modal.Body>
          <span className="d-flex ms-auto" onClick={viewDemoCloseRegister}>
            <i className="fe fe-x ms-auto"></i>
          </span>

          <div className="">
            <div className=" p-6">
              <form className="login100-form validate-form">
                <span
                  className="login100-form-title"
                  style={{ color: "#F3764A" }}
                >
                  Registration
                </span>
                <div
                  className="wrap-input100 validate-input input-group"
                  data-bs-validate="Valid email is required: ex@abc.xyz"
                >
                  <Link to="#" className="input-group-text bg-white text-muted">
                    <i className="mdi mdi-account" aria-hidden="true"></i>
                  </Link>
                  <input
                    className="input100 border-start-0 ms-0 form-control"
                    type="text"
                    placeholder="User name"
                    onChange={changeRegistrationHandler}
                    name="usernames"
                    value={usernames}
                  />
                </div>
                <div
                  className="wrap-input100 validate-input input-group"
                  data-bs-validate="Valid email is required: ex@abc.xyz"
                >
                  <Link to="#" className="input-group-text bg-white text-muted">
                    <i className="zmdi zmdi-email" aria-hidden="true"></i>
                  </Link>
                  <input
                    className="input100 border-start-0 ms-0 form-control"
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={changeRegistrationHandler}
                    value={email}
                  />
                </div>

                <div
                  className="wrap-input100 validate-input input-group"
                  data-bs-validate="Valid email is required: ex@abc.xyz"
                >
                  <Link to="#" className="input-group-text bg-white text-muted">
                    <i className="mdi mdi-account" aria-hidden="true"></i>
                  </Link>
                  <input
                    className="input100 border-start-0 ms-0 form-control"
                    type="text"
                    placeholder="Firtsname"
                    name="firstName"
                    onChange={changeRegistrationHandler}
                    value={firstName}
                  />
                </div>

                <div
                  className="wrap-input100 validate-input input-group"
                  data-bs-validate="Valid email is required: ex@abc.xyz"
                >
                  <Link to="#" className="input-group-text bg-white text-muted">
                    <i className="mdi mdi-account" aria-hidden="true"></i>
                  </Link>
                  <input
                    className="input100 border-start-0 ms-0 form-control"
                    type="text"
                    placeholder="Lastname"
                    name="lastName"
                    onChange={changeRegistrationHandler}
                    value={lastName}
                  />
                </div>

                <InputGroup
                  className="wrap-input100 validate-input"
                  id="Password-toggle"
                >
                  <InputGroup.Text
                    id="basic-addon2"
                    className="bg-white p-0"
                    onClick={() => setpasswordshow(!passwordshow)}
                  >
                    <Link to="#" className="bg-white text-muted p-3">
                      <i
                        className={`zmdi ${
                          passwordshow ? "zmdi-eye" : "zmdi-eye-off"
                        } text-muted`}
                      ></i>
                    </Link>
                  </InputGroup.Text>
                  <Form.Control
                    className="input100 border-start-0 ms-0"
                    type={passwordshow ? "text" : "password"}
                    name="passwords"
                    placeholder="Password"
                    onChange={changeRegistrationHandler}
                    value={passwords}
                    required
                  />{" "}
                </InputGroup>

                <label className="custom-control custom-checkbox mt-4">
                  <input type="checkbox" className="custom-control-input" />
                  <span className="custom-control-label">
                    Agree the{" "}
                    <Link to={`${process.env.PUBLIC_URL}/#`}>
                      terms and policy
                    </Link>
                  </span>
                </label>
                <div className="container-login100-form-btn">
                  <Link
                    onClick={register}
                    to={`${process.env.PUBLIC_URL}/#`}
                    className="login100-form-btn "
                    style={{ background: "#21356A", color: "#fff" }}
                  >
                    Register{" "}
                    {loading2 ? (
                      <span
                        role="status"
                        aria-hidden="true"
                        className="spinner-border spinner-border-sm ms-2"
                      ></span>
                    ) : (
                      ""
                    )}
                  </Link>
                </div>
                <div className="text-center pt-3">
                  <p className="text-dark mb-0">
                    Already have account?
                    <Link
                      to={`${process.env.PUBLIC_URL}/#`}
                      className="text-primary ms-1"
                    >
                      Sign In
                    </Link>
                  </p>
                </div>
                <label className="login-social-icon">
                  <span>Register with Social</span>
                </label>
                <div className="d-flex justify-content-center">
                  <Link to="#">
                    <div className="social-login me-4 text-center">
                      <i className="fa fa-google"></i>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="social-login me-4 text-center">
                      <i className="fa fa-facebook"></i>
                    </div>
                  </Link>
                  <Link to="#">
                    <div className="social-login text-center">
                      <i className="fa fa-twitter"></i>
                    </div>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Header;
function useSelector(arg0: (state: any) => any) {
  throw new Error("Function not implemented.");
}
