"use client";
import Modal from "@/app/components/modal/Modal";
import React, { useState } from "react";
import CreateProject from "./CreateProject";

export type Project = {
  id: number;
  projectName: string;
  owner: string;
  status: string;
  bugs: string[];
  startDate: string;
  endDate: string;
  createdTime: string;
  lastModifiedTime: string;
  createdBy: string;
  lastModifiedBy: string;
};

const Projects = () => {
  const projectsData: Project[] = [
    {
      id: 1,
      projectName: "Project A",
      owner: "John Doe",
      status: "Open",
      bugs: ["Bug A", "Bug B"],
      startDate: "2024-05-01",
      endDate: "2024-12-31",
      createdTime: "2024-01-01",
      lastModifiedTime: "2024-06-01",
      createdBy: "Admin",
      lastModifiedBy: "John Doe",
    },
    {
      id: 2,
      projectName: "Project B",
      owner: "Jane Smith",
      status: "In Progress",
      bugs: ["Bug C"],
      startDate: "2024-04-01",
      endDate: "2024-11-30",
      createdTime: "2024-02-01",
      lastModifiedTime: "2024-06-02",
      createdBy: "Admin",
      lastModifiedBy: "Jane Smith",
    },
    {
      id: 3,
      projectName: "Project C",
      owner: "Mike Johnson",
      status: "Closed",
      bugs: ["Bug D", "Bug E"],
      startDate: "2024-03-01",
      endDate: "2024-10-31",
      createdTime: "2024-03-01",
      lastModifiedTime: "2024-06-03",
      createdBy: "Admin",
      lastModifiedBy: "Mike Johnson",
    },
  ];
  const initialState: Project = {
    id: 0,
    projectName: "",
    owner: "",
    status: "",
    bugs: [],
    startDate: "",
    endDate: "",
    createdTime: "",
    lastModifiedTime: "",
    createdBy: "",
    lastModifiedBy: "",
  };
  const [project, setProject] = useState(initialState);

  return (
    <>
      <div className="overflow-x-auto pb-10">
        <table className="table table-sm">
          <thead className="sticky top-0">
            <tr>
              <th className="sticky left-0 bg-gray-100">ID</th>
              <th className="sticky left-10 bg-gray-100">Project Name</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Bugs</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Created Time</th>
              <th>Last Modified Time</th>
              <th>Created By</th>
              <th>Last Modified By</th>
            </tr>
          </thead>
          <tbody>
            {projectsData.map((project: Project, index) => (
              <tr key={index}>
                <th className="sticky left-0 bg-white">{project.id}</th>
                <td className="sticky left-10 bg-white">
                  <span
                    className="link link-hover"
                    onClick={() => {
                      // @ts-ignore
                      document.getElementById("my_modal_4")!.showModal();
                      setProject(project);
                    }}
                  >
                    {project.projectName}
                  </span>
                </td>
                <td>{project.owner}</td>
                <td>{project.status}</td>
                <td className="flex gap-1 max-w-40 flex-wrap">
                  {project.bugs.map((bug) => (
                    <span className="badge badge-ghost badge-sm">{bug}</span>
                  ))}
                </td>
                <td>{project.startDate}</td>
                <td>{project.endDate}</td>
                <td>{project.createdTime}</td>
                <td>{project.lastModifiedTime}</td>
                <td>{project.createdBy}</td>
                <td>{project.lastModifiedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex">
        <div className="join text-sm ml-auto mr-10">
          <button className="join-item btn btn-xs">1</button>
          <button className="join-item btn btn-xs">2</button>
          <button className="join-item btn btn-disabled btn-xs">...</button>
          <button className="join-item btn btn-xs">99</button>
          <button className="join-item btn btn-xs">100</button>
        </div>
      </div>
      <Modal
        modalId="my_modal_4"
        modalHeading="Project Details"
        children={<CreateProject />}
      />
    </>
  );
};

export default Projects;
