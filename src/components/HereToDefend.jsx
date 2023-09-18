import dummy from "../../src/assets/dummy.png";
const HereToDefend = () => {
  return (
    <div className="sm:mt-6 md:mt-10 lg:mt-16 mid-xl:mt-20 xl:mt-24 mb-36 md:px-10 lg:px-12 mid-xl:px-16 md:flex items-center md:gap-20 lg:gap-40">
      <div className="flex-1 mid-xl:ms-16 xl:ms-20">
        <h2 className="sm:text-[25px] md:text-[30px] lg:text-[35px] mid-xl:text-[40px] xl:text-[45px] font-medium">
          HERE TO <br />
          DEFEND YOU
        </h2>
        <p className="md:mt-6 lg:mt-8 mid-xl:mt-10 xl:mt-12 mid-xl:me-24 xl:me-40 text-[12px] md:text-[15px] text-[#646F85]">
          In your time of greatest need, Stuart Miller Solicitors are here to
          defend you just as we have for high-profile Criminal Offence cases
          since 1984. We’re ready 24/7 to dig our teeth in, leave no angle
          overlooked and tenaciously fight to return your life to the way it
          was.
        </p>
      </div>
      <div className="flex-1 bg-[#D9D9D9]">
        <img src={dummy} alt="" />
      </div>
    </div>
  );
};

export default HereToDefend;
