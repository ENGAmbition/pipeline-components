import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLNavbarProps, HTMLParaProps } from "./Navbar.types";
import PipelineLogoLong from "../PipelineLogoLong";
import Button from "../Button";

/**
 * Navbar Component
 *
 * @param {HTMLNavbarProps} props - Component props
 * @returns JSX.Element
 *
 * @example
 * <Navbar />
 */
const Navbar: FC<HTMLNavbarProps> = (props): JSX.Element => {
  const NavbarButton: FC<HTMLParaProps> = (props): JSX.Element => (
    <div className="relative group flex flex-col justify-center items-center py-2 px-6">
      <p
        {...props}
        className="text-lg text-center text-spruce-default z-10 cursor-pointer group-hover:text-blue-500"
      >
        {props.children}
      </p>

      <span className="h-full bg-gray-100 absolute z-0 w-0 group-hover:w-full duration-300 ease-in-out rounded-lg"></span>
    </div>
  );

  return (
    <nav
      {...props}
      className={cn(
        "fixed w-screen top-0 left-0 flex z-50 flex-row items-center justify-between bg-white p-2 md:p-4",
        props.className
      )}
    >
      <div className="flex flex-row items-center justify-start pl-4 md:pl-0 gap-4">
        <PipelineLogoLong className="-my-10" />

        <NavbarButton>Home</NavbarButton>
        <NavbarButton>About</NavbarButton>
        <NavbarButton>Programs</NavbarButton>
        <NavbarButton>News</NavbarButton>
        <NavbarButton>Future Plans</NavbarButton>
      </div>

      <div className="flex flex-row items-center justify-end gap-2">
        <Button variant="outlined">Sign In</Button>
        <Button variant="blue-gradient">Get Started</Button>
      </div>
    </nav>
  );
};

/**
 * Export the component by default
 */
export default Navbar;
