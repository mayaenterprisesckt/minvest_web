import type { NextComponentType, NextPageContext, NextLayoutComponentType } from "next";
import type { AppProps } from "next/app";

declare module "next/app" {
    type ComponentWithPageLayout = AppProps & {
        emotionCache?: EmotionCache;
        Component: AppProps["Component"] & {
            PageLayout?: React.ComponentType;
            AuthLayout?: React.ComponentType;
        };
    };
}
