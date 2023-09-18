import arrow from "../../src/assets/arrow.png";

const SendMessage = () => {
  return (
    <div className="xs:px-2 sm:px-4 md:px-6 lg:px-14 mid-xl:px-16 xs:my-10 sm:my-10 md:my-10 lg:my-16 mid-xl:my-20 xl:my-24">
      <h2 className="text-[20px] md:text-[20px] lg:text-[25px] mid-xl:text-[30px] xl:text-[40px]  font-medium mb-6 lg:mb-10 mid-xl:mb-16 xl:mb-24">
        SEND A <span>SECURE</span> MESSAGE NOW
      </h2>
      <p className="text-[20px] md:text-[20px] lg:text-[25px] mid-xl:text-[30px] xl:text-[40px]  mb-6 mid-xl:mb-8 xl:mb-12">
        Hello, Maurce Andrews team!
      </p>
      <form action="">
        <div className="flex items-center mb-5 lg:mb-7">
          <label
            className="flex text-[20px] md:text-[20px] lg:text-[25px] mid-xl:text-[30px] xl:text-[40px]  me-3"
            htmlFor="fullName"
          >
            My name is
          </label>
          <input
            className="flex-grow text-[15px] ps-3 placeholder focus:outline-none h-5 mid-xl:h-7 xl:h-10 border-b-[1px] border-[#1B2946A6]"
            type="email"
            name="fullName"
            id="fullName"
            placeholder="YOUR FULL NAME"
          />
        </div>
        <div className="flex items-center mb-5 lg:mb-7">
          <label
            className="flex text-[20px] md:text-[20px] lg:text-[25px] mid-xl:text-[30px] xl:text-[40px]  me-3"
            htmlFor="email"
          >
            My email address is
          </label>
          <input
            className="flex-grow text-[15px] ps-3 placeholder focus:outline-none h-5 mid-xl:h-7 xl:h-10 border-b-[1px] border-[#1B2946A6]"
            type="text"
            name="email"
            id="email"
            placeholder="EMAIL ADDRESS"
          />
        </div>
        <div className="flex items-center mb-5 lg:mb-7">
          <label
            className="flex text-[20px] md:text-[20px] lg:text-[25px] mid-xl:text-[30px] xl:text-[40px]  me-3"
            htmlFor="phoneNumber"
          >
            My phone number is
          </label>
          <input
            className="flex-grow text-[15px] ps-3 placeholder focus:outline-none h-5 mid-xl:h-7 xl:h-10 border-b-[1px] border-[#1B2946A6]"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="PHONE NUMBER"
          />
        </div>
        <p className="text-[12px] lg:text-[10px] font-medium text-[#1B2946]  mb-5 lg:mb-7">
          (To ensure that we connect you with the best lawyer for your case,
          please provide details of the nature of the allegation you are facing.
          All information will be treated in the strictest confidence.)
        </p>
        <div className="flex items-start   mb-5 lg:mb-7">
          <label
            className="flex text-[20px] md:text-[20px] lg:text-[25px] mid-xl:text-[30px] xl:text-[40px]  me-3"
            htmlFor="phoneNumber"
          >
            My message is
          </label>
          <textarea
            className="flex-grow text-[15px] ps-3 placeholder h-10 focus:outline-none border-b-[1px] border-[#1B2946A6]"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="MESSAGE"
          ></textarea>
        </div>
      </form>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between my-5 lg:my-7 gap-7">
        <p className="text-[20px] md:text-[20px] lg:text-[25px] mid-xl:text-[30px] xl:text-[40px]  text-[#1B2946]">
          My phone Preferred method of contact is{" "}
        </p>
        <div className="flex">
          <button className=" text-[10px] text-white px-6 lg:px-10 py-2 bg-[#1B2946]">
            PHONE
          </button>
          <button className="mx-6 text-[10px] text-white px-6 lg:px-10 py-2 bg-[#1B2946]">
            EMAIL
          </button>
          <button className=" text-[10px] text-white px-6 lg:px-10 py-2 bg-[#1B2946]">
            EITHER
          </button>
        </div>
      </div>
      <ul className="list-disc text-[12px] lg:text-[10px] font-medium">
        <li>
          All information given to us is confidential and further protected by
          legal privilege. Legal privilege is additional protection to keep
          solicitor and client discussions private at all times.
        </li>
      </ul>
      <button className="flex text-[12px] lg:text-[15px] mt-6 font-medium items-center gap-10 px-3  md:px-4 lg:px-6 mid-xl:px-8 xl:px-10 py-2 mid-xl:py-3 xl:py-4 border-2 border-[#1B2946]">
        SEND MESSAGE <img src={arrow} className="w-6 lg:w-10" alt="" />
      </button>
    </div>
  );
};

export default SendMessage;
