import React from "react";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="mb-3">
      <div className="form-control">
        <label className="label cursor-pointer max-w-xs">
          <span className="label-text">{label}</span>
          <input
            type="checkbox"
            defaultChecked
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className="checkbox "
          />
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
