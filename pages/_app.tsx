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
        <meta
          name="description"
          content="Ежегодный Всероссийский фестиваль прыжков с шестом - место притяжения лучших шестовиков России"
        />
        <meta
          property="og:title"
          content="Всероссийский фестиваль прыжков с шестом"
        />
        <meta
          property="og:description"
          content="Московский спорт представляет «Всероссийский фестиваль прыжков с шестом» 8 и 9 марта 2025 г."
        />
        <meta property="og:url" content="https://pryzki.sport.mos.ru" />
        <meta property="og:type" content="website" />
        <title>Всероссийский фестиваль прыжков с шестом</title>
      </Head>
      <Script
        id="metaScript"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://www.schema.org",
            "@type": "SportsEvent",
            name: "Всероссийский фестиваль прыжков с шестом",
            url: "https://pryzki.moscow.sport/",
            description:
              "Ежегодный Всероссийский фестиваль прыжков с шестом - место притяжения лучших шестовиков России",
            startDate: "2025-03-08T10:00",
            endDate: "2025-03-09T20:30",
            location: {
              "@type": "Place",
              name: "Легкоатлетический манеж НИУ МГСУ",
              sameAs: "https://pryzki.moscow.sport/",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ярославское шоссе, 26 корпус 4",
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
