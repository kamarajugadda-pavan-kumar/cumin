import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-wrap">
      <div className="card w-5/12 bg-base-100 shadow-xl rounded-none ">
        <div className="card-body">
          <h2 className="card-title">Assigned to me</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>

      <div className="card w-5/12 bg-base-100 shadow-xl rounded-none ">
        <div className="card-body ">
          <h2 className="card-title">Activity</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
