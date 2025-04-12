import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

type SMSelectProps = {
  label?: string;
  value: any;
  options: any[];
  onChange?: (value: any) => void;
  disabled?: boolean;
  className?: string;
};

export default function SMSelect(props: SMSelectProps) {
  const { label, value, options, onChange, disabled, className } = props;

  return (
    <FormControl fullWidth variant="outlined" className={className}>
      <InputLabel>{label}</InputLabel>
      <Select
        label={label}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        labelId={`label-${label}`}
        id={`select-${label}`}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

// usage

// import React, { useState } from 'react';
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import store from './config/redux/store';
// import AppRouter from './config/routers/router';
// import SMSelect from './components/SMSelect';

// function App() {

//   const options = ["Option 1", "Option 2", "Option 3"];
//   const [selectedValue, setSelectedValue] = useState(options[0]);

//   const handleChange = (newValue: any) => {
//     setSelectedValue(newValue);
//     console.log(newValue)
//   };
//   return (
//     <Provider store={store}>
// <AppRouter/>

// <SMSelect
//         label="Select an option"
//         value={selectedValue}
//         options={options}
//         onChange={handleChange}
//         className="custom-select"
//       />
//     </Provider>
//   );
// }

// export default App;
