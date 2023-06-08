import React, { useState } from "react";
import Link from "./Link";
import AnchorLink from "react-anchor-link-smooth-scroll";

const LargeScreen: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <div className="flex w-full items-center justify-between">
      {/* INNER LEFT */}
      <div className="flex items-center justify-between gap-8 text-sm">
        <Link
          page="Home"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Benifits"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Our Classes"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <Link
          page="Contact Us"
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      </div>
      {/* INNER RIGHT */}
      <div className="flex items-center justify-between gap-8 text-sm">
        <p>Sign In</p>
        <button className="rounded-md bg-secondary-500 px-10 py-2 text-black transition duration-300 hover:bg-primary-500 hover:text-white">
          <AnchorLink href="#contactus">Become a member</AnchorLink>
        </button>
      </div>
    </div>
  );
};

export default LargeScreen;
