import React from "react";
import "../App.css";
import { Avatar } from "antd";

interface TableHeaderComponentProps {
  headerTitle: string;
  styles?: React.CSSProperties;
  avatarImage?: string;
}

const TableHeaderComponent = ({
  headerTitle,
  styles,
  avatarImage
}: TableHeaderComponentProps) => {
  return (
    <div style={styles || {display: 'flex'}}>
      <h1>{headerTitle}</h1>
      <Avatar src={avatarImage} />
    </div>
  );
};

export default TableHeaderComponent;
