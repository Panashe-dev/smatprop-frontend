import React, { Fragment, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Layout/Loader/Loader";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider } from "./context/AuthProvider";
import RequireAuth from "./Hooks/RequireAuth";

const App = lazy(() => import("./components/app2"));
const Dashboard = lazy(() => import("./screens/Dashboard/Dashboard"));
const TanStackQueryProvider = lazy(() => import("./service/tanStackProvider"));
const AdminDashboard = lazy(() => import("./screens/admin/dashboard"));
const UserDashboard = lazy(() => import("./screens/user/UserDashboard"));
const Properties = lazy(() => import("./screens/property/Properties"));
const ApplicationForm = lazy(() => import("./screens/applicantion/Applicants"));
const Accounts = lazy(() => import("./screens/admin/accounts"));
const ApplicationList = lazy(() => import("./screens/admin/applications"));
const AboutUs = lazy(() => import("./screens/aboutUs/aboutUs"));
const Features = lazy(() => import("./screens/features/features"));
const ConatctUs = lazy(() => import("./screens/contactUs/conatctUs"));
const Pricing = lazy(() => import("./screens/pricing/pricing"));

const container: HTMLElement | any = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Fragment>
      <BrowserRouter>
        <AuthProvider>
          <TanStackQueryProvider>
            <React.Suspense fallback={<Loader />}>
              <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<App />}>
                  <Route
                    path={`${process.env.PUBLIC_URL}/`}
                    element={<Dashboard />}
                  />
                  <Route
                    path={`${process.env.PUBLIC_URL}/about/us`}
                    element={<AboutUs />}
                  />

                  <Route
                    path={`${process.env.PUBLIC_URL}/features`}
                    element={<Features />}
                  />

                  <Route
                    path={`${process.env.PUBLIC_URL}/contact/us`}
                    element={<ConatctUs />}
                  />

                  <Route
                    path={`${process.env.PUBLIC_URL}/properties`}
                    element={<Properties />}
                  />

                  <Route
                    path={`${process.env.PUBLIC_URL}/pricing`}
                    element={<Pricing />}
                  />

                  <Route element={<RequireAuth allowedRoles={["USER"]} />}>
                    <Route
                      path={`${process.env.PUBLIC_URL}/user/dashboard`}
                      element={<UserDashboard />}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/user/applicationn/form/:id?`}
                      element={<ApplicationForm />}
                    />
                  </Route>

                  <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
                    <Route
                      path={`${process.env.PUBLIC_URL}/admin/dashboard`}
                      element={<AdminDashboard />}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/admin/accounts`}
                      element={<Accounts />}
                    />
                    <Route
                      path={`${process.env.PUBLIC_URL}/admin/applicants`}
                      element={<ApplicationList />}
                    />
                  </Route>
                </Route>
              </Routes>
            </React.Suspense>
          </TanStackQueryProvider>
        </AuthProvider>
      </BrowserRouter>
    </Fragment>
  </React.StrictMode>
);

reportWebVitals();
