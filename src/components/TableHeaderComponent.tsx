import React from 'react';
import { Button} from "antd";
import "../App.css";

const TableHeaderComponent = () => {

    return (
        <>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <h1 >Star Wars</h1>
                <Button>Click To Begin</Button>
            </div>
             
        </>
      
    )
}

export default TableHeaderComponent;