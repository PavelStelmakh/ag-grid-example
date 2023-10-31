export const defaultColDef = {
  resizable: true,
  sortable: true,
  editable: true,
  filter: true
};

export const gridOptions = {
  headerHeight: 40,
  rowHeight: 40
};

export const checkboxColumn = {
  field: 'id-checkbox-column',
  checkboxSelection: true,
  headerCheckboxSelection: true,
  headerCheckboxSelectionFilteredOnly: true,
  headerName: '',
  filter: false,
  lockPinned: true,
  lockPosition: true,
  editable: false,
  resizable: false,
  sortable: false,
  suppressColumnsToolPanel: true,
  suppressFiltersToolPanel: true,
  suppressPaste: true,
  suppressMenu: true,
  suppressMovable: true,
  suppressNavigable: true,
  suppressSizeToFit: true,
  suppressFillHandle: true,
  width: 46,
  pinned: 'left',
  rowDrag: true,
  rowDragText({ rowNode: { data } }) {
    return Object.values(data).join(', ');
  }
};
