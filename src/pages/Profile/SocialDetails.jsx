import React from "react";

function SocialDetails({data}) {
  return (
    <>
      <div className="col-10">
        <h6>Facebook</h6>
        <div className="form-floating mt-3">
        <input
          type="text"
          id="facebookid"
          className="form-control"
          placeholder="facebookid"
          value={data.facebookId}
        />
        <label htmlFor="facebookid">Facebook Profile</label>
        </div>
      </div>
      <div className="col-10 mt-3">
        <h6>Linkedin</h6>
        <div className="form-floating mt-3">
        <input
          type="text"
          id="linkedinprofile"
          className="form-control"
          placeholder="linkedinprofile"
          value={data.linkedinprofileurl}
        />
        <label htmlFor="linkedinprofile">Linkedin Profile URL</label>
        </div>
      </div>
    </>
  );
}

export default SocialDetails;
