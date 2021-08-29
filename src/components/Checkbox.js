import React from 'react';

function Checkbox({ label, checked, disabled, onChange }) {
  return (
    <label>
      {label}
      <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
    </label>
  )
}

export default React.memo(Checkbox);
