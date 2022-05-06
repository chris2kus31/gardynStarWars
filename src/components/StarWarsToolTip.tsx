import React, { useMemo } from "react";
import { List, Tooltip, Tag, Card } from "antd";
import { ITooltipParams } from "ag-grid-community";
import "../App.css";

const StarWarsToolTip = (props: ITooltipParams & { color: string }) => {

  const d = useMemo( () => props.value.results,[] ) 
  return (
      <Card headStyle={{backgroundColor: '#C7CED4'}} title={props.colDef?.headerName}  style={{width: '50%',backgroundColor: '#FFE81F'}}>
        {d.map( (item:any) => {
           return (
               <Tag color="black" key={item.id}>{item.name}</Tag>
           )
        } )}
      </Card>
    // <div
    //   className="custom-tooltip"
    //   style={{
    //     backgroundColor: props.color || "white",
    //     height: "100%",
    //     zIndex: 1000,
    //   }}
    // >
    //   <p>
    //     <span>Characters in Movie</span>
    //   </p>
    //   <div style={{ paddingLeft: "10px", zIndex: '999999999 !important' }}>
    //     <List
    //       size="small"
    //       dataSource={d}
    //       renderItem={(item: any) => (
    //         <List.Item style={{padding: '0px'}}>
    //           <List.Item.Meta style={{fontSize: '8px'}} title={item.name} />
    //         </List.Item>
    //       )}
    //     />
    //     {/* {d.map((item:any) => {
    //              return <span key={item.id}>{item.name}</span>
    //           } )} */}
    //   </div>
    //   <ReactTooltip />
    // </div>
  );
};

export default StarWarsToolTip;
