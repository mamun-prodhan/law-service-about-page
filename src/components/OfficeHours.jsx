import React from "react";
import OfficeCard from "./OfficeCard";
import { BsArrowRight } from "react-icons/bs";

const OfficeHours = () => {
  const officehours = [
    {
      title: "Monday",
      start: "9.00 am ",
      end: "5.00 pm ",
    },
    {
      title: "Tuesday ",
      start: "9.00 am ",
      end: "5.00 pm ",
    },
    {
      title: "Wednesday",
      start: "9.00 am ",
      end: "5.00 pm ",
    },
    {
      title: "Thursday",
      start: "9.00 am ",
      end: "5.00 pm ",
    },
    {
      title: "Friday",
      start: "9.00 am ",
      end: "5.00 pm ",
    },
    {
      title: "Saturday",
      start: "Closed ",
      end: "/",
    },
    {
      title: "Sunday ",
      start: "Closed ",
      end: "/",
    },
  ];
  return (
    <div className="my-10 md:my-16 lg:my-32 px-4 md:px-10 lg:px-20 flex flex-col gap-5 lg:flex-row lg:items-center">
      <div className="lg:-w[5%] mid-xl:w-[10%] xl:w-[15%] mb-6 md:mb-10 lg:mb-0">
        <h2 className="text-xl md:text-2xl text-[#1C2946] font-medium mb-3">
          Foundations
        </h2>
        <a
          href=""
          className="text-base text-[#3C78F4] flex items-center justify-center lg:justify-start"
        >
          Contact Us{" "}
          <span className="ms-4">
            <BsArrowRight />
          </span>
        </a>
      </div>
      <div className=" mid-xl:px-10 xl:px-14 py-20 lg:w-[95%] mid-xl:w-[90%] xl:w-[85%] border grid grid-cols-2 md:grid-cols-3  mid-xl:grid-cols-4 xl:grid-cols-7 gap-x-5 gap-y-10">
        {officehours.map((data, index) => (
          <OfficeCard data={data} key={index}></OfficeCard>
        ))}
      </div>
    </div>
  );
};

export default OfficeHours;
