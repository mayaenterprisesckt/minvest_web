import dynamic from "next/dynamic";
import Head from "next/head";
import IndexLayout from "@/layout/IndexLayout";
const Hero = dynamic(() => import("../containers/Index/Home/Hero"));
const Featurs = dynamic(() => import("../containers/Index/Home/Featurs"));
const Partners = dynamic(() => import("../containers/Index/Home/Partners"));
const Review = dynamic(() => import("../containers/Index/Home/Review"));

function Index() {
    return (
        <div>
            <Head>
                <title>Minvest</title>
                <meta name="description" content="All your investments in one single place" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Hero />
            <hr />
            <Featurs />
            <hr />
            <Partners />
            <hr />
            <Review />
        </div>
    );
}

Index.PageLayout = IndexLayout;

export default Index;
