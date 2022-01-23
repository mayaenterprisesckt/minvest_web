import Nav from "@/components/dashboard/user/Nav";
import SidebarContent from "@/components/dashboard/user/Sidebar/SidebarContent";
import Footer from "@/components/dashboard/Footer/Footer";
import { Box, useColorModeValue } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { useSession } from "next-auth/react";

function UserLayout({ children }: { children: ReactNode }) {
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");

    const { status } = useSession();
    // if (!session && status !== "unauthenticated") {
    //     const router = useRouter();
    //     useEffect(() => {
    //         router.push("/auth/login");
    //     }, [router]);
    // }

    // if (typeof window !== "undefined" && status === "loading") return null;
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
UserLayout.AuthLayout = UserLayout;
export default UserLayout;

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
//     if (session && session.token && session.user!.usertype === "USER") {
//         console.log("this server redirect ");
//         return {
//             redirect: {
//                 // @ts-ignore
//                 destination: `/dashboard/user`,
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
