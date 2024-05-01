import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";

const SalaryPage = () => {
  const [salary, setSalary] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch("salary.json")
      .then((res) => res.json())
      .then((data) => setSalary(data));
  }, [searchText]);

  const handleSearch = () => {
    const filter = salary.filter(
      (job) => job.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
    console.log(filter);
    setSalary(filter);
  };
  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <PageHeader title={"ESTIMATE SALARY"} path={"Salary"} />

      <div className="mt-4">
        <div className="search-box p-2 text-center mb-2">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search by title name.."
            className="py-2 pl-3 border focus:outline-none  border-sky-700 rounded-x-md  h-12 lg:w-6/12  mb-4 w-full"
          />
          <button
            onClick={handleSearch}
            className="bg-blue text-white font-semibold px-8 py-2  hover:bg-sky-700 rounded-none mb-2 h-12 "
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12">
        {salary.map((data) => (
          <div
            key={data.id}
            className="shadow px-4 py-8 hover:bg-slate-200 rounded-md hover:rounded-xl"
          >
            <h4 className="font-semibold text-2xl uppercase">{data.title}</h4>
            <p className="my-2 font-medium text-blue text-xl ">{data.salary}</p>

            <div className="flex flex-wrap ">
              <p className="text-black font-semibold">
                Status: <span className="text-black/60">{data.status}</span>
              </p>
              <p className="font-semibold">
                Skills:{" "}
                <span className="text-black/60">
                  {data.skills.slice(0, 34)}
                </span>
              </p>
              <p className="font-semibold">
                Company: <span className="text-black/60">{data.company}</span>
              </p>
            </div>
            <p className="font-semibold">
              Qualifications:{" "}
              <span className="text-black/60">
                {data.qualifications.slice(0, 30)}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalaryPage;
