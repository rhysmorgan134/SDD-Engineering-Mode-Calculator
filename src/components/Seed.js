import * as React from 'react';
import {FormControl, InputLabel, TextField} from "@mui/material";
import {MenuItem} from "@mui/material";
import Select, {SelectChangeEvent} from '@mui/material/Select'
import Paper from '@mui/material/Paper';
import Grid  from "@mui/material/Grid";
import {useState} from "react";

const Seed = ({label, labelId, id, value, handleChange, seedValid, seedError}) => {

    return (
        <Grid item xs={3}>
            <Paper elevation={16}>
                <TextField
                    error={seedValid===true ? "" : "error"}
                    helperText={seedError}
                    id={labelId}
                    label={label}
                    value={value}
                    onChange={handleChange}
                    />
            </Paper>
        </Grid>
    )
}

export default Seed