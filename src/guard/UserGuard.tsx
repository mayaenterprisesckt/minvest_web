import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import UserLayout from "@/layout/UserLayout";
import { Loader } from "@/components/shared/Loader";
import { Center } from "@chakra-ui/react";

export function UserGuard({ children }: { children: ReactNode }) {
    const router = useRouter();
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/auth/login");
        },
    });
    if (typeof window === "undefined") {
        return (
            <>
                <Loader />
            </>
        );
    }
    if (status === "loading") {
        return (
            <>
                <Loader />
            </>
        );
    }
    // @ts-ignore
    if (session?.user.usertype !== "USER") {
        return (
            <>
                <Center w="100vw" h="100vh">
                    400 | NOT FOUND
                </Center>
            </>
        );
    }
    return <UserLayout>{children}</UserLayout>;
}
