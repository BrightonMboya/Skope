import React from "react";

type Props = {
  number: number;
};

const MoreInfoCard = (props: Props) => {
  return (
    <div>
      <div className="w-[61px] h-[57.98px] bg-white">{props.number}</div>
    </div>
  );
};

export default MoreInfoCard;
