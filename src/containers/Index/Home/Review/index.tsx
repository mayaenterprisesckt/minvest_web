import HuluButton from "@/components/button/HuluButton";
import { useKeenSlider } from "keen-slider/react";
import dynamic from "next/dynamic";
// import Link from "next/link";
const CustomerCard = dynamic(() => import("./CustomerCard"));

function Review() {
    const animation = { duration: 50000, easing: (t: number) => t };
    const [ref] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        breakpoints: {
            "(min-width: 400px)": {
                slides: { perView: 1, spacing: 5 },
            },
            "(min-width: 1000px)": {
                slides: { perView: 2, spacing: 10 },
            },
        },
        renderMode: "performance",
        // drag: false,
        loop: true,
        created(s) {
            s.moveToIdx(5, true, animation);
        },
        updated(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
        animationEnded(s) {
            s.moveToIdx(s.track.details.abs + 5, true, animation);
        },
    });
    return (
        <>
            <div className="container px-5  mx-auto pt-10">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-primaryDark  dark:text-primaryLight mb-4">
                        Our Clients Speak
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                        We have been working with clients around the world
                    </p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
                    </div>
                </div>
                <section className="px-4  mx-auto max-w-7xl">
                    <div className="flex flex-col flex-grow space-y-5">
                        <div className="navigation-wrapper">
                            <div ref={ref} className="keen-slider">
                                <div className="keen-slider__slide   ">
                                    <CustomerCard />
                                </div>
                                <div className="keen-slider__slide   ">
                                    <CustomerCard />
                                </div>
                                <div className="keen-slider__slide   ">
                                    <CustomerCard />
                                </div>
                            </div>
                            <>
                                {/* {loaded && instanceRef.current && (
                                    <>
                                        <Arrow
                                            top
                                            onClick={(e: any) =>
                                                e.stopPropagation() || instanceRef.current?.prev()
                                            }
                                            disabled={currentSlide === 0}
                                        />
                                        <Arrow
                                            onClick={(e: any) =>
                                                e.stopPropagation() || instanceRef.current?.next()
                                            }
                                            disabled={
                                                currentSlide ===
                                                instanceRef.current.track.details.slides.length - 1
                                            }
                                        />
                                    </>
                                )} */}
                            </>
                        </div>
                    </div>
                    {/* </div> */}
                </section>
            </div>
            <div className="text-center mt-4 pt-2 pb-20">
                <HuluButton name="See more reviews" path="/review" />
            </div>
        </>
    );
}

export default Review;
