import React, { useState, useEffect } from "react";

function UserEducation() {
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch("http://localhost:5000/userdetails")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="flex flex-col pt-8 ">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full border text-center">
                <thead className="border-4">
                  <tr>
                    <th
                      scope="col"
                      className=" text-gray-900 px-6 py-4 border-r"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className=" text-gray-900 px-6 py-4 border-r"
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      className=" text-gray-900 px-6 py-4 border-r"
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      className=" text-gray-900 px-6 py-4 border-r"
                    >
                      School/Institute
                    </th>
                    <th
                      scope="col"
                      className=" text-gray-900 px-6 py-4 border-r"
                    >
                      Stream
                    </th>
                    <th
                      scope="col"
                      className=" text-gray-900 px-6 py-4 border-r"
                    >
                      Percentage/CGPA
                    </th>
                    <th
                      scope="col"
                      className=" text-gray-900 px-6 py-4 border-r"
                    >
                      Start Date
                    </th>
                    <th
                      scope="col"
                      className=" text-gray-900 px-6 py-4 border-r"
                    >
                      End Date
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* rowspan length of education */}
                  {userData &&
                    userData.map((user, index) => (
                      <React.Fragment key={index}>
                        <tr className="bg-white border-b" key={index}>
                          <td
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                            rowSpan={user.education.length}
                          >
                            {index + 1}
                          </td>
                          <td
                            className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r"
                            // rowSpan={user.edlength}
                            rowSpan={user.education.length}
                          >
                            {user.firstname}
                          </td>
                          <td
                            className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r"
                            rowSpan={user.education.length}
                          >
                            {user.lastname}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {user.education[0].institute}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {user.education[0].course}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {user.education[0].percentage}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {user.education[0].startDate}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                            {user.education[0].endDate}
                          </td>
                        </tr>

                        {user.education.slice(1).map((it, i) => (
                          <tr className="bg-white border-b" key={i}>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                              {it.institute}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                              {it.course}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                              {it.percentage}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                              {it.startDate}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r">
                              {it.endDate}
                            </td>
                          </tr>
                        ))}
                      </React.Fragment>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserEducation;
