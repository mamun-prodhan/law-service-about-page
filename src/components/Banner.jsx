import banner from "../../src/assets/about-banner.png";

const Banner = () => {
  return (
    <div className=" md:px-6 lg:px-14 mid-xl:px-16 md:pt-6 mid-xl:pt-8">
      <img className="w-full" src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
