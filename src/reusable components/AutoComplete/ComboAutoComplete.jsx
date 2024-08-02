import React from "react";
import { Autocomplete, TextField } from "@mui/material";

const ComboAutocomplete = ({ options, placeholder, ...rest }) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      getOptionLabel={(option) => `${option.country} ${option.code}`}
      renderOption={(props, option) => (
        <li {...props}>
          {option.country} {option.code}
        </li>
      )}
      sx={{ width: "100%", marginTop: "0.75rem" }}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder={placeholder}
          sx={{
            "& .MuiInputBase-root": {
              height: "40px",
            },
            "& .MuiInputLabel-root": {
              top: "-7px",
            },
          }}
        />
      )}
      {...rest}
    />
  );
};

export default ComboAutocomplete;
