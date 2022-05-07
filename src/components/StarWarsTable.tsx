import { useMemo, useState } from "react";
// import axios from "axios";
import { ColDef } from "ag-grid-community";
import StarWarsToolTip from "./StarWarsToolTip";
import TableHeaderComponent from "../component-library/TableHeaderComponent";
import TableComponent from "../component-library/TableComponent";
import ButtonComponent from "../component-library/ButtonComponent";
import { ReloadOutlined } from "@ant-design/icons";
import { data } from "./data";
import useTableHandleData from "./hooks/useTableHandleData";
import "../App.css";

const StarWarsTable = () => {
  const tableData = data;
  const { rowData, handleTableData } = useTableHandleData();
  const [columnDefs] = useState<ColDef[]>([
    { headerName: "Title", field: "title", sortable: true, filter: 'agStringColumnFilter' },
    {
      headerName: "Characters",
      field: "characters.count",
      tooltipField: "characters",
      sortable: true,
      filter: 'agNumberColumnFilter'
    },
    { headerName: "Planets", field: "planets.count", tooltipField: "planets", filter: 'agNumberColumnFilter' },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      tooltipComponent: StarWarsToolTip,
    };
  }, []);

  // const fetchData = useCallback(() => {
  //   const endpoint = "https://parseapi.back4app.com/graphql";
  //   const graphqlQuery = {
  //     operationName: "allFilms",
  //     query: `query { roles { results { title }}}`,
  //     variables: {},
  //   };
  //   const fetchData = async () => {
  //     await axios({
  //       url: endpoint,
  //       method: "post",
  //       headers: {
  //         "X-Parse-Application-Id": "Gu4eZ1GBh5ir9m3PjUR5qx8HsIvlPF4lVQ3lP1ZC", // This is your app's application id
  //         "X-Parse-REST-API-Key": "Ojj5bteBQ9CLY5kQuQyocHsosk8IjsHyglXGRpz6", // This is your app's REST API key
  //       },
  //       data: {
  //         query: `
  //           query {
  //             films {
  //                   results {
  //                     title
  //                 }
  //               }
  //             }
  //           `,
  //       },
  //     });
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="center">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TableHeaderComponent avatarImage="/images/deathStar.png" headerTitle="Star Wars" />
        <ButtonComponent
          styles={{background: '#6B8FBA', color: 'white'}}
          buttonName="Click to Load data"
          buttonIcon={<ReloadOutlined />}
          onClick={() => handleTableData(tableData)}
        />
      </div>
      <TableComponent
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        tooltipShowDelay={1}
        overlayNoRowsTemplate={
          '<Card style="padding: 10px; border: 2px solid #444; background: #FFE81F ">Load Data to Begin</Card>'
        }
      />
    </div>
  );
};

export default StarWarsTable;
