import React from "react";
import { Button } from "antd";

type ButtonComponentProps = {
  onClick: () => void;
  loading?: boolean;
  styles?: React.CSSProperties;
  buttonIcon: JSX.Element;
  buttonName: string;
};

const ButtonComponent = ({
  onClick,
  buttonIcon,
  buttonName,
  styles
}: ButtonComponentProps) => {
  return (
    <Button style={styles} onClick={onClick} icon={buttonIcon}>
      {buttonName}
    </Button>
  );
};

export default ButtonComponent;
