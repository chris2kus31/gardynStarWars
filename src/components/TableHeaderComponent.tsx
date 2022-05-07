import React from 'react';
import { Button, Card} from "antd";
import { ReloadOutlined } from '@ant-design/icons';
import "../App.css";

export interface TableHeaderComponentProps{
   onClick: () => void;
   loading: boolean;
}

const TableHeaderComponent = (props: TableHeaderComponentProps ) => {

    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1 >Star Wars</h1>
                <Button {...props} icon={<ReloadOutlined />} >Click To Begin</Button>
            </div>
             
        </>
      
    )
}

export default TableHeaderComponent;