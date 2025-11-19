import React, { useState } from "react";
import Spinner from "../helper/Spinner";
import { NavLink, useLocation } from "react-router-dom";

const ViewUserDetails = () => {
    let location=useLocation();
    // console.log(location);
    let userData=location.state;
    console.log("UserData:",userData);
    
    
  return (
    <section className="w-[100vw] h-[calc(100vh-70px)] flex justify-center items-center">
      <article className="w-[45vw] bg-gray-900 text-white p-5 rounded-xl">
        <header className="py-2">
          <h1 className="text-3xl font-semibold uppercase text-center py-3">
            User Details
          </h1>
        </header>
        <main className="w-full p-3">
          <div className="w-full grid grid-cols-2 gap-5 mb-3">
            <div className="w-full flex flex-col gap-2 mb-2">
              <label htmlFor="">EMP ID</label>
              <span className="px-3 py-5 border border-gray-600 rounded">{userData.empId}</span>
            </div>
            <div className="w-full flex flex-col gap-2 mb-2">
              <label htmlFor="">EMP NAME</label>
              <span className="px-3 py-5 border border-gray-600 rounded">{userData.empName}</span>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 gap-5 mb-3">
            <div className="w-full flex flex-col gap-2 mb-2 ">
              <label htmlFor="">EMP DESGINATION</label>
              <span className="py-5 px-3 border border-gray-600 rounded">{userData.empDesg}</span>
            </div>
            <div className="w-full flex flex-col gap-2 mb-2">
              <label htmlFor="">EMP SALARY</label>
              <span className="px-3 py-5 border border-gray-600 rounded">{userData.empSalary}</span>
            </div>
          </div>
          <div className="w-full grid gap-5 mb-3">
            <div className="w-full flex flex-col gap-2 mb-2">
              <label htmlFor="">EMP DEPARTMENT</label>
              <span className="px-3 py-5 border border-gray-600 rounded">{userData.empDept}</span>
            </div>
          </div>

          <div className="w-full flex justify-center items-center mt-3">
            <NavLink
              to={"/"}
              className="px-32 py-2 bg-blue-600 hover:bg-rose-500 text-lg font-semibold rounded-lg mt-2 cursor-pointer"
            >
              Go Back
            </NavLink>
          </div>
        </main>
      </article>
    </section>
  );
};

export default ViewUserDetails;