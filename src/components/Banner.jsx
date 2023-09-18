import banner from "../../src/assets/about-banner.png";

const Banner = () => {
  return (
    <div className="xl:px-16 xl:pt-8">
      <img className="w-full" src={banner} alt="banner" />
    </div>
  );
};

export default Banner;
