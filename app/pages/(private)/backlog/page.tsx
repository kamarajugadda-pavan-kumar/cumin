"use client";
import DateInput from "@/app/components/data-input/Date";
import Dropdown from "@/app/components/data-input/DropDown";
import TextArea from "@/app/components/data-input/TextArea";
import TextInput from "@/app/components/data-input/TextInput";
import Modal from "@/app/components/modal/Modal";
import React, { useState } from "react";

export type Bug = {
  id: number;
  userStoryName: string;
  reporter: string;
  createdTime: string;
  status: string;
  tags: string[];
  dueDate: string;
  assignee: string;
  severity: string;
};

const Backlog: React.FC = () => {
  const initialBugsData: Bug[] = [
    {
      id: 1,
      userStoryName: "User story 1",
      reporter: "John Doe",
      createdTime: "2024-06-01",
      status: "Open",
      tags: ["UI", "UX"],
      dueDate: "2024-06-15",
      assignee: "Jane Smith",
      severity: "High",
    },
    {
      id: 2,
      userStoryName: "User story 2",
      reporter: "Jane Smith",
      createdTime: "2024-06-02",
      status: "In Progress",
      tags: ["Backend"],
      dueDate: "2024-06-16",
      assignee: "John Doe",
      severity: "Medium",
    },
    {
      id: 3,
      userStoryName: "user story 3",
      reporter: "Mike Johnson",
      createdTime: "2024-06-03",
      status: "Closed",
      tags: ["API"],
      dueDate: "2024-06-17",
      assignee: "Emily Davis",
      severity: "Low",
    },
  ];

  const initialState: Bug = {
    id: 0,
    userStoryName: "",
    reporter: "",
    createdTime: "",
    status: "",
    tags: [],
    dueDate: "",
    assignee: "",
    severity: "",
  };

  const [bugs, setBugs] = useState<Bug[]>(initialBugsData);
  const [bug, setBug] = useState(initialState);
  const [draggedBug, setDraggedBug] = useState<Bug | null>(null);
  const [droppedBugs, setDroppedBugs] = useState<Bug[]>([]);

  const handleDragStart = (bug: Bug) => {
    setDraggedBug(bug);
  };

  const handleDrop = () => {
    if (draggedBug) {
      setDroppedBugs((prev) => [...prev, draggedBug]);
      setBugs((prev) => prev.filter((b) => b.id !== draggedBug.id));
      setDraggedBug(null);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="text-sm breadcrumbs pb-2">
        <ul>
          <li>
            <a>Project 1</a>
          </li>
          <li>
            <a>Backlog</a>
          </li>
        </ul>
      </div>
      {/* table */}
      <div className="overflow-x-auto pb-10">
        <table className="table table-sm">
          <tbody className="border border-base-300">
            {bugs.map((bug: Bug, index) => (
              <tr
                key={index}
                draggable
                onDragStart={() => handleDragStart(bug)}
                className="bg-white"
              >
                <td className="align-middle">
                  <input type="checkbox" />
                </td>
                <td>
                  <span
                    className="link link-hover"
                    onClick={() => {
                      // @ts-ignore
                      document.getElementById("my_modal_4")!.showModal();
                      setBug(bug);
                    }}
                  >
                    {bug.userStoryName}
                  </span>
                </td>
                <td>{bug.reporter}</td>
                <td>{bug.createdTime}</td>
                <td>{bug.status}</td>
                <td className="flex gap-1 max-w-40 flex-wrap">
                  {bug.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="badge badge-ghost badge-sm">
                      {tag}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Drop Zone */}
      <div className="flex justify-end">
        <button
          className="btn btn-sm btn-primary"
          disabled={droppedBugs.length === 0}
          onClick={() => {
            // @ts-ignore
            document.getElementById("modal_start_sprint")!.showModal();
            setBug(bug);
          }}
        >
          start sprint
        </button>
      </div>
      <div
        className="border-dashed border-2 border-gray-400 bg-neutral-800/5 p-4 mt-4 "
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {droppedBugs.length > 0 ? (
          <div className="overflow-x-auto pt-4">
            <table className="table table-sm">
              <tbody className="border border-base-300">
                {droppedBugs.map((bug: Bug, index) => (
                  <tr key={index} className="bg-white">
                    <td className="align-middle">
                      <input type="checkbox" />
                    </td>
                    <td>
                      <span
                        className="link link-hover"
                        onClick={() => {
                          // @ts-ignore
                          document.getElementById("my_modal_4")!.showModal();
                          setBug(bug);
                        }}
                      >
                        {bug.userStoryName}
                      </span>
                    </td>
                    <td>{bug.reporter}</td>
                    <td>{bug.createdTime}</td>
                    <td>{bug.status}</td>
                    <td className="flex gap-1 max-w-40 flex-wrap">
                      {bug.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="badge badge-ghost badge-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <img src="/sprint.png"></img>
            <p className="text-xl font-bold text-slate-400	">
              Drop Issues here and start a new sprint
            </p>
          </div>
        )}
      </div>

      {/* modal */}
      <Modal
        modalId="modal_start_sprint"
        modalHeading="Start Sprint"
        modalSize="small"
      >
        {
          <>
            <TextInput
              label="Sprint Name *"
              value="Sprint 1"
              onChange={() => {}}
            />
            <Dropdown
              label="Duration *"
              value="Sprint 1"
              options={["1 week", "2 weeks", "3 weeks", "4 weeks"]}
              onChange={() => {}}
            />
            <DateInput label="Start Date *" value="" onChange={() => {}} />
            <DateInput label="End Date" value="" onChange={() => {}} />
            <div className="pr-3">
              <TextArea
                label="Sprint Description"
                value="s"
                onChange={() => {}}
              />
            </div>
            <button className="btn btn-primary">Submit</button>
            <button className="btn btn-ghost">Cancel</button>
          </>
        }
      </Modal>
    </>
  );
};

export default Backlog;
