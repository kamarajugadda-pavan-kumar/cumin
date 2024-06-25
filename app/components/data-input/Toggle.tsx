import React from "react";

interface ToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ label, checked, onChange }) => {
  return (
    // <div className="mb-4 flex items-center">
    //   <span className="mr-2">{label}</span>
    //   <label className="relative inline-flex items-center cursor-pointer">
    //     <input
    //       type="checkbox"
    //       checked={checked}
    //       onChange={(e) => onChange(e.target.checked)}
    //       className="sr-only"
    //     />
    //     <div className="w-10 h-6 bg-gray-200 rounded-full peer-checked:bg-indigo-600"></div>
    //     <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
    //   </label>
    // </div>
    <div className="form-control w-52 mb-3">
      <label className="cursor-pointer label">
        <span className="label-text">Remember me</span>
        <input
          type="checkbox"
          className="toggle toggle-primary"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
      </label>
    </div>
  );
};

export default Toggle;
