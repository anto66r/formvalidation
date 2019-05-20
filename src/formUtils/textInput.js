import React from 'react';
import '../app.css';

export default ({ name, handleBlur, handleChange, label, value, error }) => (
  <label
    htmlFor = { name }
  >
    { label }: 
    <input
      type="text"
      name={ name }
      onBlur={ handleBlur }
      onChange={ handleChange }
      value={ value || '' }
      className={ error && 'error' }
    />
    { error && (<p className="errorMsg">{ error }</p>) }
  </label>
)