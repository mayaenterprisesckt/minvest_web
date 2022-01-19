import dynamic from "next/dynamic";
const IndexLayout = dynamic(() => import("../components/layout/Index/IndexLayout"));
import { Switch } from "@chakra-ui/react";

function Pricing() {
    return (
        <IndexLayout
            PageTitle="Minvest"
            PageDesc="Pricing"
            MainHeading={"Select A plan | We want Money"}
            MainDesc={
                "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug."
            }
        >
            <table className="hidden lg:block w-full text-base text-primaryDark  dark:text-primaryLight my-32  ">
                <thead className="sticky pt-[5.5rem]">
                    <tr>
                        <th className="w-1/5 bg-primaryLight dark:bg-primaryDark text-left font-normal align-top px-4 pt-[5.5rem] pb-6 sticky top-0">
                            <div className="text-[28px] order-2 font-bold  text-primaryDark dark:text-darkAccent mt-4">
                                Bundle & Save
                            </div>
                            <div className="text-sm pb-4">
                                Includes Hulu (plan of your choice), Disney+, and ESPN+.
                            </div>
                            <Switch
                                size="lg"
                                // onChange={darkmode}
                                // isChecked={colorMode === "dark"}
                                className="animate-pulse sticky top-0"
                            />
                        </th>
                        <th className="w-1/5 bg-primaryLight dark:bg-primaryDark text-center border font-normal px-4 pt-[5.5rem] pb-6 sticky top-0">
                            <div className="uppercase tracking-wide font-bold ">Hobby</div>
                            <div className="mt-3">
                                <span className="text-lg">$</span>
                                <span className="font-bold text-4xl ml-1">
                                    {/* {{ !isMonthly ? plans.hobby.price.perYear : plans.hobby.price.perMonth }} */}{" "}
                                    5000
                                </span>
                                <span className="ml-2 text-sm text-primaryDark  dark:text-primaryLight ">
                                    / month
                                </span>
                            </div>
                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="bg-[#DDE0E6]  hover:bg-gray-200 text-primaryDark  dark:text-primaryLight dark:bg-transparent dark:border-2 dark:border-white  rounded-md inline-block uppercase tracking-wide leading-3 hover:opacity-80 w-4/5 px-4 py-3"
                                >
                                    Sign Up
                                </a>
                            </div>
                        </th>
                        <th className="w-1/5 bg-primaryLight dark:bg-primaryDark text-center border font-normal px-4 pt-[5.5rem] pb-6 sticky top-0">
                            <div className="uppercase tracking-wide font-bold ">Growth</div>
                            <div className="mt-3">
                                <span className="text-lg">$</span>
                                <span className="font-bold text-4xl ml-1">
                                    {/* {{ !isMonthly ? plans.growth.price.perYear : plans.growth.price.perMonth }} */}{" "}
                                    7000
                                </span>
                                <span className="ml-2 text-sm text-primaryDark  dark:text-primaryLight ">
                                    / month
                                </span>
                            </div>
                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="bg-[#DDE0E6]  hover:bg-gray-200 text-primaryDark  dark:text-primaryLight dark:bg-transparent dark:border-2 dark:border-white  rounded-md inline-block  uppercase tracking-wide leading-3 hover:opacity-80 w-4/5 px-4 py-3"
                                >
                                    Sign Up
                                </a>
                            </div>
                        </th>
                        <th className="w-1/5 bg-primaryLight dark:bg-primaryDark text-center border font-normal px-4 pt-[5.5rem] pb-6 sticky top-0">
                            <div className="uppercase tracking-wide font-bold ">Business</div>
                            <div className="mt-3">
                                <span className="text-lg">$</span>
                                <span className="font-bold text-4xl ml-1">
                                    {/* {{ !isMonthly ? plans.business.price.perYear : plans.business.price.perMonth }} */}{" "}
                                    999
                                </span>
                                <span className="ml-2 text-sm text-primaryDark  dark:text-primaryLight ">
                                    / month
                                </span>
                            </div>
                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="bg-[#DDE0E6]  hover:bg-gray-200 text-primaryDark  dark:text-primaryLight dark:bg-transparent dark:border-2 dark:border-white  rounded-md inline-block  uppercase tracking-wide leading-3 hover:opacity-80 w-4/5 px-4 py-3"
                                >
                                    Sign Up
                                </a>
                            </div>
                        </th>
                        <th className="w-1/5 bg-primaryLight dark:bg-primaryDark text-center border font-normal px-4 pt-[5.5rem] pb-6 sticky top-0">
                            <div className="uppercase tracking-wide font-bold ">Enterprise</div>
                            <div className="mt-3">
                                <span className="text-lg">$</span>
                                <span className="font-bold text-4xl ml-1">
                                    {/* {{ !isMonthly ? plans.enterprise.price.perYear : plans.enterprise.price.perMonth }} */}{" "}
                                    888
                                </span>
                                <span className="ml-2 text-sm text-primaryDark  dark:text-primaryLight ">
                                    / month
                                </span>
                            </div>
                            <div className="mt-3">
                                <a
                                    href="#"
                                    className="bg-[#DDE0E6]  hover:bg-gray-200 text-primaryDark  dark:text-primaryLight dark:bg-transparent dark:border-2 dark:border-white  rounded-md inline-block  uppercase tracking-wide leading-3 hover:opacity-80 w-4/5 px-4 py-3"
                                >
                                    Sign Up
                                </a>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            Shipping Discount
                        </td>
                        <td className="border  text-center px-4 py-6">$19</td>
                        <td className="border  text-center px-4 py-6">$29</td>
                        <td className="border  text-center px-4 py-6">$39</td>
                        <td className="border  text-center px-4 py-6">$49</td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            Print Shipping Labels
                        </td>
                        <td className="border  text-center px-4 py-6">3</td>
                        <td className="border  text-center px-4 py-6">4</td>
                        <td className="border  text-center px-4 py-6">5</td>
                        <td className="border  text-center px-4 py-6">6</td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            Same Day Delivery
                        </td>
                        <td className="border  text-center px-4 py-6">7</td>
                        <td className="border  text-center px-4 py-6">8</td>
                        <td className="border  text-center px-4 py-6">9</td>
                        <td className="border  text-center px-4 py-6">10</td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            Contributors
                        </td>
                        <td className="border  text-center px-4 py-6">11</td>
                        <td className="border  text-center px-4 py-6">12</td>
                        <td className="border  text-center px-4 py-6">13</td>
                        <td className="border  text-center px-4 py-6">14</td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            API Calls
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <div className="text-lg font-semibold">1,000 calls</div>
                            <div className="text-xs">/ month</div>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <div className="text-lg font-semibold">5,000 calls</div>
                            <div className="text-xs">/ month</div>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <div className="text-lg font-semibold">10,000 calls</div>
                            <div className="text-xs">/ month</div>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <div className="text-lg font-semibold">50,000 calls</div>
                            <div className="text-xs">/ month</div>
                        </td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark border ">
                        <td className="uppercase tracking-wide font-semibold px-4 py-6">
                            Shipping
                        </td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            Free Custom Domain
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            SSL Security
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            Unlimited Bandwidth and Storage
                        </td>
                        <td className="border  text-center px-4 py-6"></td>
                        <td className="border  text-center px-4 py-6"></td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            SEO Features for Site Visibility
                        </td>
                        <td className="border  text-center px-4 py-6"></td>
                        <td className="border  text-center px-4 py-6"></td>
                        <td className="border  text-center px-4 py-6"></td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark border ">
                        <td className="uppercase tracking-wide font-semibold px-4 py-6">
                            Marketing
                        </td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            Shipping Discount
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            Print Shipping Labels
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            Same Day Delivery
                        </td>
                        <td className="border  text-center px-4 py-6"></td>
                        <td className="border  text-center px-4 py-6"></td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                    </tr>
                    <tr className="bg-primaryLight dark:bg-primaryDark">
                        <td className="border  text-left px-4 py-6  text-primaryDark  dark:text-primaryLight ">
                            Contributors
                        </td>
                        <td className="border  text-center px-4 py-6"></td>
                        <td className="border  text-center px-4 py-6"></td>
                        <td className="border  text-center px-4 py-6"></td>
                        <td className="border  text-center px-4 py-6">
                            <svg
                                className="w-6 h-6 inline-block text-blue-500"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61l-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" />
                            </svg>
                        </td>
                    </tr>
                </tbody>
            </table>

            <Mobilepricing />
        </IndexLayout>
    );
}

