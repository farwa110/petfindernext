"use client";

import { LuBellDot } from "react-icons/lu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-10">
      {/* Logo */}
      <h1 className="text-xl font-bold text-gray-900">FamilyFriends</h1>

      {/* Notification Bell Icon */}
      <LuBellDot className="text-2xl text-gray-700" />
    </header>
  );
};

export default Header;
