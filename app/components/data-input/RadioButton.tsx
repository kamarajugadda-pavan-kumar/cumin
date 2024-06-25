import React from "react";

interface RadioButtonProps {
  label: string;
  name: string;
  options: string[];
  selectedOption: string;
  onChange: (value: string) => void;
}

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <div className="mb-3">
      <label className="block text-sm  text-gray-700">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>

        {options.map((option, index) => (
          <label key={index} className="inline-flex items-center mr-4">
            <input
              type="radio"
              name={name}
              checked={selectedOption === option}
              onChange={(e) => onChange(e.target.value)}
              className="radio"
            />
            <span className="ml-2">{option}</span>
          </label>
        ))}
      </label>
    </div>
  );
};

export default RadioButton;
