import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { FaRegLightbulb } from "react-icons/fa";
const IndexLayout = dynamic(() => import("../components/layout/Index/IndexLayout"));
const FeatureCard = dynamic(() => import("../components/card/FeatureCard"));
const Features: NextPage = () => {
    return (
        <IndexLayout
            PageTitle="Minvest"
            PageDesc="Features"
            MainHeading={"Raw Denim Heirloom Man Braid"}
            MainDesc={
                "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug."
            }
        >
            <div>
                <section className="text-primaryDark  dark:text-primaryLight body-font my-32">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="text-center mb-20">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font text-primaryDark  dark:text-primaryLight mb-4">
                                Raw Denim Heirloom Man Braid
                            </h1>
                            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                                Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi
                                pug.
                            </p>
                            <div className="flex mt-6 justify-center">
                                <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
                            </div>
                        </div>
                        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
                            <FeatureCard
                                name={"Minvest"}
                                desc={
                                    "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard."
                                }
                                Icon={FaRegLightbulb}
                                link={""}
                            />
                            <FeatureCard
                                name={"Minvest"}
                                desc={
                                    "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard."
                                }
                                Icon={FaRegLightbulb}
                                link={""}
                            />
                            <FeatureCard
                                name={"Minvest"}
                                desc={
                                    "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy.Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard."
                                }
                                Icon={FaRegLightbulb}
                                link={""}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </IndexLayout>
    );
};

export default Features;
