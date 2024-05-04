import React from "react";
interface IBannerProps {
  text: string;
}

const Banner: React.FC<IBannerProps> = ({ text }) => {
  return (
    <div>
      <span className="  bg-[rgb(187,247,208)] text-[rgb(34,197,94)] text-xs  me-2 px-2.5 py-0.5 rounded   border border-[rgb(22,101,52)] absolute top-5 right-5">
        {text}
      </span>
    </div>
  );
};

export default Banner;
