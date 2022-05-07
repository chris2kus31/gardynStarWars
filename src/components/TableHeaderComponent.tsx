import React from "react";
import { Button } from "antd";
import "../App.css";

type TableHeaderComponentProps = {
  onClick: () => void;
  loading?: boolean;
  headerTitle: string;
  styles?: React.CSSProperties;
  buttonIcon: JSX.Element;
};

const TableHeaderComponent = ({
  loading,
  onClick,
  headerTitle,
  styles,
  buttonIcon,
}: TableHeaderComponentProps) => {
  return (
    <div style={styles}>
      <h1>{headerTitle}</h1>
      <Button onClick={onClick} icon={buttonIcon}>
        Click To Begin
      </Button>
    </div>
  );
};

export default TableHeaderComponent;
