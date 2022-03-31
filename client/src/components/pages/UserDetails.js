import React, { useState, useEffect } from "react";

function UserDetails() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/userdetails")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(userData)
  return (
    <div className="flex flex-col pt-8">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full border text-center">
              <thead className="border-4">
                <tr>
                  <th scope="col" className=" text-gray-900 px-6 py-4 border-r">
                    #
                  </th>
                  <th scope="col" className=" text-gray-900 px-6 py-4 border-r">
                    First Name
                  </th>
                  <th scope="col" className=" text-gray-900 px-6 py-4 border-r">
                    Last Name
                  </th>
                  <th scope="col" className=" text-gray-900 px-6 py-4 border-r">
                    Gender
                  </th>
                  <th scope="col" className=" text-gray-900 px-6 py-4 border-r">
                    Email
                  </th>
                  <th scope="col" className=" text-gray-900 px-6 py-4 border-r">
                    Phone Number
                  </th>
                </tr>
              </thead>
              <tbody>
                {userData &&
                  userData.map((user, index) => (
                    <tr className="bg-white border-b" key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r">
                        {index + 1}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                        {user.firstname}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                        {user.lastname}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                        {user.gender}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                        {user.email}
                      </td>
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                        {user.mobileno}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
