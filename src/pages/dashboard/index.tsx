/* eslint-disable @next/next/link-passhref */
import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";

function index() {
    return (
        <div className="w-screen h-screen m-0 p-0 bg-primaryLight dark:bg-primaryDark">
            this is dashBoard
            <Box textAlign="center" marginTop={4}>
                <Text>It&apos;s Okay!</Text>
                <Link href="/">
                    <button className="bg-[#DDE0E6]  hover:bg-gray-200 text-gray-800 dark:bg-transparent dark:text-white px-8 py-5 text-md font-semibold border-0 dark:border-2 dark:border-white  rounded-md cursor-pointer uppercase tracking-wide leading-3 hover:opacity-80">
                        Go back to Home
                    </button>
                </Link>
            </Box>
        </div>
    );
}

export default index;
