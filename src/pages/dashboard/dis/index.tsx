import DistributerContainer from "@/containers/dashboard/distributer/Index";
import DisLayout from "@/layout/DisLayout";

function DistributerDashboard() {
    return (
        <>
            <DistributerContainer />
        </>
    );
}
DistributerDashboard.AuthLayout = DisLayout;

export default DistributerDashboard;

// export const getServerSideProps: GetServerSideProps = async context => {
//     const { req } = context;
//     const session = await getSession({ req });
//     if (!session) {
//         return {
//             redirect: {
//                 destination: "/auth/login",
//                 permanent: false,
//             },
//         };
//     }
//     // @ts-ignore
//     if (session && session.token && session.user!.usertype !== "DIS") {
//         console.log("this server redirect ");
//         return {
//             redirect: {
//                 // @ts-ignore
//                 destination: `/auth/login`,
//                 permanent: false,
//             },
//         };
//     }
//     return {
//         props: {
//             session: session,
//         },
//     };
// };
