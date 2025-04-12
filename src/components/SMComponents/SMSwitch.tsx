import Switch from "@mui/material/Switch";

type CustomSwitchProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
};

export default function SMSwitch(props: CustomSwitchProps) {
  const { checked, onChange, disabled, label } = props;

  return (
    <div>
      {label && <label>{label}</label>}
      <Switch
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        inputProps={{ "aria-label": "Switch" }}
      />
    </div>
  );
}

// usage

// import React, { useState } from 'react';
// import SMSwitch from './components/SMSwitch';

// function App() {
//   const [isChecked, setIsChecked] = useState(false);

//   const handleSwitchChange = (newChecked: any) => {
//     setIsChecked(newChecked);
//     console.log(newChecked);
//   };
//   return (

// <SMSwitch
//    label="Toggle Switch"
//         checked={isChecked}
//         onChange={handleSwitchChange}
//         />

//   );
// }

// export default App;
