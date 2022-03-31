import React from "react";
import { RiUser3Line } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";

function ProgressBar({ step }) {
  return (
    <div className="pb-10 flex justify-center">
      <div className="mx-4 p-4 w-1/4">
        <div className="flex items-center">
          <div className="flex items-center text-teal-600 relative">
            <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-4 border-teal-600 flex justify-center">
              <RiUser3Line />
            </div>
            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">
              User
            </div>
          </div>
          <div
            className={`flex-auto border-t-4 transition duration-800 ease-in-out border-${
              step === 2 ? "teal" : "gray"
            }-600`}
          ></div>
          <div
            className={`flex items-center text-${
              step === 2 ? "teal" : "gray"
            }-500 relative`}
          >
            <div
              className={`rounded-full transition duration-900 ease-in-out h-12 w-12 py-3 border-4 border-${
                step === 2 ? "teal" : "gray"
              }-600 flex justify-center`}
            >
              <FaUniversity />
            </div>
            <div
              className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-${
                step === 2 ? "teal" : "gray"
              }-600`}
            >
              Education
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProgressBar;
