import React, { useRef, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import { defaultColDef, gridOptions } from './grid-settings';
import { columnDefs } from './default-column-defs';
import { rowData } from './rows-data';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const DataGrid = () => {
  const gridRef = useRef();

  const wrapText = (id) => {
    const newDefs = gridRef.current.api.getColumnDefs();

    newDefs.forEach((def) => {
      if (def.field === id) {
        def.wrapText = true;
        def.autoHeight = true;
      }
    });

    gridRef.current.api.setGridOption('columnDefs', newDefs);
  };

  const clipText = (id) => {
    const newDefs = gridRef.current.api.getColumnDefs();

    newDefs.forEach((def) => {
      if (def.field === id) {
        def.wrapText = false;
        def.autoHeight = false;
      }
    });

    gridRef.current.api.setGridOption('columnDefs', newDefs);
  };

  return (
    <div style={{ height: '100%' }}>
      <div>
        <button onClick={ () => wrapText('data10') }>Wrap Text data10</button>
        <button onClick={ () => wrapText('data8') }>Wrap Text data8</button>
        <button onClick={ () => clipText('data10') }>Clip Text data10</button>
        <button onClick={ () => clipText('data8') }>Clip Text data8</button>
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
