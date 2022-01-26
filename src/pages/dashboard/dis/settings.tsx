import CardProfile from "@/components/Dashboard/Card/CardProfile";
import { DisGuard } from "@/guard/DisGuard";

function DisAccount() {
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

DisAccount.PageLayout = DisGuard;
export default DisAccount;
