import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Card from "../components/Card";
import Jobs from "./Jobs";
import Sidebar from "../Sidebar/Sidebar";
import Newsletter from "../components/Newsletter";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/all-jobs")
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        setIsLoading(false);
      });
  }, []);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    // console.log(event.target.value);
  };

  //------------filter by job title-----
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  // console.log(filteredItems);

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Function to calculate the index range for the current page
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Function to handle next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function to handle previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const filteredData = (jobs, selected, query) => {
    let filteredJobs = jobs;
    // Filtering Input Items

    // console.log(filteredItems);
    if (query) {
      filteredJobs = filteredItems;
    }

    // Applying selected filter / category filtering
    if (selected) {
      console.log(selected);

      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          salaryType,
          experienceLevel,
          maxPrice,
          postingDate,
          employmentType,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          postingDate === selected ||
          parseInt(maxPrice) <= parseInt(selected) ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase()
      );
      console.log(filteredJobs);
    }

    // Slice the data based on the current page
    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filteredData(jobs, selectedCategory, query);

  return (
    <div>
      <div>
        <Banner query={query} handleInputChange={handleInputChange} />
      </div>
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* left side */}
        <div className="bg-white p-4 rounded">
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>

        {/* job cards */}
        <div className="col-span-2 bg-white p-4 rounded">
          {isLoading ? ( // Loading indicator
            <p className="font-medium">Loading...</p>
          ) : result.length > 0 ? (
            <Jobs result={result} />
          ) : (
            <>
              <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
              <p>No data found</p>
            </>
          )}
          {/* pagination block here */}

          {result.length > 0 ? (
            <div className="flex justify-center mt-4 space-x-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="hover:underline"
              >
                Previous
              </button>
              <span className="mx-2">
                Page {currentPage} of{" "}
                {Math.ceil(filteredItems.length / itemsPerPage)}
              </span>
              <button
                onClick={nextPage}
                disabled={
                  currentPage === Math.ceil(filteredItems.length / itemsPerPage)
                }
                className="hover:underline"
              >
                Next
              </button>
            </div>
          ) : (
            ""
          )}
        </div>

        {/* right side */}
        <div className="bg-white p-4 rounded">
          <Newsletter />
        </div>
      </div>
      <div className="uper-footer  pb-4 lg:pb-1 lg:h-[400px] bg-slate-100 ">
        <h1 className="font-bold text-3xl lg:text-6xl pt-4 pl-10 mx-auto">
          The <span className="text-blue">Value</span>{" "}
          <span className="text-blue">that</span> holds us true <br /> and to
          account
        </h1>

        <div className="grid  lg:grid-cols-3 pt-12  mx-auto px-10">
          <div className="px-4  py-10 bg-sky-100 mx-4 rounded-md hover:bg-indigo-300  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
            <div className="flex items-center justify-start pb-4">
              <img
                className="w-12 rounded-full text-center mr-2"
                src="https://engeniusweb.com/wp-content/uploads/2023/03/HERO-IMAGE.jpg"
                alt="image"
              />
              <h1 className="font-semibold text-4xl">Simplicity</h1>
            </div>
            <p className="text-black/90">
              Things beinf made beautiful simple are at the heart of everyting
              we do.
            </p>
          </div>

          <div className="px-4  py-10 bg-sky-100 mx-4 rounded-md hover:bg-indigo-300  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
            <div className="flex items-center justify-start pb-4">
              <img
                className="w-12  rounded-full text-center mr-2"
                src="https://community.thriveglobal.com/wp-content/uploads/2019/07/022818-73-Sociology-Socialization.jpg"
                alt="image"
              />
              <h1 className="font-semibold text-4xl">Social Good</h1>
            </div>
            <p className="text-black/90">
              We believe in making things better for everyone, even if just by a
              little bit.
            </p>
          </div>

          <div className="px-4  py-10 bg-sky-100 mx-4 rounded-md hover:bg-indigo-300  hover:-translate-y-1 hover:scale-110 transition ease-in-out delay-150">
            <div className="flex items-center justify-start pb-4">
              <img
                className="w-12 h-12 rounded-full text-center mr-2"
                src="https://media.istockphoto.com/id/1351667319/photo/a-man-shares-two-puzzles-with-the-word-trust-violation-of-agreements-and-promises-lose.jpg?s=612x612&w=0&k=20&c=Rgtb-aCg_ymIVaVKQxQAWz_VAwWJ_AElf9GBICOtFKE="
                alt="image"
              />
              <h1 className="font-semibold text-4xl">Trust</h1>
            </div>
            <p className="text-black/90">
              We work on the basis of creating trust which can be nurtured
              through authenticity and transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
Home;
