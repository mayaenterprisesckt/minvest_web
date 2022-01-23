import { FiMenu } from "react-icons/fi";
import Logo from "@/components/shared/icons/logo";
import dynamic from "next/dynamic";
import Drawer from "../Drawer";
import { IconButton, useDisclosure } from "@chakra-ui/react";
const HeaderItem = dynamic(() => import("./HeaderItem"));
const ThemeSwitch = dynamic(() => import("../../shared/ToggleTheme"));

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="fixed top-0 w-full clearNav bg-gray-50  dark:bg-black z-50">
                <div className="px-4 -py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        {/* Logo */}
                        <p
                            aria-label="Company"
                            title="Company"
                            className="inline-flex  items-center"
                        >
                            <Logo />
                            <div className="absolute inset-y-0 right-0 flex items-center ">
                                {/* <!-- Mobile menu button--> */}
                                <IconButton
                                    display={{ base: "flex", md: "none" }}
                                    variant="outline"
                                    aria-label="open menu"
                                    icon={<FiMenu />}
                                    onClick={isOpen ? onClose : onOpen}
                                />
                            </div>
                            <span className="-ml-4  text-xl font-bold tracking-wide text-black dark:text-white uppercase">
                                Minvest
                            </span>
                        </p>
                        {/* Nav Items  */}
                        <ul className=" items-center  space-x-8 lg:flex md:flex hidden">
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
                            <div className="-mr-4 md:ml-5">
                                <HeaderItem name={"Home"} link={"/"} />
                            </div>
                            <HeaderItem name={"About"} link={"/about"} />
                            <HeaderItem name={"Pricing"} link={"/pricing"} />
                            <HeaderItem name={"Blog"} link={"/blog"} />
                            <HeaderItem name={"Contact"} link={"/contact"} />
                            <HeaderItem name={"Login"} link={"/auth/login"} />
                            <li>
                                <ThemeSwitch />
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <Drawer isOpen={isOpen} onClose={onClose} />
        </>
    );
};
export default NavBar;
