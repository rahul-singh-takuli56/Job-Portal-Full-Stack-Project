import React from "react";

const PageHeader = ({ title, path }) => {
  return (
    <div className="py-24 mt-3 bg-[#FAFAFA] rounded flex items-center justify-center">
      <div>
        <h2 className="text-4xl text-blue font-semibold mb-1 text-center">
          {title}
        </h2>
        <p className="text-xl text-center">
          <a href="/">Home</a> / {path}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
