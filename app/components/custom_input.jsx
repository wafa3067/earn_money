import React from 'react';
import '@material/web/textfield/filled-text-field.js';
import '@material/web/textfield/outlined-text-field.js';

const CustomInputField = ({
  label,
  placeholder,
  onChange,
  value,
  type = 'text',
  autoFocus = false,
  readOnly = false,
}) => {
  const handleInputChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div style={{ width: '100%', marginBottom: '16px' }}>
      <mwc-textfield
        label={label}
        placeholder={placeholder}
        value={value}
        type={type}
        autofocus={autoFocus}
        readonly={readOnly}
        outlined
        onInput={handleInputChange}
      />
    </div>
  );
};

export default CustomInputField;
