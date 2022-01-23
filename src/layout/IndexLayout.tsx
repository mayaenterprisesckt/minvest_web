import { ReactNode } from "react";
import Footer from "../components/Index/Footer";
import NavBar from "../components/Index/NavBar";
import Head from "next/head";

interface IndexLayoutProps {
    PageTitle: string;
    PageDesc: string;
    MainHeading?: string;
    MainDesc?: string;
    children: ReactNode;
}

function IndexLayout({ PageTitle, PageDesc, MainHeading, MainDesc, children }: IndexLayoutProps) {
    return (
        <>
            <Head>
                <title>{PageTitle}</title>
                <meta name="description" content={`|${PageDesc}`} />
            </Head>
            <div className="w-screen m-0 p-0 bg-primaryLight dark:bg-primaryDark">
                <NavBar />
                <div className="w-screen m-0 p-0 bg-primaryLight dark:bg-primaryDark">
                    <div className="container px-5 sm:py-[3rem] lg:py-24 mx-auto w-full">
                        <div className="text-center mb-20">
                            <h1 className="text-4xl lg:text-6xl font-bold title-font text-primaryDark  dark:text-primaryLight mb-4 my-32">
                                {MainHeading}
                            </h1>
                            <p className="text-xl lg:text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto  text-primaryDark  dark:text-primaryLight">
                                {MainDesc}
                            </p>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
            <div className="pt-5">
                <Footer />
            </div>
        </>
    );
}

export default IndexLayout;
