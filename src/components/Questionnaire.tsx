import React, { FormEventHandler, useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';
import { Checkbox, FormControlLabel, FormGroup, FormLabel } from "@mui/material";
import { QuestionnaireProps } from "../model/interfaces";



export default function Questionnaire(props: QuestionnaireProps) {
    const { onChange } = props;
    const [state, setState] = useState({
        pray1: false,
        pray2: false,
        pray3: false,
    });
    const { pray1, pray2, pray3 } = state;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked,
        });
    };

    useEffect(() => {
        onChange(pray1 && pray2 && pray3);
    }, [pray1, pray2, pray3, onChange])

    return (
        <FormControl component="fieldset" variant="standard" sx={{ zIndex: 3 }}>
            <FormLabel component="legend">"ולעָבדו בכל לבבכם" - מה התפללת היום?</FormLabel>
            <FormGroup>
                <FormControlLabel
                    control={
                        <Checkbox checked={pray1} onChange={handleChange} name="pray1" />
                    }
                    label="שחרית"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={pray2} onChange={handleChange} name="pray2" />
                    }
                    label="מנחה"
                />
                <FormControlLabel
                    control={
                        <Checkbox checked={pray3} onChange={handleChange} name="pray3" />
                    }
                    label="ערבית"
                />
            </FormGroup>
        </FormControl>
    )
}