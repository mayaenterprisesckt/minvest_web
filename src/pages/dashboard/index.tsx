import DistributerContainer from "@/containers/dashboard/distributer/Index";
import UserContainer from "@/containers/dashboard/user";
import DisLayout from "@/layout/DisLayout";
import UserLayout from "@/layout/UserLayout";
import { useSession } from "next-auth/react";
function UserDashboard() {
    const { data: session } = useSession({
        required: true,
    });
    // @ts-ignore
    if (session?.user.usertype === "DIS") {
        return (
            <DisLayout>
                <DistributerContainer />
            </DisLayout>
        );
    }
    // @ts-ignore
    if (session?.user.usertype === "USER") {
        return (
            <UserLayout>
                <UserContainer />
            </UserLayout>
        );
    }
    return null;
}
export default UserDashboard;
