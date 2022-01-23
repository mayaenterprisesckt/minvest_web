import dynamic from "next/dynamic";
import Head from "next/head";
const IndexLayout = dynamic(() => import("../layout/IndexLayout"));
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
            {/* <IndexLayout PageTitle="Minvest" PageDesc="Home"> */}
            <Hero />
            <hr />
            <Featurs />
            <hr />
            <Partners />
            <hr />
            <Review />
            {/* </IndexLayout> */}
        </div>
    );
}

Index.PageLayout = IndexLayout;

export default Index;
