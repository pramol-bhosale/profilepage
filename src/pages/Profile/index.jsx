import React, { useState } from "react";
import "./style.css";
import ProfileImg from "../../media/images/profile.jpg";
import Select from "react-select";
import EnglishLangIcon from "../../media/images/englishlangicon.jpg";
import SpanishLangIcon from "../../media/images/spanishlangicon.png";
import GeneralDetails from "./GeneralDetails";
import PersonalDetails from "./PersonalDetails";
import AddressDetails from "./AddressDetails";
import SocialDetails from "./SocialDetails";
function Profile() {
  const languages = [
    { label: "English(US)", value: "en", img: EnglishLangIcon },
    { label: "Español", value: "sp", img: SpanishLangIcon },
  ];
  const [editEnabled, setEditEnabled] = useState(false);
  return (
    <div className="row g-0 profile-container align-items-center justify-content-center vh-100">
      <div className="col-10 row g-0 border rounded-3">
        <div className="col-4 py-3">
          <div className="text-center">
            <img
              src={ProfileImg}
              alt="User profile"
              className="img-fluid profile-image"
            />
            <h6 className="mt-2">CodeDiggy</h6>
          </div>
          <div className="row g-0 justify-content-end my-4 px-3">
            <button className="col-2 profile-img-action-btn me-1">
              Change
            </button>
            <button className="col-2 profile-img-action-btn">Delete</button>
          </div>
          {/* <div className="row g-0 justify-content-around mt-3">
           <button className="profile-img-action-btn col-4">Change</button>
           <button className="profile-img-action-btn col-4">Delete</button>
        </div> */}
          <div className="row g-0 border-top p-3">
            <h5 className="mb-2">Account Setting</h5>
            <div className="col-5 mt-3">
              <h6 className="mb-3">Language</h6>
              <Select
                options={languages}
                defaultValue={languages[1]}
                formatOptionLabel={(option) => {
                  return (
                    <div>
                      <img src={option.img} alt="" className="lang-icon me-2" />
                      <span>{option.label}</span>
                    </div>
                  );
                }}
              />
            </div>
            {/* <div className="col-5">
            </div> */}
          </div>
        </div>
        <div className="col-8 border-start">
          <div className="row g-0 profile-tabs">
            <div className="col-3 active-tab">General</div>
            <div className="col-3">Personal Details</div>
            <div className="col-3">Address</div>
            <div className="col-3">Social</div>
          </div>
          <div className="row g-0 mt-3 p-3">
            {/* <GeneralDetails/> */}
            {/* <PersonalDetails /> */}
            {/* <AddressDetails/> */}
            <SocialDetails />
            <div className="col-12 row g-0 mt-5 justify-content-end">
              {editEnabled ? (
                <>
                  <button className="update-btn col-3 rounded-2 p-2">
                    UPDATE
                  </button>
                  <button
                    className="cancel-btn col-3 offset-1 p-2 rounded-2"
                    onClick={() => {
                      setEditEnabled(false);
                    }}
                  >
                    CANCEL
                  </button>
                </>
              ) : (
                <button
                  className="edit-btn rounded-2 col-3 p-2"
                  onClick={() => setEditEnabled(true)}
                >
                  EDIT
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
