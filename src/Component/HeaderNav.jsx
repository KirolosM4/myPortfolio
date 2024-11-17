import React from "react"
import {Button} from "@material-tailwind/react"
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {Link} from "react-router-dom"

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-white"
      >
        <a href="#about" className="flex items-center hover:text-cyan-500 transition-colors">
          ABOUT
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 font-medium text-white"
      >
        <a href="#skills" className="flex items-center hover:text-cyan-500 transition-colors">
          SKILLS
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-white"
      >
        <Link href="#" className="flex items-center hover:text-cyan-500 transition-colors">
          EDUCATION
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-white"
      >
        <Link href="#" className="flex items-center hover:text-cyan-500 transition-colors">
        EXPERIENCE
        </Link>
      </Typography>
    </ul>
  );
}
const HeaderNav = () => {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
   <div>
      <div className="container h-fit mx-auto max-w-screen-3xl px-6 py-3 shadow-none rounded-none border-none">
          <div className="flex items-center justify-between text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              variant="h6"
              className="mr-4 cursor-pointer py-1.5 text-white"
            >
              KIROLOS MAGDY
            </Typography>
            <div className="hidden lg:block">
              <NavList />
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <XMarkIcon className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              )}
            </IconButton>
          </div>
          <Collapse open={openNav}>
            <NavList />
          </Collapse>
      </div>
   </div>
  )
}

export default HeaderNav;
