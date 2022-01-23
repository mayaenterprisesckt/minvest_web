import {
    Flex,
    useColorModeValue,
    Text,
    Stack,
    Heading,
    Box,
    Button,
    useToast,
} from "@chakra-ui/react";

import { useRouter } from "next/router";
import { signIn, getCsrfToken, getSession } from "next-auth/react";
import { Form, Formik } from "formik";
import { InputField } from "@/components/from/InputField";
import ForgotPass from "@/containers/auth/ForgotPass";

function LoginPage({ csrfToken }: { session: any; csrfToken: any }) {
    const Bgvalue = useColorModeValue("#FFFFFF", "primaryDark");
    const router = useRouter();
    const toast = useToast();
    // console.log(session)
    // useEffect(() => {
    //     if (session && session.token) {
    //         router.push(`/dashboard/${session.user!.usertype}`);
    //         console.log("this client redirect" + session);
    //     }
    // }, []);

    return (
        <Flex minH={"100vh"} align={"center"} justify={"center"} bg={Bgvalue}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                    <Text fontSize={"lg"} color={"green.500"}>
                        Enjoy All Your
                    </Text>
                </Stack>
                <Box rounded={"lg"} bg={Bgvalue} boxShadow={"lg"} p={8}>
                    <Stack spacing={4}>
                        <Formik
                            initialValues={{ username: "", password: "" }}
                            onSubmit={async (values, { setErrors, setSubmitting }) => {
                                const res = await signIn("credentials", {
                                    redirect: false,
                                    username: values.username,
                                    password: values.password,
                                    callbackUrl: `${window.location.origin}`,
                                });

                                // @ts-ignore
                                if (res?.error) {
                                    setErrors({
                                        // @ts-ignore
                                        // username: res?.error,
                                        username: "Username or password Wrong",
                                    });
                                    // @ts-ignore
                                    if (res?.error === "Incorrect password.") {
                                        setErrors({
                                            // @ts-ignore
                                            // password: res?.error,
                                            password: "Username or password Wrong",
                                        });
                                    }
                                }
                                // @ts-ignore
                                if (res.url) {
                                    toast({
                                        title: "Hurray You are logged in ",
                                        duration: 3000,
                                        isClosable: true,
                                        position: "top",
                                    });
                                    // @ts-ignore
                                    router.push(`${res?.url}/dashboard`);
                                    setSubmitting(false);
                                    // router.push("/");
                                }
                            }}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <input
                                        name="csrfToken"
                                        type="hidden"
                                        defaultValue={csrfToken}
                                    />
                                    <InputField
                                        required
                                        name="username"
                                        placeholder="username"
                                        label="Username"
                                        minLength={3}
                                        type={"text"}
                                        passwordField={false}
                                    />

                                    <InputField
                                        name="password"
                                        placeholder="password"
                                        label="Password"
                                        type={"password"}
                                        passwordField={true}
                                        required
                                        minLength={6}
                                    />

                                    <Stack spacing={10}>
                                        <Stack
                                            direction={{ base: "column", sm: "row" }}
                                            align={"start"}
                                            justify={"space-between"}
                                        >
                                            <div className="text-center pt-12 pb-12">
                                                <ForgotPass title={"Forgot your password?"} />
                                            </div>
                                        </Stack>
                                        <Button
                                            bg={"#040505"}
                                            color={"white"}
                                            _hover={{
                                                bg: "green.500",
                                            }}
                                            type="submit"
                                            isLoading={isSubmitting}
                                        >
                                            Sign in
                                        </Button>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
}

export default LoginPage;

export async function getServerSideProps(context: any) {
    const { req, res } = context;
    const session = await getSession({ req });
    // @ts-ignore
    if (session && res && session.token) {
        console.log("this server redirect ");
        return {
            redirect: {
                // @ts-ignore
                destination: `/dashboard`,
                permanent: false,
            },
        };
    }
    // @ts-ignore
    if (session && res && session.token && session.user!.usertype === "USER") {
        console.log("this server redirect ");
        return {
            redirect: {
                // @ts-ignore
                destination: `/dashboard/user`,
                permanent: false,
            },
        };
    }
    // @ts-ignores
    if (session && res && session.token && session.user!.usertype === "DIS") {
        console.log("this server redirect ");
        return {
            redirect: {
                // @ts-ignore
                destination: `/dashboard/dis`,
                permanent: false,
            },
        };
    }
    return {
        props: {
            // session: session,
            session: null,
            csrfToken: await getCsrfToken(context),
        },
    };
}
