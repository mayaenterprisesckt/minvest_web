import React from "react";
import { chakra, Box, Stack, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Image from "next/image";
const HuluButton = dynamic(() => import("../../../../components/button/HuluButton"));
const Hero = () => {
    return (
        <Box mx="auto" my="32">
            <Box
                w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
                mx="auto"
                textAlign={{ base: "left", md: "center" }}
            >
                <chakra.h1
                    mb={6}
                    fontSize={{ base: "4xl", md: "6xl" }}
                    fontWeight="bold"
                    lineHeight="none"
                    letterSpacing={{ base: "normal", md: "tight" }}
                >
                    All your
                    <Text
                        display={{ base: "block", lg: "inline" }}
                        w="full"
                        bgClip="text"
                        bgGradient="linear(to-r, green.400,#00C480)"
                        fontWeight="extrabold"
                    >
                        Investments
                    </Text>
                    in one single place.
                </chakra.h1>
                <chakra.p px={{ base: 0, lg: 24 }} mb={6} fontSize={{ base: "lg", md: "xl" }}>
                    Minvest is a finance managing software where you can allow your users to view
                    finantial report , publish roadmap, and complete your customer feedback loop.
                </chakra.p>
                <Stack
                    direction={{ base: "column", sm: "row" }}
                    mb={{ base: 4, md: 8 }}
                    spacing={2}
                    justifyContent={{ sm: "left", md: "center" }}
                >
                    <HuluButton name="Book a Demo" path="/contact" />
                </Stack>
            </Box>
            <Box w={{ base: "full", md: 10 / 12 }} mx="auto" mt={20} textAlign="center">
                <div className="shadow-2xl rounded-md shadow-lightAccent">
                    <Image
                        width={1920}
                        height={1080}
                        layout="responsive"
                        className="rounded-lg shadow-2xl"
                        src="/assets/images/minvest.webp"
                        alt="Mivest  dashboards software screenshot"
                    />
                </div>
            </Box>
        </Box>
    );
};

export default Hero;
