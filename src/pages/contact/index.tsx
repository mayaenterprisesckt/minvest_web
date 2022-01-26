import dynamic from "next/dynamic";
const IndexLayout = dynamic(() => import("../../layout/IndexLayout"));
const ContactContainer = dynamic(() => import("../../containers/Index/Home/Contact"));

import type { NextPage } from "next";

const Contact: NextPage = () => {
    return (
        <IndexLayout
            PageTitle="Minvest"
            PageDesc="Contact"
            MainHeading={"Raw Denim Heirloom Man Braid"}
            MainDesc={
                "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug."
            }
        >
            <ContactContainer />
        </IndexLayout>
    );
};

export default Contact;
