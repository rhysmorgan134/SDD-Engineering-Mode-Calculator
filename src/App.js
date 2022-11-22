import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainDisplay from "./components/MainDisplay";
import Seed from "./components/Seed";
import Container from '@mui/material/Container';
import {Box, Grid} from "@mui/material";
import Dropdown from "./components/Dropdown";
import {Typography} from "@mui/material";
import {useState} from "react";

const options = require("./resources/options.json")
const calculate = require("./resources/calculate").calculatePassword


const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    const [carType, setCarType] = useState("")
    const [option, setOption] = useState("")
    const [seed, setSeed] = useState("")
    const [vin, setVin] = useState("")
    const [seedValid, setSeedValid] = useState(false)
    const [seedError, setSeedError] = useState('')
    const [vinValid, setVinValid] = useState(false)
    const [vinError, setVinError] = useState('')
    const [password, setPassword] = useState('')

    const carTypeChange = (e) => {
        setCarType(e.target.value)
    }

    const optionChange = (e) => {
        setOption(e.target.value)
    }

    const seedChange = (e) => {
        setSeed(e.target.value)
        if(e.target.value.length === 10) {
            setSeedValid(true)
            setSeedError("")
        } else {
            setSeedValid(false)
            setSeedError("Seed Needs 10 Characters")
        }
    }

    const vinChange = (e) => {
        setVin(e.target.value)
        if(e.target.value.length === 17) {
            setVinValid(true)
            setVinError("")
        } else {
            setVinValid(false)
            setVinError("Vin Needs 17 Characters")
        }
    }

    const calc = () => {
        setPassword(calculate(carType, option, vin, seed))
    }

  return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
            <Container>
                <Grid container spacing={5} style={{"marginTop": "50px"}}>
                    <Dropdown labelId={"test"} label={"Car Type"} id={"Car-Type"} values={options.types} handleChange={carTypeChange} value={carType}/>
                    {carType !== "" ?
                        <Dropdown labelId={"option"} label={"Option Type"} id={"option-Type"} values={options.type[carType].options} handleChange={optionChange} value={option}/>
                        : <div></div>}
                    {carType !== "" ?
                        <Seed label={"Seed"} id={"seed"} labelId={"Seed"} handleChange={seedChange} value={seed} seedValid={seedValid} seedError={seedError}/>
                        : <div></div>}
                    {carType !== "" ?
                        <Seed label={"vin"} id={"vin"} labelId={"vin"} handleChange={vinChange} value={vin} seedValid={vinValid} seedError={vinError}/>
                        : <div></div>}
                    <Container Grid item xs={12} align={"center"}>
                        {carType !== "" && seedValid && vinValid ? <Button onClick={calc}>Calculate</Button> : <div></div>}
                        {password !== "" ? <Typography> PASSWORD: {password}</Typography> : <div></div>}
                    </Container>
                </Grid>


            </Container>
      </ThemeProvider>
  );
}

export default App;
