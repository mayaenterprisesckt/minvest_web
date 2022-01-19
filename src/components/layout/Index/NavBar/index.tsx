import { FaMoneyBillAlt, FaHome, FaLongArrowAltRight, FaBloggerB } from "react-icons/fa";
import {
    MdSupervisorAccount,
    // MdOutlineClose,
    MdMoney,
    // MdOutlineMiscellaneousServices,
    MdOutlineContactMail,
} from "react-icons/md";
import Logo from "@/components/icons/logo";
import dynamic from "next/dynamic";
// const Drawer = dynamic(() => import("./drawer/Index"));
// const DrawerItem = dynamic(() => import("./drawer/DrawerItem"));
// const Dropdown = dynamic(() => import("./Dropdown"));

// const DropDwonItem = dynamic(() => import("./Dropdown/DropDwonItem"));
const HeaderItem = dynamic(() => import("./HeaderItem"));
const MobileNav = dynamic(() => import("./MobileNav"));
const ThemeSwitch = dynamic(() => import("../../../shared/ToggleTheme"));
const MobileNavItem = dynamic(() => import("./MobileNav/MobileNavItem"));

const NavBar = () => {
    // const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed top-0 w-full clearNav bg-gray-50  dark:bg-black z-50">
                <div className="px-4 -py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        {/* Logo */}
                        <a
                            aria-label="Company"
                            title="Company"
                            className="inline-flex  items-center"
                        >
                            <Logo />
                            {/* className="w-8 text-teal-400"
                                // viewBox="0 0 24 24"
                                // strokeLinejoin="round"
                                // strokeWidth="2"
                                // strokeLinecap="round"
                                // strokeMiterlimit="10"
                                // stroke="currentColor"
                                // fill="none" */}

                            <span className="ml-2 text-xl font-bold tracking-wide text-black dark:text-white uppercase">
                                Minvest
                            </span>
                        </a>
                        {/* Nav Items  */}
                        <ul className=" items-center  space-x-8 lg:flex md:hidden hidden">
                            {/* <HeaderItem name={"Home"} link={"/"} /> */}
                            {/* <div className="mr-4">
                                <Dropdown name="Services">
                                    <DropDwonItem
                                        link={"http://minvest.mayaenterprises.co.in"}
                                        name={"MInvest"}
                                        desc={"One palce for all your investmemt"}
                                    />
                                    <DropDwonItem link={"#"} name={"Gaynasutra"} desc={""} />
                                </Dropdown>
                            </div> */}
                            <HeaderItem name={"Home"} link={"/"} />
                            <HeaderItem name={"About"} link={"/about"} />
                            <HeaderItem name={"Pricing"} link={"/pricing"} />
                            <HeaderItem name={"Blog"} link={"/blog"} />
                            <HeaderItem name={"Contact"} link={"/contact"} />
                            <HeaderItem name={"Login"} link={"/login"} />

                            <li>
                                <ThemeSwitch />
                            </li>
                        </ul>
                        <div className="lg:hidden">
                            <ThemeSwitch />
                        </div>
                    </div>
                </div>
                <hr />
            </div>

            {/* Drawer */}
            {/* <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                <DrawerItem
                    link={"http://minvest.mayaenterprises.co.in"}
                    name={"Minvest"}
                    desc="One place or All Your Invest"
                    Icon={FaMoneyBillAlt}
                />
                <DrawerItem
                    link={""}
                    name={"GyanaSutra"}
                    desc="Learn How to Trade"
                    Icon={FaRegLightbulb}
                />
            </Drawer> */}
            {/* Mobile Nav Start */}
            <MobileNav>
                <MobileNavItem link={"/"} name="Home" Icon={FaHome} />
                <MobileNavItem link={"/about"} name="About" Icon={MdSupervisorAccount} />
                {/* <div>
                    {isOpen ? (
                        <div onClick={() => setIsOpen(false)}>
                            <MobileNavItem link={""} name="Services" Icon={MdOutlineClose} />
                        </div>
                    ) : (
                        <div onClick={() => setIsOpen(true)}>
                            <MobileNavItem
                                link={""}
                                name="Services"
                                Icon={MdOutlineMiscellaneousServices}
                            />
                        </div>
                    )}
                </div> */}

                <MobileNavItem link={"/feature"} name="Feature" Icon={MdMoney} />
                <MobileNavItem link={"/pricing"} name="Pricing" Icon={FaMoneyBillAlt} />
                <MobileNavItem link={"/blog"} name="Blog" Icon={FaBloggerB} />
                <MobileNavItem link={"/contact"} name="Contact" Icon={MdOutlineContactMail} />
                <MobileNavItem link={"/login"} name="Login" Icon={FaLongArrowAltRight} />
            </MobileNav>
        </>
    );
};
export default NavBar;
