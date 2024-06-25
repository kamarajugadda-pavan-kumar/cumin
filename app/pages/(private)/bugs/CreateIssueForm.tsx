import React, { useState } from "react";
import TextInput from "@/app/components/data-input/TextInput";
import Checkbox from "@/app/components/data-input/CheckBox";
import Dropdown from "@/app/components/data-input/DropDown";
import FileInput from "@/app/components/data-input/FileInput";
import RadioButton from "@/app/components/data-input/RadioButton";
import TextArea from "@/app/components/data-input/TextArea";
import Toggle from "@/app/components/data-input/Toggle";
import RichTextEditor from "@/app/components/data-input/RichTextEditor";
import Date from "@/app/components/data-input/Date";

const CreateIssueForm = () => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [radio, setRadio] = useState("");
  const [textArea, setTextArea] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <form className="p-8">
      <Dropdown
        label="Project *"
        value={dropdownValue}
        options={["notifiction system", "DB replication system"]}
        onChange={setDropdownValue}
        required
      />
      <Dropdown
        label="Issue Type *"
        value={dropdownValue}
        options={["Option 1", "Option 2"]}
        onChange={setDropdownValue}
        required
      />
      <div className="divider"></div>
      <Dropdown
        label="Status"
        value={dropdownValue}
        options={["To do", "In progress"]}
        onChange={setDropdownValue}
        required
      />

      <TextArea
        label="Summary"
        value={textArea}
        onChange={setTextArea}
        placeholder="Enter text"
        required
      />
      <RichTextEditor label="Description" />

      <Dropdown
        label="Assignee *"
        value={dropdownValue}
        options={["pavan kuamr", "krishnakanth verma"]}
        onChange={setDropdownValue}
        required
      />
      <Dropdown
        label="Labels"
        value={dropdownValue}
        options={["New", "In progress", "Fixed", "Closed"]}
        onChange={setDropdownValue}
        required
      />
      <Dropdown
        label="Parent"
        value={dropdownValue}
        options={["pavan kuamr", "krishnakanth verma"]}
        onChange={setDropdownValue}
        required
      />
      <Date label="Start Date" value="" onChange={() => {}} />
      <Date label="Due Date" value="" onChange={() => {}} />
      <Dropdown
        label="Reporter *"
        value={dropdownValue}
        options={["pavan kuamr", "krishnakanth verma"]}
        onChange={setDropdownValue}
        required
      />
      <FileInput label="File Input" onChange={setFile} />
      <Dropdown
        label="Linked issues"
        value={dropdownValue}
        options={["blocks", "blocked by"]}
        onChange={setDropdownValue}
        required
      />
      <Dropdown
        label=""
        value={dropdownValue}
        options={["pavan kuamr", "krishnakanth verma"]}
        onChange={setDropdownValue}
        required
      />
      <div className="flex float-end">
        <button className="btn btn-accent btn-sm px-7 mr-3 ">cancel</button>
        <button className="btn btn-primary btn-sm px-7">Submit</button>
      </div>
    </form>
  );
};

export default CreateIssueForm;
