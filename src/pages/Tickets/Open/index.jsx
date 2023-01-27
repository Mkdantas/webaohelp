import { Box, Button, Modal, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import Header from '../../../components/Header';
import { tokens } from '../../../theme';
import { mockDataTeam } from '../../../data/MockData';
import { useState } from 'react';

const Open = () => {
    const [modalOpen, setModalOpen] = useState(false)


    const theme = useTheme();
    const colors = tokens(theme.palette.mode)
    const access = 'SME'
    const columns = [
        { field: "id", headerName: 'Case', sortable: false, selectable: false },
        { field: "name", headerName: 'Nome', flex: 0.5, cellClassName: "name-column--cell" },
        { field: "email", headerName: 'Email', flex: 0.5 },
        { field: "age", headerName: 'Descrição do problema', flex: 2 },
        {
            field: "action", headerName: '', flex: 1, renderCell: () => {
                if (access !== 'Agent') {
                    return (
                        <>
                        <Button variant="contained" color="primary" onClick={() => setModalOpen(true)}>Ações</Button>
                        <Modal
                        open={modalOpen}
                        onClose={''}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={''}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Caso
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                    </>
                    )
                }
            },
        },

    ]
    return (<Box
        m="20px">
       
        <Header title="Casos abertos" />
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
    </Box>)
}

export default Open;