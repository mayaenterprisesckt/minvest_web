import Link from "next/link";
import React from "react";
// components

// import TableDropdown from "components/Dropdowns/TableDropdown.js";

export default function CardTable() {
    return (
        <>
            <div
                className={
                    "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded dark:bg-primaryDark "
                }
            >
                <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                            <h3 className={"font-semibold text-lg "}>Distributers</h3>
                        </div>
                    </div>
                </div>
                <div className="block w-full overflow-x-auto">
                    {/* Projects table */}
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Project
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Budget
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Status
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Users
                                </th>
                                <th
                                    className={
                                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left "
                                    }
                                >
                                    Completion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <Link href="/distributers/[id]" as={`/distributers/${"1"}`}>
                                <tr>
                                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
                                        <img
                                            src="/img/bootstrap.jpg"
                                            className="h-12 w-12 bg-white rounded-full border"
                                            alt="..."
                                        ></img>{" "}
                                        <span className={"ml-3 font-bold "}>
                                            Argon Design System
                                        </span>
                                    </th>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        $2,500 USD
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <i className="fas fa-circle text-orange-500 mr-2"></i>{" "}
                                        pending
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex">
                                            <img
                                                src="/img/team-1-800x800.jpg"
                                                alt="..."
                                                className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                            ></img>
                                            <img
                                                src="/img/team-2-800x800.jpg"
                                                alt="..."
                                                className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                            ></img>
                                            <img
                                                src="/img/team-3-800x800.jpg"
                                                alt="..."
                                                className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                            ></img>
                                            <img
                                                src="/img/team-4-470x470.png"
                                                alt="..."
                                                className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                            ></img>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                        <div className="flex items-center">
                                            <span className="mr-2">60%</span>
                                            <div className="relative w-full">
                                                <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                                                    <div
                                                        style={{ width: "60%" }}
                                                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                                        {/* <TableDropdown /> */}
                                    </td>
                                </tr>
                            </Link>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
