import banner from "../../src/assets/about-banner.png";

const Banner = () => {
  return (
    <div className="xl:px-16 xl:pt-8">
      <img className="w-full" src={banner} alt="banner" />
      <h1 className="text-2xl 3xl:text-7xl">Home page</h1>
    </div>
  );
};

export default Banner;
