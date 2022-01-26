import CardPageVisits from "@/components/Dashboard/Card/CardPageVisits";
import CardSocialTraffic from "@/components/Dashboard/Card/CardSocialTraffic";
import HeaderStats from "../shared/headers/HeaderStats";

function DistributerContainer() {
    return (
        <>
            <HeaderStats />
            <div>
                <div className="flex flex-wrap mt-4">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                        <CardPageVisits />
                    </div>
                    <div className="w-full xl:w-4/12 px-4">
                        <CardSocialTraffic />
                    </div>
                </div>
            </div>
        </>
    );
}

export default DistributerContainer;
