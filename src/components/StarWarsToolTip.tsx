import React, { useMemo } from "react";
import { List, Avatar } from "antd";
import ReactTooltip from "react-tooltip";
import { ITooltipParams } from "ag-grid-community";
import "../App.css";

const StarWarsToolTip = (props: ITooltipParams & { color: string }) => {
  const d = props.value.results;
  return (
    <div
      className="custom-tooltip"
      style={{
        backgroundColor: props.color || "white",
        height: "100%",
        zIndex: 1,
      }}
    >
      <p>
        <span>Characters in Movie</span>
      </p>
      <div style={{ paddingLeft: "10px" }}>
        <List
          dataSource={d}
          renderItem={(item: any) => (
            <List.Item>
              <List.Item.Meta title={item.name} />
            </List.Item>
          )}
        />
        {/* {d.map((item:any) => {
                 return <span key={item.id}>{item.name}</span>
              } )} */}
      </div>
    </div>
  );
};

export default StarWarsToolTip;
