import React from "react";
import styles from "./PageHeader.module.scss";
import { Link } from "react-router-dom";

const PageHeader = (props: any) => {
  return (
    <div className={styles.PageHeader}>
      <div className="page-header">
        <h1 className="page-title">{props.titles}</h1>
        <div>
          <ol className="breadcrumb">
            {props.items.map((value: any, index: any) => {
              return (
                <li key={index} className="breadcrumb-item">
                  <Link to="#">{value}</Link>
                </li>
              );
            })}
            <li className="breadcrumb-item active" aria-current="page">
              {props.active}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
