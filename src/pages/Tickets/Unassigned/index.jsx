import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from '../../../theme';
import { mockDataTeam } from '../../../data/MockData';
import Header from '../../../components/Header'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const Unassigned = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const access = 'SME'

    const unassignedColumns = [
        { field: "id", headerName: 'Case', flex: 0.5, sortable: false, selectable: false },
        { field: "email", headerName: 'Email', flex: 0.5 },
        { field: "age", headerName: 'Descrição do problema', flex: 3 },
       
        { field: 'waitTime', headerName: 'Espera', flex: 0.5, renderCell: () => { return ('20 minutos atrás') } },
        {
            field: "action", headerName: '', flex: 1 , renderCell: () => {
                if (access !== 'Agent') {
                    return (
                        <Button variant="contained" color="secondary">Ajudar</Button>
                    )
                } else {
                    return (
                        <>
                            <IconButton variant="contained" color="secondary" sx={{ mr: 1 }}><AddIcCallIcon /></IconButton>
                            <IconButton variant="contained" color="error"><DeleteIcon/></IconButton>
                        </>
                    )
                }
            }
        },

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
                    getRowHeight={() => 'auto'}
                    sortingMode='server'
                    disableColumnMenu
                    disableSelectionOnClick
                    disableColumnSelector
                    disableColumnFilter
                    rows={mockDataTeam}
                    columns={unassignedColumns}
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
                    columns={unassignedColumns}
                />
            </Box>
        </Box>
    )
}

export default Unassigned;