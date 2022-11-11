import { Box, Paper, useTheme, IconButton, InputBase, Divider } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Header from '../../../components/Header';
import { tokens } from '../../../theme';
import { mockDataTeam } from '../../../data/MockData';
import SearchIcon from '@mui/icons-material/Search';
import { SearchRounded } from '@mui/icons-material';

const Closed = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const columns = [
        { field: "id", headerName: 'Case', sortable: false, selectable: false },
        { field: "name", headerName: 'Nome', flex: 0.5, cellClassName: "name-column--cell" },
        { field: "email", headerName: 'Email', flex: 0.5 },
        { field: "age", headerName: 'Descrição do problema', flex: 2 },

    ]
    return (<Box
        m="20px">
        <Header title="Casos finalizados" />
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, backgroundColor: colors.primary[600]}}
        >
            <IconButton sx={{ p: '10px' }} aria-label="menu">
                <SearchRounded />
            </IconButton >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Procurar um ticket"
                inputProps={{ 'aria-label': 'Procurar um ticket' }}
            />
        </Paper>
        <Box
            m="20px 0 0 0"
            height="75vh"
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
    </Box>)
}

export default Closed;