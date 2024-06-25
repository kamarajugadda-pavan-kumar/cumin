import React from "react";

interface DropdownProps {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  required?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  value,
  options,
  onChange,
  required,
}) => {
  return (
    <div className="mb-3">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-2.5 select select-bordered rounded-none"
        >
          <option disabled selected>
            Pick one
          </option>
          {options.map((option, index) => (
            <option key={index}>{option}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Dropdown;
