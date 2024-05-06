import './App.css'
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Chip from '@mui/material/Chip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { ArrowUpward, ArrowDownward, Description } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { GridRowModes, GridActionsCellItem, GridRowEditStopReasons } from '@mui/x-data-grid';

const renderProductNames = (productNames) => {
  const names = productNames.split(';');
  return (
    <Table size="small">
      <TableBody>
        {names.map((name, index) => (
          <>
            <TableRow key={index}>
              <TableCell component="tr" scope="row">
                {name}
              </TableCell>
            </TableRow>
          </>
        ))}
      </TableBody>
    </Table>
  );
};

const renderVariants = (variants) => {
  return (
    <Table size="small">
      <TableBody>
        <TableRow style={{ backgroundColor: '#EAECF0' }}>
          <TableCell component="th" scope="row" colSpan="4" align="center"><Chip label="View All" size="small" /></TableCell>
        </TableRow>
        {variants.map((row, index) => (
          <>
            <TableRow key={index} style={{ backgroundColor: '#344054' }}>
              <TableCell component="th" scope="row" style={{ color: 'white' }}>% Concentration</TableCell>
              <TableCell component="th" scope="row" style={{ color: 'white' }}>Flavour</TableCell>
              <TableCell component="th" scope="row" style={{ color: 'white' }}>Weight</TableCell>
              <TableCell component="th" scope="row" style={{ color: 'white' }}>Squirrels</TableCell>
            </TableRow>
            {row.map((detail, detailIndex) => (
              <TableRow key={detailIndex}>
                <TableCell component="tr" scope="row"><Chip label={detail.values.concentration} size="small" /></TableCell>
                <TableCell component="tr" scope="row"><Chip label={detail.values.flavour} size="small" /></TableCell>
                <TableCell component="tr" scope="row"><Chip label={detail.values.weight} size="small" /></TableCell>
                <TableCell component="tr" scope="row"><Chip label={detail.values.squirrels} size="small" /></TableCell>
              </TableRow>
            ))}
          </>
        ))}
      </TableBody>
    </Table>
  );
};

const renderChip = (item) => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Chip label={item} size="small" />
    </div>
  );
};

const renderDocuments = (documents) => {
  return (
    <>
      {documents.map((row, index) => (
        <div style={{ paddingTop: "10px" }}>
          <Chip icon={<Description />} label={row.name} size="small" />
        </div>
      ))}
    </>
  );
};

const renderAddress = (item) => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Typography variant="body2">{item.line_1}</Typography>
      <Typography variant="body2">{item.line_2}</Typography>
      <Typography variant="body2">{item.city}, {item.state} {item.zip_code}</Typography>
    </div>
  );
};

const renderPriority = (item) => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Chip icon={item === "High" ? <ArrowUpward /> : <ArrowDownward />} label={item} size="small" />
    </div>
  );
};

const renderElse = (item) => {
  return (
    <div style={{ paddingTop: "10px" }}>
      <Typography variant="body2">{item} </Typography>
    </div>
  );
};

