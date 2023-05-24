import React, { useState } from 'react';
import Switch from 'react-switch';

const SwitchButton = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (checked) => {
    setChecked(checked);
  };

  return (
    <div>
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
}

export default SwitchButton;
