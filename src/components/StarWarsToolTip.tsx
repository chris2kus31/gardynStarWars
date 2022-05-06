import React, { useMemo } from "react";
import { List, Tooltip, Tag, Card } from "antd";
import { ITooltipParams } from "ag-grid-community";
import "../App.css";

const StarWarsToolTip = (props: ITooltipParams & { color: string }) => {

  const d = useMemo( () => props.value.results,[props.value.results] ) 
  return (
      <Card headStyle={{backgroundColor: '#C7CED4'}} title={props.colDef?.headerName}  style={{width: '50%',backgroundColor: '#FFE81F'}}>
        {d.map( (item:any) => {
           return (
               <Tag color="black" key={item.id}>{item.name}</Tag>
           )
        } )}
      </Card>
  );
};

export default StarWarsToolTip;
