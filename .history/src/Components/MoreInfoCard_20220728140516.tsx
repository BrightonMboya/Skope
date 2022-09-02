import Image from "next/image";

type Props = {
  number: number;
};

const MoreInfoCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mt-[1rem]">
      <div className="w-[61px] h-[57.98px] bg-white text-blue text-[32px]">
        {props.number}
      </div>

      <div className="w-[276px] h-[155px]">
        <Image
          layout="intrinsic"
          width={300}
          height={100}
          alt=""
          src="/img4.png"
        />
      </div>
    </div>
  );
};

export default MoreInfoCard;
