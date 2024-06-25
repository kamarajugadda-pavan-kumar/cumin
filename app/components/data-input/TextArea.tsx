import React from "react";

interface TextAreaProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  value,
  onChange,
  placeholder,
  required,
}) => {
  return (
    <div className="mb-3 w-full">
      <label className="block text-sm font-medium text-gray-700">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>

        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          className="textarea border-solid border-1 border-gray-300 rounded-none w-full"
        ></textarea>
      </label>
    </div>
  );
};

export default TextArea;
