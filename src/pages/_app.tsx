import Head from "next/head";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import "@fontsource/lexend/latin.css";
import "keen-slider/keen-slider.min.css";
import { ThemeProvider } from "next-themes";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import customTheme from "../styles/customTheme";
import { ChakraProvider } from "@chakra-ui/react";
import defaultSEOConfig from "../../next-seo.config";
import createEmotionCache from "../styles/createEmotionCache";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Router } from "next/router";
const clientSideEmotionCache = createEmotionCache();

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
    NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
    NProgress.done();
});

Router.events.on("routeChangeError", () => {
    NProgress.done();
});

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

const MyApp = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) => {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider attribute="class">
                <ChakraProvider theme={customTheme}>
                    <Head>
                        <meta
                            name="viewport"
                            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
                        />
                    </Head>
                    <DefaultSeo {...defaultSEOConfig} />
                    <Component {...pageProps} />
                </ChakraProvider>
            </ThemeProvider>
        </CacheProvider>
    );
};

MyApp.defaultProps = {
    emotionCache: clientSideEmotionCache,
};

export default MyApp;
