import type { NextPage } from "next";
import dynamic from "next/dynamic";
const IndexLayout = dynamic(() => import("../layout/IndexLayout"));

const About: NextPage = () => {
    return (
        <IndexLayout
            PageTitle="Minvest"
            PageDesc="About"
            MainHeading={"Raw Denim Heirloom Man Braid"}
            MainDesc={
                "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug."
            }
        >
            Hmm ABout
        </IndexLayout>
    );
};

export default About;
