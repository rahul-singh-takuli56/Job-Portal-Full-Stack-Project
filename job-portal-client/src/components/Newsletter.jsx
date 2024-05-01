import React from "react";
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6";

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          {" "}
          <FaEnvelopeOpenText /> Email me for jobs
        </h3>
        <p className="text-primary/75 text-base mb-4">
          If you're interested in exploring job opportunities with us, feel free
          to send us an email.
        </p>

        <div className="w-full space-y-4">
          <input
            type="email"
            placeholder="rahulsingh@gmail.com"
            className="w-full block py-2 pl-3 border focus:outline-none"
          />
          <input
            type="submit"
            value="Subscribe"
            className="w-full block py-2 bg-blue rounded-sm text-white cursor-pointer font-semibold hover:bg-cyan-900"
          />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
          <FaRocket /> Get noticed faster
        </h3>
        <p className="text-primary/75 text-base mb-4">
          Looking to stand out in your job search? Send us an email to learn how
          you can accelerate your career journey.
        </p>

        <form action="/upload" method="POST" encType="multipart/form-data">
          <div className="w-full space-y-4">
            <input type="file" name="upload-resume" />
            <button
              type="submit"
              className="w-full block py-2 bg-blue rounded-sm text-white cursor-pointer font-semibold hover:bg-cyan-900"
            >
              Upload your resume
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
