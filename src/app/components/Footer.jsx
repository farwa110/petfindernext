"use client";

import { FiHome } from "react-icons/fi";
import { FaRegStar } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { HiOutlineUser } from "react-icons/hi";

const FooterBar = () => {
  return (
    <footer className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white">
      <div className="mt-3.5 mb-5 flex items-center justify-evenly py-3">
        <FiHome className="text-2xl text-[#ACACAC] hover:bg-amber-600" />
        <FaRegStar className="text-2xl text-[#ACACAC]" />
        <FaRegComment className="text-2xl text-[#ACACAC]" />
        <HiOutlineUser className="text-2xl text-[#ACACAC]" />
      </div>
    </footer>
  );
};

export default FooterBar;
