import { Alert, Box, Button, FormControlLabel, MenuItem, Select, Snackbar, Switch, TextField, useTheme } from '@mui/material';
import React, { useState } from 'react';
import Header from '../../../components/Header';
import { tokens } from '../../../theme';

const Create = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const [openSnack, setOpenSnack] = useState(true)
    return (
        <Box m="20px">
            <Header title="Criar Ticket" />
            <Snackbar open={openSnack}
                autoHideDuration={6000}
                anchorOrigin={{vertical: 'top', horizontal:'center'}}
            ><Alert
                severety="success"
                sx={{ width: '100%' }}> Pedido Enviado</Alert></Snackbar>

            <form>
                <Box display="grid" gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                        "& > div": {
                            gridColumn: undefined
                        }
                    }}>
                    <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Case ID"
                        name="case_id"
                        sx={{ gridColumn: "span 3" }}
                        color="secondary" />
                    <Select
                        label="Time"
                        name="Team"
                        variant="filled"
                        color="secondary"
                        sx={{ gridColumn: "span 1" }}>
                        <MenuItem value="SME">SME</MenuItem>
                        <MenuItem value="QA">QA</MenuItem>
                        <MenuItem value="TL">TL</MenuItem>
                    </Select>
                    <TextField
                        fullWidth
                        type="text"
                        variant="filled"
                        label="Tags"
                        name="tags"
                        sx={{ gridColumn: "span 4" }}
                        color="secondary"
                    />
                    <FormControlLabel control={
                        <Switch
                            label="On call"
                            name="on_call"
                            color="secondary"
                        />
                    } label="On call"
                        name="on_call"
                        fullWidth
                        sx={{ gridColumn: "span 4" }} />
                    <TextField
                        fullWidth
                        variant="filled"
                        multiline
                        maxRows={5}
                        rows={5}
                        name="description"
                        label="Descrição do problema"
                        sx={{ gridColumn: "span 4" }}
                        color="secondary"
                    />
                    <Button
                        color="secondary"
                        variant="contained"
                        size="large"
                    >
                        Enviar
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

export default Create;