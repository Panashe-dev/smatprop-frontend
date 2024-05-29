import { useState, useEffect } from "react";
import useAuth from "../../Hooks/UseAuth";
import verify from "jwt-decode";
import { isEmpty } from "../../service/CommonUtils";

export let MENUITEMS: any = () => {
  const { setAuth }: any = useAuth();

  const userInfoLocalStorage = localStorage.getItem("userInfo");

  function getRole() {
    if (!isEmpty(userInfoLocalStorage)) {
      const accessToken = JSON.parse(userInfoLocalStorage).token;
      const token: any = verify(accessToken);
      const role = token["Granted_Authorities"][0]["role"];
      const userId = token["sub"];
      setAuth({ role, accessToken, userId });
      return role;
    } else {
      return "VISITOR";
    }
  }

  if (getRole() === "USER") {
    return (MENUITEMS = [
      {
        menutitle: "Menu",
        Items: [
          {
            path: `${process.env.PUBLIC_URL}/user/dashboard`,
            icon: "fa fa-square-o",
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard",
          },
        ],
      },
    ]);
  } else if (getRole() === "VISITOR") {
    return (MENUITEMS = [
      {
        menutitle: "Menu",
        Items: [
          {
            path: `${process.env.PUBLIC_URL}/#`,
            icon: "fa fa-square-o",
            type: "link",
            active: false,
            selected: false,
            title: "Home",
          },
          {
            path: `${process.env.PUBLIC_URL}/about/us`,
            icon: "fa fa-square-o",
            type: "link",
            active: false,
            selected: false,
            title: "About",
          },
          {
            path: `${process.env.PUBLIC_URL}/properties`,
            icon: "fa fa-square-o",
            type: "link",
            active: false,
            selected: false,
            title: "Properties",
          },
        ],
      },
      {
        Items: [
          {
            title: "Applications",
            icon: "fa fa-square-o",
            type: "sub",
            active: false,
            selected: false,
            Names: "",
            Name: "",
            children: [
              {
                path: `${process.env.PUBLIC_URL}/#`,
                type: "link",
                active: false,
                selected: false,
                title: "Commercial",
              },
              {
                path: `${process.env.PUBLIC_URL}/#`,
                type: "link",
                active: false,
                selected: false,
                title: " Industrial",
              },
              {
                path: `${process.env.PUBLIC_URL}/#`,
                type: "link",
                active: false,
                selected: false,
                title: "Holiday Homes",
              },
              {
                path: `${process.env.PUBLIC_URL}/#`,
                type: "link",
                active: false,
                selected: false,
                title: "Residential Property",
              },
              {
                path: `${process.env.PUBLIC_URL}/#`,
                type: "link",
                active: false,
                selected: false,
                title: "Storage Units",
              },
              {
                path: `${process.env.PUBLIC_URL}/#`,
                type: "link",
                active: false,
                selected: false,
                title: "Students Accommodation",
              },
            ],
          },
        ],
      },
      {
        menutitle: "Menu",
        Items: [
          {
            path: `${process.env.PUBLIC_URL}/features`,
            icon: "fa fa-square-o",
            type: "link",
            active: false,
            selected: false,
            title: "Features",
          },
          {
            path: `${process.env.PUBLIC_URL}/pricing`,
            icon: "fa fa-square-o",
            type: "link",
            active: false,
            selected: false,
            title: "Pricing",
          },
          {
            path: `${process.env.PUBLIC_URL}/contact/us`,
            icon: "fa fa-square-o",
            type: "link",
            active: false,
            selected: false,
            title: "Contact US",
          },
        ],
      },
    ]);
  } else if (getRole() === "ADMIN") {
    return (MENUITEMS = [
      {
        menutitle: "Menu",
        Items: [
          {
            path: `${process.env.PUBLIC_URL}/admin/dashboard`,
            icon: "fa fa-square-o",
            type: "link",
            active: false,
            selected: false,
            title: "Dashboard",
          },
        ],
      },
      {
        Items: [
          {
            title: "Administrator",
            icon: "fa fa-square-o",
            type: "sub",
            Names: "",
            Name: "",
            children: [
              {
                path: `${process.env.PUBLIC_URL}/admin/accounts`,
                type: "link",
                active: false,
                selected: false,
                title: "Accounts",
              },
            ],
          },
        ],
      },
      {
        Items: [
          {
            title: "Applications",
            icon: "fa fa-square-o",
            type: "sub",
            Names: "",
            Name: "",
            children: [
              {
                path: `${process.env.PUBLIC_URL}/admin/applicants`,
                type: "link",
                active: false,
                selected: false,
                title: "Applicants",
              },
            ],
          },
        ],
      },
    ]);
  }
};
