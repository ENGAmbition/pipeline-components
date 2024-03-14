import { cn } from "../../utils/cn";
import { JSX, FC, useState, useEffect } from "react";
import { HTMLNavbarProps, HTMLParaProps } from "./Navbar.types";
import PipelineLogoLong from "../PipelineLogoLong";
import Button from "../Button";

const Navbar: FC<HTMLNavbarProps> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // State to track mobile view

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const NavbarButton: FC<HTMLParaProps> = (props): JSX.Element => (
    <div className="group relative flex flex-col items-center justify-center px-6 py-2">
      <p
        {...props}
        className="z-10 cursor-pointer text-center text-lg text-spruce-default group-hover:text-blue-500"
      >
        {props.children}
      </p>

      <span className="absolute z-0 h-full w-0 rounded-lg bg-gray-100 duration-300 ease-in-out group-hover:w-full"></span>
    </div>
  );

  return (
    <nav
      {...props}
      className={cn(
        "fixed left-0 top-0 z-50 flex w-screen flex-col md:flex-row items-center justify-between bg-white p-2 md:p-4",
        props.className,
      )}
    >
      <div className="flex flex-row items-center justify-between w-full md:w-auto">
        <PipelineLogoLong className="-my-10" />

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block text-gray-800 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2zm0 6h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <NavbarButton>Home</NavbarButton>
        <NavbarButton>About</NavbarButton>
        <NavbarButton>Programs</NavbarButton>
        <NavbarButton>News</NavbarButton>
        <NavbarButton>Future Plans</NavbarButton>
        <div className="flex flex-row items-center justify-end gap-2">
          <Button variant="outlined">Sign In</Button>
          <Button variant="blue-gradient">Get Started</Button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row items-center justify-end gap-2">
        <NavbarButton>Home</NavbarButton>
        <NavbarButton>About</NavbarButton>
        <NavbarButton>Programs</NavbarButton>
        <NavbarButton>News</NavbarButton>
        <NavbarButton>Future Plans</NavbarButton>
      </div>

      {!isMobile && (
        <div className="flex flex-row items-center justify-end gap-2">
          <Button variant="outlined">Sign In</Button>
          <Button variant="blue-gradient">Get Started</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