export default Pricing;

function Mobilepricing() {
    return (
        <div>
            <div className="mobile-table mx-4 md:mx-32 mt-16 lg:hidden">
                <div className="text-center border  text-base">
                    <div className="bg-gray-300 px-4 py-4">
                        <div className="uppercase tracking-wide font-bold ">Hobby</div>
                        <div className="mt-3">
                            <span className="text-lg">$</span>
                            <span className="font-bold text-4xl ml-1">
                                {/* {{ !isMonthly ? plans.hobby.price.perYear : plans.hobby.price.perMonth }} */}{" "}
                                999
                            </span>
                            <span className="ml-2 text-sm text-primaryDark  dark:text-primaryLight ">
                                / month
                            </span>
                        </div>
                    </div>
                    <div className=" dark:bg-primaryDark bg-white flex px-3 py-4">
                        <div className="text-left w-3/5">Shipping Discount</div>
                        <div className="w-2/5">3</div>
                    </div>
                    <div className=" dark:bg-primaryDark bg-white flex px-3 py-4">
                        <div className="text-left w-3/5">Shipping Discount</div>
                        <div className="w-2/5">3</div>
                    </div>
                    <div className=" dark:bg-primaryDark bg-white flex px-3 py-4">
                        <div className="text-left w-3/5">Shipping Discount</div>
                        <div className="w-2/5">3</div>
                    </div>
                    <div className=" dark:bg-primaryDark bg-white flex px-3 py-4">
                        <div className="text-left w-3/5">Shipping Discount</div>
                        <div className="w-2/5">3</div>
                    </div>
                    <div className=" dark:bg-primaryDark bg-white px-3 py-4">
                        <ul className="leading-loose">
                            <li className="flex items-center">
                                <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" />
                                </svg>
                                <span className="ml-2">Free Custom Domain</span>
                            </li>
                            <li className="flex items-center">
                                <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" />
                                </svg>
                                <span className="ml-2">SSL Security</span>
                            </li>
                            <li className="flex items-center">
                                <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" />
                                </svg>
                                <span className="ml-2">Unlimited Bandwidth</span>
                            </li>
                            <li className="flex items-center">
                                <svg fill="currentColor" width="18" height="18" viewBox="0 0 18 18">
                                    <path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4l-7.89 7.89z" />
                                </svg>
                                <span className="ml-2">SEO Features</span>
                            </li>
                        </ul>
                    </div>
                    <div className=" dark:bg-primaryDark bg-white px-3 py-4">
                        <div className="">
                            <a
                                href="#"
                                className="bg-[#DDE0E6]  hover:bg-gray-200 text-primaryDark  dark:text-primaryLight dark:bg-transparent dark:border-2 dark:border-white  rounded-md inline-block w-64 px-4 py-3"
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
