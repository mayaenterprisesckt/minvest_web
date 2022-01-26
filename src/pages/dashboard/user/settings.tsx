import CardProfile from "@/components/Dashboard/Card/CardProfile";
import { UserGuard } from "@/guard/UserGuard";

function UserAccount() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12 px-4">{/* <CardSettings /> */}</div>
                {/* <div className="w-full lg:w-4/12 px-4"> */}
                <CardProfile />
                {/* </div> */}
            </div>
        </>
    );
}
UserAccount.PageLayout = UserGuard;
export default UserAccount;
