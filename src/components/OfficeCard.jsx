const OfficeCard = ({ data }) => {
  return (
    <div className="px-3 lg:px-6 space-y-4 text-center">
      <h3 className="text-lg md:text-xl font-medium text-[#1C2946]">
        {data.title}
      </h3>
      <p className="text-xl text-[#1C2946]">{data.start}</p>
      <p className="text-xl text-[#1C2946]">{data.end}</p>
    </div>
  );
};

export default OfficeCard;
