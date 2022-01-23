import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

function UserLayout() {
    return null;
}
export default UserLayout;
export const getServerSideProps: GetServerSideProps = async context => {
    const { req } = context;
    const session = await getSession({ req });
    console.log(session);
    // @ts-ignore
    if (!session) {
        return {
            redirect: {
                destination: "/auth/login",
                permanent: false,
            },
        };
    }
    // @ts-ignore
    if (session && session.token && session.user!.usertype === "USER") {
        console.log("this server redirect ");
        return {
            redirect: {
                // @ts-ignore
                destination: `/dashboard/user`,
                permanent: false,
            },
        };
    }
    // @ts-ignore
    if (session && session.token && session.user!.usertype === "DIS") {
        console.log("this server redirect ");
        return {
            redirect: {
                // @ts-ignore
                destination: `/dashboard/dis`,
                permanent: false,
            },
        };
    }
    // @ts-ignore

    return {
        props: {
            session: session,
        },
    };
};
