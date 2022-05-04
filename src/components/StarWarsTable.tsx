import React, { useCallback, useMemo, useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {
  ColDef,
  ColGroupDef,
  FirstDataRenderedEvent,
  Grid,
  GridOptions,
  GridReadyEvent,
} from 'ag-grid-community';
import '../App.css';



const StarWarsTable = () => {
  const gridRef = useRef<AgGridReact>(null);
  const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
  const gridStyle = useMemo(() => ({ height: 600, width: 800 }), []);
  const [rowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000}
]);

  const [columnDefs] = useState([
      { field: 'title' },
      { field: 'characters' },
      { field: 'planets' }
  ])
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

    return(
      <div className='center'>
        <div className="ag-theme-alpine" style={gridStyle}>
          <AgGridReact
              ref={gridRef}
              rowData={rowData}
              columnDefs={columnDefs}
              onFirstDataRendered={onFirstDataRendered}
              >
          </AgGridReact>
      </div>
      </div>
    )
}

export default StarWarsTable;