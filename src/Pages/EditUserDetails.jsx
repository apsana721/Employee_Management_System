import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Spinner from "../helper/Spinner";
import { updateUser } from "../API/crudApi";

const EditUserDetails = () => {
let location=useLocation();
let UserData=location.state;
console.log(UserData);

  let [formData, setFormData] = useState({
    empId: UserData.empId,
    empName: UserData.empName,
    empDesg: UserData.empDesg,
    empDept: UserData.empDept,
    empSalary: UserData.empSalary,
  });

  let [isLoading, setIsLoading] = useState(false);

  //! Destructure the userData
  let { empId, empName, empDesg, empDept, empSalary } = formData;

  //! Handle Change function
  let handleInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  //! Handle Submit function
  let handleSubmit =async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      //! User details update code here
await updateUser(UserData.id,formData);
      toast.success("User details updated successfully");
      setTimeout(() => {
        window.location.assign("/");
      });
    } catch (error) {
      toast.error(error);
      console.log("Error while updating the user data: ", error);
    }
    setIsLoading(false);
  };
  return (
    <section className="w-[100vw] h-[calc(100vh-70px)] flex justify-center items-center">
      <article className="w-[45vw] bg-gray-900 text-white p-5 rounded-xl">
        <header className="py-2">
          <h1 className="text-3xl font-semibold uppercase text-center py-3">
            Update User Details
          </h1>
        </header>
        <main className="w-full p-3">
          <form onSubmit={handleSubmit}>
            <div className="w-full grid grid-cols-2 gap-5 mb-3">
              <div className="w-full flex flex-col gap-2 mb-2">
                <label htmlFor="empID" className="text-lg">
                  EMP ID
                </label>
                <input
                  type="text"
                  name="empId"
                  id="empId"
                  placeholder="Enter your emp ID.."
                  className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                  value={empId}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full flex flex-col gap-2 mb-2">
                <label htmlFor="empName" className="text-lg">
                  EMP NAME
                </label>
                <input
                  type="text"
                  name="empName"
                  id="empName"
                  placeholder="Enter your emp Name.."
                  className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                  value={empName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-5 mb-3">
              <div className="w-full flex flex-col gap-2 mb-2">
                <label htmlFor="empDesg" className="text-lg">
                  EMP DESIGNATION
                </label>
                <input
                  type="text"
                  name="empDesg"
                  id="empDesg"
                  placeholder="Enter your emp Desg.."
                  className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                  value={empDesg}
                  onChange={handleInputChange}
                />
              </div>
              <div className="w-full flex flex-col gap-2 mb-2">
                <label htmlFor="empSalary" className="text-lg">
                  EMP SALARY
                </label>
                <input
                  type="text"
                  name="empSalary"
                  id="empSalary"
                  placeholder="Enter your emp Salary.."
                  className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                  value={empSalary}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-2 mb-2">
              <label htmlFor="empDept" className="text-lg">
                EMP DEPARTEMENT
              </label>
              <input
                type="text"
                name="empDept"
                id="empDept"
                placeholder="Enter your emp Dept.."
                className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                value={empDept}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex justify-between items-center mt-3">
              <button className="px-22 py-2 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg mt-2 cursor-pointer">
                Update User
              </button>
              <NavLink
                to="/"
                className="px-20 py-2 bg-rose-600 hover:bg-rose-700 text-lg font-semibold rounded-lg mt-2 cursor-pointer"
              >
                Cancel
              </NavLink>
            </div>
          </form>
        </main>
      </article>
      {isLoading && (
        <section className="w-[100%] h-[100vh] bg-black/50 fixed top-0">
          <Spinner />
        </section>
      )}
    </section>
  );
};

export default EditUserDetails;