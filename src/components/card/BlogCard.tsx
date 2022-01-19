function BlogCard() {
    return (
        <div className="group mb-6 cursor-pointer">
            <div
                className="h-full mr-4 shadow-xl 
        lg:group-hover:shadow-lightAccent
        md:group-hover:shadow-lightAccent
                      lg:group-hover:p-4 
                      group-hover:shadow-2xl
                      lg:group-hover:translate-all
                      transform-gpu
                      ease-in-out
                      duration-200
                      dark:bg-primaryDark rounded-lg
                      bg-opacity-75 px-8 pt-16 pb-24
                      overflow-hidden text-center relative"
            >
                <h2 className="tracking-widest text-xs title-font font-medium text-primaryDark  dark:text-primaryLight  mb-1">
                    CATEGORY
                </h2>
                <h1 className="title-font sm:text-2xl text-xl font-medium text-primaryDark  dark:text-primaryLight mb-3">
                    Selvage Poke Waistcoat Godard
                </h1>
                <p className="leading-relaxed mb-3 text-primaryDark  dark:text-primaryLight ">
                    Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                    tousled waistcoat.
                </p>
                <a className="text-purple-500 inline-flex items-center cursor-pointer">
                    Learn More
                    <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                    </svg>
                </a>
                <div className=" text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                    <span className="text-primaryDark  dark:text-primaryLight  mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                        1.2K
                    </span>
                    <span className="text-primaryDark  dark:text-primaryLight  inline-flex items-center leading-none text-sm">
                        <svg
                            className="w-4 h-4 mr-1"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6
                    </span>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
