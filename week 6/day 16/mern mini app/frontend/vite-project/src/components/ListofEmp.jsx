 import { useState, useEffect } from "react";

function ListOfEmps() {
  const [emps, setEmps] = useState([]);

  useEffect(() => {
    async function getEmps() {
      let res = await fetch("http://localhost:5000/employee-api/employees");
      if (res.status === 200) {
        let resObj = await res.json();
        setEmps(resObj.payload);
      }
    }
    getEmps();
  }, []);

  return (
    <div>
      <h1 className="text-4xl text-center">List of Employees</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-5">
            <p>{empObj.empname}</p>
            <p>{empObj.email}</p>
            <p>{empObj.mobileno}</p>
            <p>{empObj.designation}</p>
            <p>{empObj.companyName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;