import { checkboxColumn } from './grid-settings';

export const columnDefs = [
  checkboxColumn,
  {
    field: 'data1',
    headerName: 'Data 1',
    pinned: 'left',
    suppressMenu: true,
    sortable: true,
    lockPosition: 'left',
    cellStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    sort: 'desc',
    sortingOrder: [ 'asc', 'desc' ],
    width: 150,
    minWidth: 90
  },
  {
    field: 'data2',
    headerName: 'Data 2',
    pinned: 'left',
    lockPosition: 'left',
    cellStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    width: 120,
    minWidth: 90
  },
  {
    field: 'data3',
    headerName: 'Data 3',
    cellStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    minWidth: 90
  },
  {
    field: 'data1',
    headerName: 'Data 1',
    cellStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    minWidth: 90
  },
  {
    field: 'data4',
    headerName: 'Data 4',
    cellStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    minWidth: 90
  },
  {
    field: 'data5',
    headerName: 'Data 5',
    cellStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    minWidth: 90
  },
  {
    field: 'data6',
    headerName: 'Data 6',
    cellStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    minWidth: 90
  },
  {
    field: 'data7',
    headerName: 'Data 7',
    cellStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    minWidth: 90
  },
  {
    field: 'data8',
    headerName: 'Data 8',
    width: 120,
    minWidth: 90
  },
  {
    field: 'data9',
    headerName: 'Data 9',
    cellStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    minWidth: 90
  },
  {
    field: 'data10',
    headerName: 'Data 10',
    minWidth: 90,
    width: 130
  },
  {
    field: 'data11',
    headerName: 'Data 11',
    cellStyle: {
      display: 'block',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden'
    },
    minWidth: 90
  }
];
