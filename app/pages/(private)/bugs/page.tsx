"use client";
// import Link from "next/link";
import React, { useState } from "react";
import CreateIssueForm from "./CreateIssueForm";
import Modal from "@/app/components/modal/Modal";

export type Bug = {
  id: number;
  bugName: string;
  reporter: string;
  createdTime: string;
  status: string;
  tags: string[];
  dueDate: string;
  assignee: string;
  severity: string;
};

const Bugs = () => {
  const bugsData: Bug[] = [
    {
      id: 1,
      bugName: "Bug A",
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
      bugName: "Bug B",
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
      bugName: "Bug C",
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
    bugName: "",
    reporter: "",
    createdTime: "",
    status: "",
    tags: [],
    dueDate: "",
    assignee: "",
    severity: "",
  };
  const [bug, setBug] = useState(initialState);

  return (
    <>
      {/* table */}
      <div className="overflow-x-auto pb-10">
        <table className="table table-sm">
          <thead className="sticky top-0">
            <tr>
              <th className="sticky left-0 bg-gray-100">ID</th>
              <th className="sticky left-9 bg-gray-100">Bug Name</th>
              <th>Reporter</th>
              <th>Created Time</th>
              <th>Status</th>
              <th>Tags</th>
              <th>Due Date</th>
              <th>Assignee</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            {bugsData.map((bug: Bug, index) => (
              <tr key={index}>
                <th className="sticky left-0 bg-white">{bug.id}</th>
                <td className="sticky left-9 bg-white">
                  <span
                    className="link link-hover"
                    onClick={() => {
                      // @ts-ignore
                      document.getElementById("my_modal_4")!.showModal();
                      setBug(bug);
                    }}
                  >
                    {bug.bugName}
                  </span>
                </td>
                <td>{bug.reporter}</td>
                <td>{bug.createdTime}</td>
                <td>{bug.status}</td>
                <td className="flex gap-1 max-w-40 flex-wrap">
                  {bug.tags.map((tag) => (
                    <span className="badge badge-ghost badge-sm">{tag}</span>
                  ))}
                </td>
                <td>{bug.dueDate}</td>
                <td>{bug.assignee}</td>
                <td>{bug.severity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pagination */}
      <div className="flex">
        <div className="join text-sm ml-auto mr-10">
          <button className="join-item btn btn-xs">1</button>
          <button className="join-item btn btn-xs">2</button>
          <button className="join-item btn btn-disabled btn-xs">...</button>
          <button className="join-item btn btn-xs">99</button>
          <button className="join-item btn btn-xs">100</button>
        </div>
      </div>
      {/* modal */}
      <Modal
        modalId="my_modal_4"
        modalHeading="Bug Details"
        children={<CreateIssueForm />}
      />
    </>
  );
};

export default Bugs;
