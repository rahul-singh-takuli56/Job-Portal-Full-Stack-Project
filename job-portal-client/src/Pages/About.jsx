/* eslint-disable react/jsx-no-comment-textnodes */
// About.js
import React from "react";
import aboutImage from "../../public/images/about.jpeg";

function About() {
  return (
    <div className="container  bg-slate-100 h-full w-full ml-2 ">
      <div className="grid  grid-cols-1 lg:grid-cols-2 h-full  border ">
        <div className=" py-4 px-2  rounded-sm ">
          <p className="text-6xl pt-2 mx-auto font-semi-bold text-center ">
            Achievements
          </p>

          <div className="pt-4  pl-2">
            <p className="text-4xl py-2 ">
              Job Seekers Helped:{" "}
              <span className="font-semibold text-blue">50,000+</span>
            </p>
            <p className="text-lg py-2">
              Since our inception, we've assisted over 50,000 job seekers in
              finding meaningful employment opportunities. Whether it's
              entry-level positions or executive roles.
            </p>
            <p className="text-4xl py-2">
              Industry Verticals Covered:{" "}
              <span className="font-semibold text-blue">20+</span>
            </p>
            <p className="text-lg py-2">
              Our platform spans across diverse industry verticals, including
              technology, healthcare, finance, and more. With over 20 different
              sectors represented.
            </p>
            <p className="text-4xl py-2">
              Strategic Partnerships Established:{" "}
              <span className="font-semibold text-blue">50+</span>
            </p>
            <p className="text-lg py-2">
              We've forged strategic partnerships with over 50 leading
              organizations, institutions, and recruitment agencies to expand
              our reach and provide enhanced services to our users.
            </p>
            <p className="text-4xl py-2">Why Choose Us: </p>
            <div className="text-lg py-2">
              <ul>
                <li>
                  Wide Range of Job Opportunities: We feature job openings from
                  various industries and sectors.
                </li>
                <li>
                  User-Friendly Interface: Our platform is easy to navigate,
                  making the job search process convenient and efficient.
                </li>
                <li>
                  Resume Builder: We offer tools to help job seekers create
                  professional resumes that stand out to employers.
                </li>
              </ul>
              <div className="pt-4  pl-2 ">
                <h2 className="text-4xl py-2">Contact Us</h2>
                <p className="text-lg py-2">
                  If you have any questions or feedback, <br />
                  please don't hesitate to{" "}
                  <a href="/" className="text-blue hover:underline">
                    contact us.{" "}
                  </a>
                  We'd love to hear from you!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="ml-16 mt-24">
            <img
              src={aboutImage}
              alt="About Image"
              className="w-[600px] rounded-full h-[600px] "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
