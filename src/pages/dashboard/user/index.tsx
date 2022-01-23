import UserContainer from "@/containers/dashboard/user/index";
import UserLayout from "@/layout/UserLayout";
function UserDashboard() {
    return (
        <>
            <UserContainer />
        </>
    );
}

UserDashboard.AuthLayout = UserLayout;
export default UserDashboard;

// export const getServerSideProps: GetServerSideProps = async context => {
//     const { req } = context;
//     const session = await getSession({ req });
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
//     if (session && session.token && session.user!.usertype !== "USER") {
//         console.log("this server redirect ");
//         return {
//             redirect: {
//                 // @ts-ignore
//                 destination: `/auth/login`,
//                 permanent: false,
//             },
//         };
//     }
//     // @ts-ignore

//     return {
//         props: {
//             session: session,
//         },
//     };
// };
