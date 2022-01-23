import Footer from "@/components/dashboard/Footer/Footer";
import SidebarContent from "@/components/dashboard/user/Sidebar/SidebarContent";
import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import Nav from "@/components/dashboard/distributer/Nav";
import { useSession } from "next-auth/react";

function DisLayout({ children }: { children: ReactNode }) {
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");
    const { data: session } = useSession();
    if (!session) {
        return (
            <>
                <div>LOgin</div>
            </>
        );
    }
    if (typeof window !== "undefined" && status === "loading") {
        return (
            <>
                <div>Loading</div>
            </>
        );
    }
    return (
        <>
            <Nav></Nav>
            <Box as="section" bg={Bgvalue} minH="100vh" pt={10}>
                <SidebarContent display={{ base: "none", md: "unset" }} />
                <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
                    <Box as="main" p="4" mt={10}>
                        {children}
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>
    );
}
export default DisLayout;

// export const getServerSideProps: GetServerSideProps = async context => {
//     const { req } = context;
//     const session = await getSession({ req });
//     console.log(session);
//     // @ts-ignore
//     if (!session) {
//         return {
//             redirect: {
//                 destination: "/auth/login",
//                 permanent: false,
//             },
//         };
//     }
//     // @ts-ignore
//     if (session && session.token && session.user!.usertype === "DIS") {
//         console.log("this server redirect ");
//         return {
//             redirect: {
//                 // @ts-ignore
//                 destination: `/dashboard/dis`,
//                 permanent: false,
//             },
//         };
//     }
//     // @ts-ignore
//     // if (session && session.token && session.user!.usertype === "DIS") {
//     //     console.log("this server redirect ");
//     //     return {
//     //         redirect: {
//     //             // @ts-ignore
//     //             destination: `/dashboard/dis`,
//     //             permanent: false,
//     //         },
//     //     };
//     // }
//     // @ts-ignore

//     return {
//         props: {
//             session: session,
//         },
//     };
// };
