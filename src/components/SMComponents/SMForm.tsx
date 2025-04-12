import SMInput from "./SMInput";
import SMSelect from "./SMSelect";
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import SMButton from "./SMButton";

type SMFormProps = {
  valueName: string;
  valueEmail: string;
  valueBG: string;
  valueAddress: string;
  onChangeName: ((...args: any[]) => any) | undefined;
  onChangeEmail: ((...args: any[]) => any) | undefined;
  onChangeBG: ((...args: any[]) => any) | undefined;
  onChangeAddress: ((...args: any[]) => any) | undefined;
};
export default function SMForm(props: SMFormProps) {
  const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];
  const [bloodGroup, setBloodGroup] = useState<string>(bloodGroups[0]);

  const handleChange = (newValue: any) => {
    setBloodGroup(newValue);
    console.log(newValue);
  };
  const {
    valueName,
    valueEmail,
    valueBG,
    valueAddress,
    onChangeName,
    onChangeEmail,
    onChangeBG,
    onChangeAddress,
  } = props;

  const DonorReg = () => {};

  return (
    <>
      <Box className="p-2 m-2">
        <Typography className="">Register As Donor</Typography>
        <SMInput
          className="py-2 my-2"
          label="Name"
          value={valueName}
          onChange={onChangeName}
        />
        <SMInput
          className="py-2 my-2"
          label="Email"
          value={valueEmail}
          onChange={onChangeEmail}
        />
        <SMInput
          className="py-2 my-2"
          label="Address"
          value={valueAddress}
          onChange={onChangeAddress}
        />
        <SMSelect
          className="py-2 my-2"
          label="Blood Group"
          value={valueBG}
          options={bloodGroups}
          onChange={onChangeBG}
        />
        <SMButton
          type="button"
          onClick={DonorReg}
          label="Sign Up"
          className="py-2"
        />
      </Box>
    </>
  );
}
