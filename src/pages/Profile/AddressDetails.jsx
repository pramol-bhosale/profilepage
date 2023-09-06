import React from "react";

function AddressDetails() {
  return (
    <>
      <div className="col-4 form-floating">
        <input
          type="text"
          id="addressLine1"
          className="form-control"
          placeholder="addressline1"
        />
        <label htmlFor="addressLine1">Address Line 1</label>
      </div>
      <div className="col-4 form-floating offset-1">
        <input
          type="text"
          id="addressLine2"
          className="form-control"
          placeholder="addressLine2"
        />
        <label htmlFor="addressLine2">Address Line 2</label>
      </div>
      <div className="col-12 row gx-0 mt-3">
        <div className="col-4 form-floating">
          <input
            type="text"
            id="city"
            className="form-control"
            placeholder="city"
          />
          <label htmlFor="city">City</label>
        </div>
        <div className="col-4 form-floating offset-1">
          <input
            type="text"
            id="state"
            className="form-control"
            placeholder="state"
          />
          <label htmlFor="state">State</label>
        </div>
      </div>
    </>
  );
}

export default AddressDetails;
