import dummy from "../../src/assets/dummy.png";
const HereToDefend = () => {
  return (
    <div className="flex flex-col md:flex-row items-center xs:gap-6 sm:gap-10 md:gap-20 lg:gap-40 xs:px-2 sm:px-4 md:px-6 lg:px-14 mid-xl:px-16 xs:mt-6 sm:mt-10 md:mt-10 lg:mt-16 mid-xl:mt-20 xl:mt-24">
      <div className="flex-1 md:ms-6 lg:ms-10 mid-xl:ms-10 xl:ms-20">
        <h2 className="md:pe-40 lg:pe-32 mid-xl:pe-40 xl:pe-40 mb-4 lg:mb-8 mid-xl:mb-10 xl:mb-12 font-medium sm:text-[25px] md:text-[25px] lg:text-[30px] mid-xl:text-[35px] xl:text-[45px]">
          HERE TO DEFEND YOU
        </h2>
        <p className=" mid-xl:pe-16 xl:pe-20 text-[15px]">
          In your time of greatest need, Stuart Miller Solicitors are here to
          defend you just as we have for high-profile Criminal Offence cases
          since 1984. We’re ready 24/7 to dig our teeth in, leave no angle
          overlooked and tenaciously fight to return your life to the way it
          was.
        </p>
      </div>
      <div className="flex-1">
        <img className="" src={dummy} alt="" />
      </div>
    </div>
  );
};

export default HereToDefend;
