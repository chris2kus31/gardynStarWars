import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { ColDef, FirstDataRenderedEvent } from "ag-grid-community";
import StarWarsToolTip from "./StarWarsToolTip";
import TableHeaderComponent from "./TableHeaderComponent";
import { Button } from "antd";
import { data } from "./data";
import "../App.css";

const StarWarsTable = () => {
  const p = data
  const gridRef = useRef<AgGridReact>(null);
  const gridStyle = useMemo(() => ({ height: 600, width: 800 }), []);
  const [rowData, setRowData] = useState([]);

  const [columnDefs] = useState([
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
      editable: true,
      sortable: true,
      filter: true,
      resizable: true,
      zIndez: 999999999,
      tooltipComponent: StarWarsToolTip,
    };
  }, []);

  const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
    gridRef.current!.api.sizeColumnsToFit();
  }, []);

  const handleTableData = (p:any) => {
    setRowData(p);
  };

  useEffect(() => {
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

    // fetchData();
  }, []);

  return (
    <div className="center">
      <TableHeaderComponent onClick={() => handleTableData(p)} />
      <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          tooltipShowDelay={1}
          onFirstDataRendered={onFirstDataRendered}
          overlayNoRowsTemplate={
            '<span style="padding: 10px; border: 2px solid #444; background: lightgoldenrodyellow">Click Button to Begin</span>'
          }
        ></AgGridReact>
      </div>
    </div>
  );
};

export default StarWarsTable;
