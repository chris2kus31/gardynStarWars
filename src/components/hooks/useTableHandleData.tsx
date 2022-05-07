import { useState } from "react";

const useTableHandleData = () => {
  const [rowData, setRowData] = useState([]);

  const handleTableData = (tableData: any) => {
    setRowData(tableData);
  };

  return { rowData, handleTableData };
};

export default useTableHandleData;
