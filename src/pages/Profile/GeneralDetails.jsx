import React from "react";

function GeneralDetails() {
  return (
    <>
      <div className="col-5 form-floating">
        <input
          type="text"
          id="username"
          className="form-control"
          placeholder="username"
        />
        <label htmlFor="username">UserName</label>
      </div>
      <div className="col-5 form-floating offset-1">
        <input
          type="email"
          id="email"
          className="form-control"
          placeholder="email"
        />
        <label htmlFor="email">Email</label>
      </div>
    </>
  );
}

export default GeneralDetails;
