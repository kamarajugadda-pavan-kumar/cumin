import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";

const RichTextEditor = ({ label }: { label: string }) => {
  const [value, setValue] = useState("");
  return (
    <label className="form-control w-full mb-3">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        className="custom-editor"
      />
    </label>
  );
};

export default RichTextEditor;
