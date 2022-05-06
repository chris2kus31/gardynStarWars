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
import {
  ColDef,
  ColGroupDef,
  FirstDataRenderedEvent,
  Grid,
  GridOptions,
  GridReadyEvent,
} from "ag-grid-community";
import StarWarsToolTip from "./StarWarsToolTip";
import "../App.css";

const StarWarsTable = () => {
  const gridRef = useRef<AgGridReact>(null);
  const containerStyle = useMemo(() => ({ width: "100%", height: "100%" }), []);
  const gridStyle = useMemo(() => ({ height: 600, width: 800 }), []);
  const [rowData] = useState([
    { title: "A New Hope", characters: 3, planets: 3 },
    { title: "The Phantom Menace", characters: 3, planets: 3 },
    { title: "Return of the Jedi", characters: 3, planets: 3 },
  ]);

  const [columnDefs] = useState([
    { headerName: "Title", field: "title" },
    { headerName: "Characters", field: "characters", tooltipField: "title" },
    { headerName: "Planets", field: "planets" },
  ]);

  const defaultColDef = useMemo<ColDef>(() => {
    return {
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
      tooltipComponent: StarWarsToolTip,
    };
  }, []);

  const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
    gridRef.current!.api.sizeColumnsToFit();
  }, []);

  // const [rowData, setRowData] = useState();
  // const [columnDefs, setColumnDefs] = useState([
  //   {
  //     field: 'athlete',
  //     minWidth: 150,
  //     tooltipField: 'athlete',
  //     tooltipComponentParams: { color: '#ececec' },
  //   },
  //   { field: 'country', minWidth: 130, tooltipField: 'country' },
  //   { field: 'Planets', minWidth: 130, tooltipField: 'country' }
  // ]);
  // const defaultColDef = useMemo(() => {
  //   return {
  //     editable: true,
  //     sortable: true,
  //     flex: 1,
  //     minWidth: 100,
  //     filter: true,
  //     resizable: true,
  //     tooltipComponent: CustomTooltip,
  //   };
  // }, []);

  // const onGridReady = useCallback(() => {
  //   fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setRowData(data);
  //     });
  // }, []);

  useEffect(() => {
    const endpoint = "https://parseapi.back4app.com/graphql";
    const graphqlQuery = {
      "operationName": "allFilms",
      "query": `query { roles { results { title }}}`,
      "variables": {}
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
            `
        }
      });
    };

    fetchData();
  }, []);

  return (
    <div className="center">
      <div className="ag-theme-alpine" style={gridStyle}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          tooltipShowDelay={1}
          onFirstDataRendered={onFirstDataRendered}
        ></AgGridReact>
      </div>
    </div>
  );
};

export default StarWarsTable;
