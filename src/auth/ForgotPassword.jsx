import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import Spinner from "../helper/Spinner";
import { sendPasswordResetEmail } from "firebase/auth";
import { __AUTH } from "../Backend/firebaseConfig";

const ForgotPassword = () => {
  let [username, setUsername] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  //! Handle change
  let handleInputChange = (e) => {
    let value = e.target.value;
    setUsername(value);
  };

  //! Handle Submit
  let handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      //! Reset password functionality provided by the firebase
await sendPasswordResetEmail(__AUTH,username);
      toast.success(
        `Reset password email has been sent to your registered ${username}`
      );
      setTimeout(() => {
        window.location.assign("/auth/login");
      }, 1000);
    } catch (error) {
      toast.error(error.message);
      console.log("Error while reset password: ", error);
    }
    setIsLoading(false);

  };
  return (
    <section className="w-[100vw] h-[calc(100vh-70px)] flex justify-center items-center">
      <article className="w-[30vw] bg-gray-900 text-white p-5 rounded-xl">
        <header className="py-2">
          <h1 className="text-3xl font-semibold uppercase text-center py-3">
            Reset Password
          </h1>
        </header>
        <main className="w-full p-3">
          <form onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-2 mb-4">
              <label htmlFor="username" className="text-lg">
                Enter your email
              </label>
              <input
                type="email"
                name="username"
                id="username"
                placeholder="Enter your username.."
                className="outline-none py-2 border border-gray-400 px-2 text-lg rounded-md hover:ring-1 hover:ring-blue-600"
                value={username}
                onChange={handleInputChange}
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <button className="px-8 py-2 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg mt-2 cursor-pointer">
                Reset Password
              </button>
              <NavLink
                to={"/auth/login"}
                className="px-10 py-2 bg-rose-600 hover:bg-rose-700 text-lg font-semibold rounded-lg mt-2 cursor-pointer"
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

export default ForgotPassword;