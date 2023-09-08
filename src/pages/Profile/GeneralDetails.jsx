import React, { useEffect } from "react";
import InputField from "./InputField";

function GeneralDetails({data,disable}) {
  return (
    <>
      <InputField
        classes={"col-5"}
        type={"text"}
        id={"userName"}
        placeholder={"userName"}
        label={"UserName"}
        value={data.userName}
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
        value={data.email}
        onChangeF={(e) => {
          console.log(e);
        }}
      />
    </>
  );
}

export default GeneralDetails;
