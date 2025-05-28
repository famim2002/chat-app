import React from 'react'
import { Link } from 'react-router'
import {PiArrowBendUpLeftBold} from "react-icons/pi";

const BackButton = () => {
  return (
    <>
      <Link to="/" className="group">
        <div className="w-fit p-4 bg-secondColor rounded-full transition-all group-hover:bg-BrandColor">
          <PiArrowBendUpLeftBold className="text-[35px]  text-BrandColor transition-all group-hover:text-primaryColor" />
        </div>
      </Link>
    </>
  );
}

export default BackButton
