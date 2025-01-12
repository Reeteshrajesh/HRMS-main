import React from "react";
import InputField from "../../components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4
        style={{
          marginBottom: "0.5rem",
          fontSize: "1.125rem",
          lineHeight: "1.75rem",
          fontWeight: "500",
        }}
      >
        Location
      </h4>
      <div>
        <InputField
          handleChange={handleChange}
          value=""
          title="All"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="New delhi"
          title="New delhi"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="Gurugram"
          title="Gurugram"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="noida"
          title="noida"
          name="location"
        />
        <InputField
          handleChange={handleChange}
          value="Banaras"
          title="banaras"
          name="location"
        />
      </div>
    </div>
  );
};

export default Location;
