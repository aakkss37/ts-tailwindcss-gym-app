import { Bars3Icon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const MediumScreen: React.FC = () => {
	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  return (
    <button
      className="rounded-full bg-secondary-500 p-2"
      onClick={() => setIsMenuToggled(!isMenuToggled)}
    >
      <Bars3Icon className="h-6 w-6 text-white"/>
    </button>
  );
};

export default MediumScreen;
