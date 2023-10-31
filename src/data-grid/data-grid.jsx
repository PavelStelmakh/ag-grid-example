import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { defaultColDef, gridOptions } from './grid-settings';
import { columnDefs } from './default-column-defs';
import { rowData } from './rows-data';
import 'ag-grid-community/dist/styles/ag-grid.scss';
import 'ag-grid-community/dist/styles/ag-theme-alpine/sass/ag-theme-alpine.scss';

export const DataGrid = () => (
  <AgGridReact gridOptions={ gridOptions }
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
);
