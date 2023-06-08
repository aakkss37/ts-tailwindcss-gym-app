import React from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import LargeScreen from "./LargeScreen";
import MediumScreen from "./MediumScreen";
import useMediaQuery from "@/Hooks/useMediaQuery";

// interface Props {}

const Navbar: React.FC = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1020px)");
  return (
    <nav>
      <div className="fixed top-0 z-30 flex w-full items-center justify-between py-6">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">
            {/* LEFT SIDE */}
            <img src={Logo} alt="Logo" />

            {/* RIGHT SIDE */}
            {isLargeScreen ? <LargeScreen /> : <MediumScreen />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
