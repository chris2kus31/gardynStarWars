import {useMemo, useCallback, useRef}from 'react'
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {FirstDataRenderedEvent } from "ag-grid-community";
import "../App.css";



const TableComponent = (props:any) => {
    const gridRef = useRef<AgGridReact>(null);
    const gridStyle = useMemo(() => ({ height: 600, width: 800 }), []);
    const onFirstDataRendered = useCallback((params: FirstDataRenderedEvent) => {
        gridRef.current!.api.sizeColumnsToFit();
      }, []);
    return (
        <div className="ag-theme-alpine" style={gridStyle}>
            <AgGridReact ref={gridRef} onFirstDataRendered={onFirstDataRendered} {...props} />    
        </div>
    )
}

export default TableComponent;