// const rows = [
//   {
//     id: 67,
//     priority: 'High',
//     group: 'BIGYAY',
//     productName: "Milk Concentrate Protein",
//     variants: [
//       [{
//         concentration: "75%",
//         flavour: "Vannille",
//         weight: "2500g",
//         squirrels: "90g",
//       },
//       {
//         concentration: "75%",
//         flavour: "Vannille",
//         weight: "2500g",
//         squirrels: "90g",
//       },
//       {
//         concentration: "75%",
//         flavour: "Vannille",
//         weight: "2500g",
//         squirrels: "90g",
//       }]
//     ],
//     address: "3761 Park Boulevard Way",
//     createdOn: "11-02-2023",
//     deadlineDelivery: "17-02-2023",
//     assignedTo: "#6363",
//     deliveryTo: "SAN FRANCISCO, CA",
//     receiver: "Amazing Brand Inc.",
//     sampleSize: "2 jars",
//     application: "Replace Ingredient",
//     additionalInfo: "Caller name test - different domain",
//     documents: "FILLER"
//   },
//   {
//     id: 68,
//     priority: 'High',
//     group: 'BIGYAY',
//     productName: "Milk Concentrate Protein; BCAA; Creatine",
//     variants: [
//       [{
//         concentration: "75%",
//         flavour: "Vannille",
//         weight: "2500g",
//         squirrels: "90g",
//       },
//       {
//         concentration: "75%",
//         flavour: "Chocolate",
//         weight: "500g",
//         squirrels: "90g",
//       }],
//       [{
//         concentration: "48%",
//         flavour: "Apple",
//         weight: "800g",
//         squirrels: "60g",
//       }],
//       [{
//         concentration: "95%",
//         flavour: "Apple",
//         weight: "1000g",
//         squirrels: "60g",
//       },
//       {
//         concentration: "82%",
//         flavour: "Chocolate",
//         weight: "400g",
//         squirrels: "80g",
//       },]
//     ],
//     address: "3761 Park Boulevard Way",
//     createdOn: "11-02-2023",
//     deadlineDelivery: "17-02-2023",
//     assignedTo: "#6363",
//     deliveryTo: "SAN FRANCISCO, CA",
//     receiver: "Amazing Brand Inc.",
//     sampleSize: "2 jars",
//     application: "Replace Ingredient",
//     additionalInfo: "Caller name test - different domain",
//     documents: "FILLER"
//   },
//   {
//     id: 72,
//     priority: 'High',
//     group: 'BIGYAY',
//     productName: "BCAA; Omega 3",
//     variants: [
//       [{
//         concentration: "75%",
//         flavour: "Vannille",
//         weight: "2500g",
//         squirrels: "90g",
//       }],
//       [{
//         concentration: "75%",
//         flavour: "Vannille",
//         weight: "2500g",
//         squirrels: "90g",
//       }]
//     ],
//     address: "3761 Park Boulevard Way",
//     createdOn: "11-02-2023",
//     deadlineDelivery: "17-02-2023",
//     assignedTo: "#6363",
//     deliveryTo: "SAN FRANCISCO, CA",
//     receiver: "Amazing Brand Inc.",
//     sampleSize: "2 jars",
//     application: "Replace Ingredient",
//     additionalInfo: "Caller name test - different domain",
//     documents: "FILLER"
//   },
//   {
//     id: 76,
//     priority: 'High',
//     group: 'BIGYAY',
//     productName: "Milk Concentrate Protein",
//     variants: [
//       [{
//         concentration: "75%",
//         flavour: "Vannille",
//         weight: "2500g",
//         squirrels: "90g",
//       }]
//     ],
//     address: "3761 Park Boulevard Way",
//     createdOn: "11-02-2023",
//     deadlineDelivery: "17-02-2023",
//     assignedTo: "#6363",
//     deliveryTo: "SAN FRANCISCO, CA",
//     receiver: "Amazing Brand Inc.",
//     sampleSize: "2 jars",
//     application: "Replace Ingredient",
//     additionalInfo: "Caller name test - different domain",
//     documents: "FILLER"
//   },
// ];

const rowsAlt = [
  {
    id: 67,
    priority: 'High',
    group: 'BIGYAY',
    productName: {
      id: 1,
      name: "Milk Concentrate Protein",
    },
    variants: [
      [{
        id: 1,
        values: {
          concentration: "75%",
          flavour: "Vannille",
          weight: "2500g",
          squirrels: "90g",
        },
      },
      {
        id: 2,
        values: {
          concentration: "75%",
          flavour: "Vannille",
          weight: "2500g",
          squirrels: "90g",
        },
      },
      {
        id: 3,
        values: {
          concentration: "75%",
          flavour: "Vannille",
          weight: "2500g",
          squirrels: "90g",
        },
      }]
    ],
    address: {
      line_1: "2103 N Campbell Ave",
      line_2: "",
      city: "Chicago",
      state: "IL",
      zip_code: "60647",
    },
    createdOn: "11-02-2023",
    deadlineDelivery: "17-02-2023",
    assignedTo: "#6363",
    deliveryTo: "SAN FRANCISCO, CA",
    receiver: "Amazing Brand Inc.",
    sampleSize: "2 jars",
    application: "Replace Ingredient",
    additionalInfo: "Caller name test - different domain",
    documents: [
      {
        id: 1,
        name: "Certificate of Analysis",
        file: null,
      },
      {
        id: 2,
        name: "Specification Sheet",
        file: null,
      },
    ],
  },
  {
    id: 68,
    priority: 'Low',
    group: 'BIGYAY',
    productName: {
      id: 1,
      name: "Milk Concentrate Protein",
    },
    variants: [
      [{
        id: 4,
        values: {
          concentration: "75%",
          flavour: "Vannille",
          weight: "2500g",
          squirrels: "90g",
        },
      },
      {
        id: 5,
        values: {
          concentration: "75%",
          flavour: "Chocolate",
          weight: "500g",
          squirrels: "90g",
        },
      }]
    ],
    address: {
      line_1: "2103 N Campbell Ave",
      line_2: "",
      city: "Chicago",
      state: "IL",
      zip_code: "60647",
    },
    createdOn: "11-02-2023",
    deadlineDelivery: "17-02-2023",
    assignedTo: "#6363",
    deliveryTo: "SAN FRANCISCO, CA",
    receiver: "Amazing Brand Inc.",
    sampleSize: "2 jars",
    application: "Replace Ingredient",
    additionalInfo: "Caller name test - different domain",
    documents: [
      {
        id: 1,
        name: "Certificate of Analysis",
        file: null,
      },
      {
        id: 2,
        name: "Specification Sheet",
        file: null,
      },
    ],
  },
  {
    id: 72,
    priority: 'High',
    group: 'BIGYAY',
    productName: {
      id: 2,
      name: "BCAA",
    },
    variants: [
      [{
        id: 6,
        values: {
          concentration: "75%",
          flavour: "Vannille",
          weight: "2500g",
          squirrels: "90g",
        },
      }]
    ],
    address: {
      line_1: "2103 N Campbell Ave",
      line_2: "",
      city: "Chicago",
      state: "IL",
      zip_code: "60647",
    },
    createdOn: "11-02-2023",
    deadlineDelivery: "17-02-2023",
    assignedTo: "#6363",
    deliveryTo: "SAN FRANCISCO, CA",
    receiver: "Amazing Brand Inc.",
    sampleSize: "2 jars",
    application: "Replace Ingredient",
    additionalInfo: "Caller name test - different domain",
    documents: [
      {
        id: 1,
        name: "Certificate of Analysis",
        file: null,
      },
      {
        id: 2,
        name: "Specification Sheet",
        file: null,
      },
    ],
  },
  {
    id: 76,
    priority: 'Low',
    group: 'BIGYAY',
    productName: {
      id: 1,
      name: "Milk Concentrate Protein",
    },
    variants: [
      [{
        id: 7,
        values: {
          concentration: "75%",
          flavour: "Vannille",
          weight: "2500g",
          squirrels: "90g",
        },
      }]
    ],
    address: {
      line_1: "2103 N Campbell Ave",
      line_2: "",
      city: "Chicago",
      state: "IL",
      zip_code: "60647",
    },
    createdOn: "11-02-2023",
    deadlineDelivery: "17-02-2023",
    assignedTo: "#6363",
    deliveryTo: "SAN FRANCISCO, CA",
    receiver: "Amazing Brand Inc.",
    sampleSize: "2 jars",
    application: "Replace Ingredient",
    additionalInfo: "Caller name test - different domain",
    documents: [
      {
        id: 1,
        name: "Certificate of Analysis",
        file: null,
      },
      {
        id: 2,
        name: "Specification Sheet",
        file: null,
      },
    ],
  },
];

