import React from "react";
import { Button } from "antd";
import ButtonComponent from "./ButtonComponent";
import "../App.css";

type TableHeaderComponentProps = {
  headerTitle: string;
  styles?: React.CSSProperties;
};

const TableHeaderComponent = ({
  headerTitle,
  styles,
}: TableHeaderComponentProps) => {
  return (
    <div style={styles}>
      <h1>{headerTitle}</h1>
    </div>
  );
};

export default TableHeaderComponent;
