import React from 'react';
import { Box, Button, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../../theme';
import { mockDataTeam } from '../../../data/MockData';
import Header from '../../../components/Header'

const Unassigned = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const access = 'Agent'

    const columns = [
        { field: "id", headerName: 'Case', sortable: false, selectable: false },
        { field: "name", headerName: 'Nome', flex: 0.5, cellClassName: "name-column--cell" },
        { field: "email", headerName: 'Email', flex: 0.5 },
        { field: "age", headerName: 'Descrição do problema', flex: 1},
        { field: "action", headerName: '', flex: 0.5, renderCell: () => {
           if(access !== 'Agent'){
            return (
                <Button variant="contained" color="secondary">Take</Button>
            )
           } else {
            return(
                <>
                <Button variant="contained" color="secondary" sx={{mr: 1}}>On call</Button>
                <Button variant="contained" color="error">Delete</Button>
                </>
            )
           }
        }}

    ]
    return (
        <Box
            m="20px">
            <Header title="Fila SME" />
            <Box
                m="20px 0 0 0"
                height="40vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiTablePagination-selectLabel, .MuiSelect-select, .MuiTablePagination-actions, .MuiTablePagination-select, .MuiTablePagination-selectLabel,.MuiTablePagination-selectIcon": {
                        display: 'none !important'
                    }, 
                    "& .MuiTablePagination-displayedRows": {
                        marginRight: '20px'
                    }
                }}>
                <DataGrid
                    sortingMode='server'
                    disableColumnMenu
                    disableSelectionOnClick
                    disableColumnSelector
                    disableColumnFilter
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
            <Typography variant="h3"
             sx={{ m: "10px 0 -2% 0" }}>
                Casos abertos
            </Typography>
            <Box
                m="40px 0 0 0"
                height="40vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                        color: `${colors.greenAccent[200]} !important`,
                    },
                    "& .MuiTablePagination-selectLabel, .MuiSelect-select, .MuiTablePagination-actions, .MuiTablePagination-select, .MuiTablePagination-selectLabel,.MuiTablePagination-selectIcon": {
                        display: 'none !important'
                    }, 
                    "& .MuiTablePagination-displayedRows": {
                        marginRight: '20px'
                    }
                }}>
                <DataGrid
                    sortingMode='server'
                    disableColumnMenu
                    disableSelectionOnClick
                    disableColumnSelector
                    disableColumnFilter
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    )
}

export default Unassigned;