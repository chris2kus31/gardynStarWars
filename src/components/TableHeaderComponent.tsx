import React from 'react';
import { Button, Card} from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import "../App.css";

export interface TableHeaderComponentProps{
   onClick: () => void;
}

const TableHeaderComponent = (props: TableHeaderComponentProps ) => {

    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1 >Star Wars</h1>
                <Button {...props}  >Click To Begin</Button>
            </div>
             
        </>
      
    )
}

export default TableHeaderComponent;