import { Grid, TextField, Typography } from "@mui/material";
import { useCallback, useMemo } from "react";
import { Matrix } from "./Matrix";

interface IEquationGridProps {
    coefficients: Matrix;
    onCoefficientsChange?: (index: [number, number], value: number) => void;
    constants: number[];
    onConstantsChange?: (index: number, value: number) => void;
    unknownNames: string[];
}

const EquationGrid = (props: IEquationGridProps) => {
    const coefficientsChangeFunc = props.onCoefficientsChange;
    const notifyCoefficientsChange = useCallback((event) => {
        if (!coefficientsChangeFunc) {
            return;
        }
        const rowColSplit = event.target.name.split('.');
        const rowCol = [+rowColSplit[0], +rowColSplit[1]] as [number, number];
        coefficientsChangeFunc(rowCol, +event.target.value);
    }, [coefficientsChangeFunc]);

    const constantsChangeFunc = props.onConstantsChange;
    const notifyConstantsChange = useCallback((event) => {
        if (!constantsChangeFunc) {
            return;
        }
        constantsChangeFunc(+event.target.name, +event.target.value);
    }, [constantsChangeFunc]);

    return (
        <>
            {props.coefficients.map((row, rowIndex) => {
                return (
                    <Grid key={rowIndex} container spacing={2} sx={{ marginTop: 1 }}>
                        {row.map((value, colIndex) => {
                            return (
                                <Grid key={`${rowIndex}.${colIndex}`} item>
                                    <TextField sx={{ width: 100 }} key={`text.${rowIndex}.${colIndex}`} id="outlined-basic" name={`${rowIndex}.${colIndex}`} label={`${rowIndex}.${colIndex}`} value={value} variant="outlined" type="number" onChange={notifyCoefficientsChange} />
                                </Grid>
                            )
                        })}
                        <Grid display="flex" key={`unknown-${props.unknownNames[rowIndex]}`} item alignItems="center">
                            <Typography>{props.unknownNames[rowIndex]}</Typography>
                        </Grid>
                        <Grid display="flex" key={`eq-${props.unknownNames[rowIndex]}`} item alignItems="center">
                            <Typography>=</Typography>
                        </Grid>
                        <Grid key={`constant-${rowIndex}`} item>
                            <TextField sx={{ width: 100 }} key={`constant.text.${rowIndex}`} id="outlined-basic" name={`${rowIndex}`} label={`${rowIndex}`} value={props.constants[rowIndex]} variant="outlined" type="number" onChange={notifyConstantsChange} />
                        </Grid>
                    </Grid>
                )
            })}
        </>
    )
}

export default EquationGrid;