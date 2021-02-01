import React from 'react'
import { Paper, TextField, InputAdornment } from '@material-ui/core'
import styled from 'styled-components';

export default function SiteLabelTextField(props) {
  const { placeholder, label, endAdornment, value, disabled , error } = props
 
  return (
    <SiteLabelTextFieldWrapper>
      <Paper elevation={0} classes={{root:"border-radius-12"}} >
        <TextField
          disabled={disabled}
          value={value}
          onChange={props.onChange}
          InputProps={{
            classes: {
              inputAdornedStart: "paddingLeft",
              notchedOutline:"noBorder",
              input: "input",
            },
            startAdornment: (
              <InputAdornment
                color="secondary"
                className="h-100"
                position="start"
              >
                <div className={`textColor font-weight-bolder`}>
                  {label}
                </div>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment className="h-100" position="start">
                {endAdornment ? (
                  endAdornment
                ) : null
                }
              </InputAdornment>
            ),
          }}
          variant="outlined"
          placeholder={placeholder}
        ></TextField>
      </Paper>
      {
        error ?
          <div className="text-danger p-2">
            {error}
          </div> : null
      }

    </SiteLabelTextFieldWrapper>

  )
}
const SiteLabelTextFieldWrapper = styled.div`
#site-label-textfield {
  min-height: 100vh;
  background: #ffffff;
  border-radius : 10px
}
.noBorder {
    border:none;
  }
.MuiInputBase-input {
  color: #616776;
}
.border-radius-12 {
  border-radius: 5px;
  background: #16181E;

}
.MuiFormControl-root {
width:100%
}
.MuiOutlinedInput-input {
    padding: 18px 14px;
}
.MuiOutlinedInput-adornedEnd {
    padding-right: 10px;
    padding-top: 2px;
    padding-bottom: 2px;
}
.PrivateNotchedOutline-root-6{
  display:none;
}
.input {
    height: 0;
    border-radius:12px;
    color: #3F4451;
  }
.textColor{
    color:#616776;
}
`