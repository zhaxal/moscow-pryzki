import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta property="og:title" content="Фестиваль прыжков с шестом" />
        <meta
          property="description"
          content="Ежегодный Всероссийский фестиваль прыжков с шестом - место притяжения лучших шестовиков России"
        />
        <meta property="og:url" content="https://pryzki.moscow.sport/" />
        <meta property="og:type" content="website" />
        {/* <meta property="og:image" content="/images/icelogo.png" />
        <link rel="icon" href="/icelogo.ico" /> */}
        <title>Фестиваль прыжков с шестом</title>
      </Head>
      <Script
        id="metaScript"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://www.schema.org",
            "@type": "SportsEvent",
            name: "Фестиваль прыжков с шестом",
            url: "https://pryzki.moscow.sport/",
            description:
              "Ежегодный Всероссийский фестиваль прыжков с шестом - место притяжения лучших шестовиков России",
            startDate: "2023-03-11T10:00",
            endDate: "2023-03-12T20:30",
            location: {
              "@type": "Place",
              name: "ГЦКЗ «РОССИЯ»",
              sameAs: "https://pryzki.moscow.sport/",
              address: {
                "@type": "PostalAddress",
                streetAddress: "ул. Лужники, 24, стр. 2",
                addressLocality: "г. Москва",
              },
            },
          }),
        }}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
