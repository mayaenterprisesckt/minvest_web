import { Stack, useColorModeValue, Heading, Text, Avatar, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

//
const CustomerCard = () => {
    return (
        <div className="dark:shadow-lightAccent drop-shadow-2xl">
            <TestimonialContent>
                <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
                <TestimonialText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed
                    imperdiet nibh lectus feugiat nunc sem.
                </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
                src={
                    "https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                }
                name={"Jane Cooper"}
                title={"CEO at ABC Corporation"}
            />
        </div>
    );
};

export default CustomerCard;

const TestimonialContent = ({ children }: { children: ReactNode }) => {
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");

    return (
        <Stack
            bg={Bgvalue}
            boxShadow={"lg"}
            p={8}
            rounded={"xl"}
            align={"center"}
            pos={"relative"}
            _after={{
                content: `""`,
                w: 0,
                h: 0,
                borderLeft: "solid transparent",
                borderLeftWidth: 16,
                borderRight: "solid transparent",
                borderRightWidth: 16,
                borderTop: "solid",
                borderTopWidth: 16,
                borderTopColor: { Bgvalue },
                pos: "absolute",
                bottom: "-16px",
                left: "50%",
                transform: "translateX(-50%)",
            }}
        >
            {children}
        </Stack>
    );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
    return (
        <Heading as={"h3"} fontSize={"xl"}>
            {children}
        </Heading>
    );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
    const Colorvalue = useColorModeValue("primaryDark", "#FFFFFF");
    return (
        <Text textAlign={"center"} color={Colorvalue} fontSize={"sm"}>
            {children}
        </Text>
    );
};

const TestimonialAvatar = ({ src, name, title }: { src: string; name: string; title: string }) => {
    const Colorvalue = useColorModeValue("primaryDark", "#FFFFFF");

    return (
        <Flex align={"center"} mt={8} direction={"column"}>
            <Avatar src={src} alt={name} mb={2} />
            <Stack spacing={-1} align={"center"}>
                <Text fontWeight={600}>{name}</Text>
                <Text fontSize={"sm"} color={Colorvalue}>
                    {title}
                </Text>
            </Stack>
        </Flex>
    );
};
