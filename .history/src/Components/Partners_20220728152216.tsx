import Image from "next/image";

const Partners = () => {
  return (
    <div className="mt-7 flex justify-center items-center">
      <div>
        <h3 className="text-lg font-semibold ml-5 md:text-2xl mt-[8vh]">
          Partners Who Trust Us
        </h3>
        <div className="md:w-70 h-40">
          <Image alt="" src="/partners.png" width={200} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Partners;
