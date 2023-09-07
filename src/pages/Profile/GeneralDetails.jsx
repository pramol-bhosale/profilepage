import React, { useEffect } from "react";
import InputField from "./InputField";

function GeneralDetails() {
  return (
    <>
      <InputField
        classes={"col-5"}
        type={"text"}
        id={"userName"}
        placeholder={"userName"}
        label={"UserName"}
        onChangeF={(e) => {
          console.log(e);
        }}
      />
      <InputField
        classes={"col-5 offset-1"}
        type={"email"}
        id={"email"}
        placeholder={"email"}
        label={"Email"}
        onChangeF={(e) => {
          console.log(e);
        }}
      />
    </>
  );
}

export default GeneralDetails;
