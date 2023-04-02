import React from "react";

const FormTextField = React.forwardRef((props, ref) => {

    const {errorMessage, label, placeholder, type} = props; 

  return (
    <div className="mb-3">
      <label className="block mb-2 uppercase font-medium text-black">
        {label}
      </label>
      <input
        ref={ref}
        type={type || "text"}
        placeholder={placeholder}
        className="
        border border-black
        text-gray-900 text-sm
        block w-full p-2.5
        "
      />
      {errorMessage && (
        <p className="mt-2 text-sm text-red-600">{errorMessage}.</p>
      )}
    </div>
  );
});

export default FormTextField;
