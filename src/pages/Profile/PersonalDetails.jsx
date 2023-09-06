import React from "react";

function PersonalDetails() {
  return (
    <>
      <div className="col-3 form-floating">
        <input
          type="text"
          id="firstName"
          className="form-control"
          placeholder="firstName"
        />
        <label htmlFor="firstName">FirstName</label>
      </div>
      <div className="col-3 form-floating offset-1">
        <input
          type="text"
          id="middleName"
          className="form-control"
          placeholder="middleName"
        />
        <label htmlFor="middleName">MiddleName</label>
      </div>
      <div className="col-3 form-floating offset-1">
        <input
          type="text"
          id="lastName"
          className="form-control"
          placeholder="lastName"
        />
        <label htmlFor="lastName">LastName</label>
      </div>
      <div className="col-12 row gx-0 mt-3">
      <div className="col-3 form-floating">
        <input
          type="tel"
          id="phoneNumber"
          className="form-control"
          placeholder="phoneNumber"
        />
        <label htmlFor="phoneNumber">Phone Number</label>
      </div>
      </div>
    </>
  );
}

export default PersonalDetails;