const theme = createTheme({
  components: {
    MuiDataGrid: {
      styleOverrides: {
        columnHeaders: {
          '& .MuiDataGrid-columnHeaderTitle': {
            fontFamily: 'Gilroy, sans-serif !important',
            fontWeight: '700 !important',
          },
          '& .header-theme': {
            backgroundColor: '#F3F3F3 !important',
          },
        }
      }
    },
  },
  typography: {
    fontFamily: [
      'Gilroy'
    ]
  }
});

function App() {

  const [rows, setRows] = React.useState(rowsAlt);
  const [rowModesModel, setRowModesModel] = React.useState({});

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
    console.log(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 74,
      headerClassName: 'header-theme',
      renderCell: (params) => renderChip('#' + params.value)
    },
    {
      field: 'priority',
      headerName: 'Priority',
      width: 134,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderPriority(params.value)
    },
    {
      field: 'group',
      headerName: 'Group',
      width: 134,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderElse(params.value)
    },
    {
      field: 'productName',
      headerName: 'Product Name',
      width: 180,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderElse(params.value.name)
      // renderCell: (params) => renderProductNames(params.value || '')
    },
    {
      field: 'variants',
      headerName: 'Variants',
      width: 450,
      headerClassName: 'header-theme',
      renderCell: (params) => renderVariants(params.value || '')
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 180,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderAddress(params.value)
    },
    {
      field: 'createdOn',
      headerName: 'Created On',
      width: 134,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderChip(params.value)
    },
    {
      field: 'deadlineDelivery',
      headerName: 'Deadline Delivery',
      width: 194,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderChip(params.value)
    },
    {
      field: 'assignedTo',
      headerName: 'Assigned To',
      width: 194,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderChip(params.value)
    },
    {
      field: 'deliveryTo',
      headerName: 'Delivery To',
      width: 194,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderChip(params.value)
    },
    {
      field: 'receiver',
      headerName: 'Receiver',
      width: 134,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderElse(params.value)
    },
    {
      field: 'sampleSize',
      headerName: 'Sample Size',
      width: 134,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderChip(params.value)
    },
    {
      field: 'application',
      headerName: 'Application',
      width: 151,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderElse(params.value)
    },
    {
      field: 'additionalInfo',
      headerName: 'Additional Info',
      width: 208,
      headerClassName: 'header-theme',
      editable: true,
      renderCell: (params) => renderElse(params.value)
    },
    {
      field: 'documents',
      headerName: 'Documents',
      width: 194,
      headerClassName: 'header-theme',
      renderCell: (params) => renderDocuments(params.value)
    },
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      headerClassName: 'header-theme',
      width: 100,
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  return (
    <div className="App">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>

      <div style={{ height: 1000, width: '100%' }}>
        <ThemeProvider theme={theme}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            getRowHeight={() => 'auto'}
            className='masterTable'
            sx={{
              '& .MuiDataGrid-cell': {
                border: '0.5px solid #EAECF0',
              }
            }}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            slotProps={{
              toolbar: { setRows, setRowModesModel },
            }}
          />
        </ThemeProvider>
      </div>

    </div >
  );
}

export default App;
