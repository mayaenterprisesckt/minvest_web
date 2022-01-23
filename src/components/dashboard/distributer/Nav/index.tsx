import React from "react";
import {
    Box,
    Flex,
    Text,
    useColorModeValue,
    HStack,
    useDisclosure,
    IconButton,
    InputGroup,
    InputLeftElement,
    Input,
    Avatar,
    Drawer,
    DrawerContent,
    DrawerOverlay,
    Icon,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    VStack,
    useToast,
    CloseButton,
    DrawerHeader,
} from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import { GoSignOut } from "react-icons/go";
import SidebarContent from "@/components/dashboard/distributer/Sidebar/SidebarContent";
import { signOut, useSession } from "next-auth/react";

import { useRouter } from "next/router";
import DarkModeToggleSwitch from "@/components/shared/ToggleThemeSwitch";
function Nav() {
    const sidebar = useDisclosure();
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");
    const ColorValue = useColorModeValue("primaryDark", "#FFFFFF");
    const { data: session } = useSession();
    const router = useRouter();
    const toast = useToast();

    return (
        <>
            <nav className="sticky bg-primaryLight dark:bg-black top-0 left-0 w-full z-10 justify-between p-4 shadow-lg">
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <HStack display="flex" spacing={3} alignItems="center">
                        <Box display={{ base: "inline-flex", md: "none" }}>
                            <IconButton
                                display={{ base: "flex", md: "none" }}
                                ml={-1}
                                aria-label="Open menu"
                                fontSize="20px"
                                color={useColorModeValue("gray.800", "inherit")}
                                variant="ghost"
                                icon={<AiOutlineMenu />}
                                onClick={sidebar.onOpen}
                            />
                            <Drawer
                                isOpen={sidebar.isOpen}
                                onClose={sidebar.onClose}
                                placement="left"
                            >
                                <DrawerHeader>
                                    <div className=" text-lightAccent flex  justify-between">
                                        <h1 className="items-center mt-10">MInvest</h1>

                                        <CloseButton
                                            display={{ base: "flex", md: "none" }}
                                            onClick={sidebar.onClose}
                                        />
                                    </div>
                                </DrawerHeader>
                                <DrawerOverlay />
                                <DrawerContent>
                                    <SidebarContent w="full" borderRight="none" />
                                </DrawerContent>
                            </Drawer>
                        </Box>
                    </HStack>
                    <HStack spacing={3} display={"flex"} alignItems="center" mr={5}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <AiOutlineSearch />
                            </InputLeftElement>
                            <Input type="tel" placeholder="Search..." />
                        </InputGroup>
                        <Menu>
                            <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
                                <HStack>
                                    <Avatar
                                        size={"sm"}
                                        // @ts-ignore
                                        src={session?.user?.avatar ? session?.user.avatar : null}
                                    />
                                    <VStack
                                        display={{ base: "none", md: "flex" }}
                                        alignItems="flex-start"
                                        spacing="1px"
                                        ml="2"
                                    >
                                        {/* @ts-ignore */}
                                        <Text fontSize="sm">{session?.user?.name}</Text>
                                        <Text fontSize="xs" color="gray.600">
                                            {/* @ts-ignore */}
                                            {session?.user?.usertype}
                                        </Text>
                                    </VStack>
                                    <Box display={{ base: "none", md: "flex" }}>
                                        <FiChevronDown />
                                    </Box>
                                </HStack>
                            </MenuButton>
                            <MenuList bg={Bgvalue} color={ColorValue}>
                                <MenuItem
                                    onClick={e => {
                                        e.preventDefault();
                                        router.push("/dashboard/dis/account");
                                    }}
                                >
                                    My Account
                                </MenuItem>
                                <MenuItem>
                                    <DarkModeToggleSwitch />
                                </MenuItem>
                                <MenuDivider />
                                <MenuItem
                                    onClick={e => {
                                        e.preventDefault();
                                        toast({
                                            duration: 2000,
                                            title: "Bye",
                                            status: "success",
                                            position: "top",
                                        });
                                        signOut();
                                    }}
                                >
                                    <Icon mr="4" fontSize="16" as={GoSignOut} />
                                    Signout
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </Flex>
            </nav>
        </>
    );
}
export default Nav;
