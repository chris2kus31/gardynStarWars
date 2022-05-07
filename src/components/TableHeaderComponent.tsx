import React from 'react';
import { Button, Card} from "antd";
import { ReloadOutlined } from '@ant-design/icons';
import "../App.css";

type TableHeaderComponentProps = {
   onClick: () => void;
   loading?: boolean;
   headerTitle: string;
   styles?: React.CSSProperties;
}

const TableHeaderComponent = ({loading, onClick, headerTitle, styles}: TableHeaderComponentProps ) => {

    return (
            <div style={styles}>
                <h1>{headerTitle}</h1>
                <Button onClick={onClick} icon={<ReloadOutlined />} >Click To Begin</Button>
            </div>
    )
}

export default TableHeaderComponent;