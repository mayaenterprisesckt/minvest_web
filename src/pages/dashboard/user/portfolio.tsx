import { UserGuard } from "@/guard/UserGuard";

function UserAccount() {
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-8/12 px-4">{/* <CardSettings /> */}</div>
                TEll me what to show HEre
            </div>
        </>
    );
}
UserAccount.PageLayout = UserGuard;
export default UserAccount;
