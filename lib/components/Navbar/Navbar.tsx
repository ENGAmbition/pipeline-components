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
        "fixed left-0 top-0 z-50 flex w-screen flex-row items-center justify-between bg-white p-2 md:p-4",
        props.className,
      )}
    >
      <div className="flex flex-row items-center justify-start gap-4 pl-4 md:pl-0">
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
