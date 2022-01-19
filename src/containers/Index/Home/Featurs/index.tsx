import Image from "next/image";
import FeatuesImage from "public/assets/images/featurs.webp";
import dynamic from "next/dynamic";
const PortFolioList = dynamic(() => import("./PortFolioList"));
function Featurs() {
    return (
        <div className="container px-5 py-6 lg:py-24 mx-auto">
            <div className="text-center mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font text-primaryDark  dark:text-primaryLight mb-4">
                    A complete portfolio management solution
                </h1>
                <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                    With MProfit, you can seamlessly manage investments in Stocks, F&O, Mutual
                    Funds, Bonds, Fixed Deposits, NPS, AIF & various other assets. MProfit is
                    available on web, desktop and Android & iOS mobile devices.
                </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
                </div>
            </div>
            {/*  */}
            <PortFolio />
        </div>
    );
}

export default Featurs;

const PortFolio = () => {
    return (
        <>
            <section className="px-4  mx-auto max-w-7xl">
                <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-32 gap-x-10 lg:gap-x-24">
                    <div className="dark:shadow-2xl dark:shadow-darkAccent">
                        <Image
                            alt="feature"
                            className="object-cover object-center h-full w-full "
                            src={FeatuesImage}
                        />
                    </div>
                    <div className="flex flex-col flex-grow space-y-5">
                        <PortFolioList title="Email APIs, SMTP Relay, and Webhooks" />
                        <PortFolioList title="Suppression Management" />
                        <PortFolioList title="Email Tracking and Analytics" />
                        <PortFolioList title="99.99% Guaranteed Uptime SLA" />
                        <PortFolioList title="5 Days of Log Retention" />
                        <PortFolioList title="Limited 24/7 Ticket Support" />
                        <PortFolioList title="1 Dedicated IP (Foundation 100k and up)" />
                        <PortFolioList title="1,000 Email Address Validations" />
                        <PortFolioList title="Host events together or get your event sponsored" />
                    </div>
                </div>
            </section>
        </>
    );
};
