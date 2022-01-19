import IndexLayout from "@/components/layout/Index/IndexLayout";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
const BlogCard = dynamic(() => import("../../components/card/BlogCard"));
const Blogx: NextPage = () => {
    return (
        <IndexLayout
            PageTitle="Minvest"
            PageDesc="Blog"
            MainHeading={"Blog | Read Our BLOG "}
            MainDesc={
                "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug."
            }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:flex-col  mb-8">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </IndexLayout>
    );
};

export default Blogx;
