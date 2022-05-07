import React, { useMemo } from "react";
import { Tag, Card } from "antd";
import { ITooltipParams } from "ag-grid-community";
import "../App.css";

type ToolTipProps = {
    colorTag: string
}

const StarWarsToolTip = (props: ITooltipParams & ToolTipProps) => {

  const toolTipData = useMemo( () => props.value.results,[props.value.results] ) 

  return (
      <Card headStyle={{backgroundColor: '#C7CED4'}} title={props.colDef?.headerName}  style={{width: '50%',backgroundColor: '#FFE81F'}}>
        {toolTipData.map( (item:any) => 
            <Tag color="black" key={item.id}>{item.name}</Tag> 
        )}
      </Card>
  );
};

export default StarWarsToolTip;
