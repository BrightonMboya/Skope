import Image from "next/image";

type Props = {
  number: number;
  imageSrc: string;
  desc: string;
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
          height={180}
          alt=""
          src={props.imageSrc}
        />
      </div>

      <h3 className="mt-[3rem] text-[1rem] max-w-[270px]">{props.desc}</h3>
    </div>
  );
};

export default MoreInfoCard;
