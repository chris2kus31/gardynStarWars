import {
  useCallback,
  useMemo,
  useState,
} from "react";
import axios from "axios";
import { ColDef} from "ag-grid-community";
import StarWarsToolTip from "./StarWarsToolTip";
import TableHeaderComponent from "./TableHeaderComponent";
import TableComponent from "./TableComponent";
import { ReloadOutlined } from '@ant-design/icons';
import { data } from "./data";
import useTableHandleData from "./hooks/useTableHandleData";
import "../App.css";

const StarWarsTable = () => {
  const tableData = data;
  const {rowData, handleTableData} = useTableHandleData()
  const [columnDefs] = useState<ColDef[]>([
    { headerName: "Title", field: "title" },
    {
      headerName: "Characters",
      field: "characters.count",
      tooltipField: "characters",
    },
    { headerName: "Planets", field: "planets.count", tooltipField: "planets" },
  ]);
  const defaultColDef = useMemo<ColDef>(() => {
    return {
      tooltipComponent: StarWarsToolTip,
    };
  }, []);

  const fetchData = useCallback(() => {
    const endpoint = "https://parseapi.back4app.com/graphql";
    const graphqlQuery = {
      operationName: "allFilms",
      query: `query { roles { results { title }}}`,
      variables: {},
    };
    const fetchData = async () => {
      const result = await axios({
        url: endpoint,
        method: "post",
        headers: {
          "X-Parse-Application-Id": "Gu4eZ1GBh5ir9m3PjUR5qx8HsIvlPF4lVQ3lP1ZC", // This is your app's application id
          "X-Parse-REST-API-Key": "Ojj5bteBQ9CLY5kQuQyocHsosk8IjsHyglXGRpz6", // This is your app's REST API key
        },
        data: {
          query: `
            query {
              films {
                    results {
                      title
                  }
                }
              }
            `,
        },
      });
    };
    fetchData();
  }, []);

  return (
    <div className="center">
      <TableHeaderComponent
        styles={{ display: "flex", justifyContent: "space-between" }}
        headerTitle="Star Wars"
        onClick={() => handleTableData(tableData)}
        buttonIcon={<ReloadOutlined />}
      />
        <TableComponent
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          tooltipShowDelay={1}
          overlayNoRowsTemplate={
            '<Card style="padding: 10px; border: 2px solid #444; background: #FFE81F ">Click button to begin</Card>'
          }
        />
    </div>
  );
};

export default StarWarsTable;
