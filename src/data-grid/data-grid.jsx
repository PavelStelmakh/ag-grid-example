import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { defaultColDef, gridOptions } from './grid-settings';
import { columnDefs } from './default-column-defs';
import { rowData } from './rows-data';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const DataGrid = () => {
  const gridRef = useRef();

  const wrapText = () => {
    const column = gridRef.current.columnApi.getColumn('data10');
    const colDef = column.getColDef();

    column.setColDef({ ...colDef, wrapText: true, autoHeight: true });
  };

  const clipText = () => {
    const column = gridRef.current.columnApi.getColumn('data10');
    const colDef = column.getColDef();

    column.setColDef({ ...colDef, wrapText: false, autoHeight: false });
  };

  return (
    <div style={{ height: '100%' }}>
      <div>
        <button onClick={ wrapText }>Wrap Text</button>
        <button onClick={ clipText }>Clip Text</button>
      </div>
      <AgGridReact ref={ gridRef }
          gridOptions={ gridOptions }
          enableRangeSelection
          enableFillHandle
          enableCellChangeFlash
          suppressClearOnFillReduction
          checkboxSelection
          rowDragManaged
          suppressRowClickSelection
          className="ag-theme-alpine"
          rowSelection="multiple"
          columnDefs={ columnDefs }
          defaultColDef={ defaultColDef }
          rowData={ rowData }
          popupParent={ document.body } />
    </div>
  );
};
