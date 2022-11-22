import * as React from 'react';
import {FormControl, InputLabel} from "@mui/material";
import {MenuItem} from "@mui/material";
import Select, {SelectChangeEvent} from '@mui/material/Select'
import Paper from '@mui/material/Paper';
import Grid  from "@mui/material/Grid";
import {useState} from "react";

const Dropdown = ({label, labelId, id, values, value, handleChange}) => {

    return (
        <Grid item xs={3}>
            <Paper elevation={16}>
                <FormControl fullWidth>
                    <InputLabel id={labelId}>{label}</InputLabel>
                    <Select
                        labelId={labelId}
                        id={id}
                        value={value}
                        label={label}
                        onChange={handleChange}
                    >
                        {Object.entries(values).map(([key, value]) => {
                            return (
                                <MenuItem value={value}>{key}</MenuItem>
                            )
                        })  }
                    </Select>
                </FormControl>
            </Paper>
        </Grid>
    )
}

export default Dropdown