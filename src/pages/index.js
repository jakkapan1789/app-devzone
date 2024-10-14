import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Head from "next/head";
import getLPTheme from "@/data/getLPTheme";
import MainLayout from "@/components/Layout/MainLayout";
import ProposalLayout from "@/components/Layout/ProposalLayout";
import Aos from "aos";

import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import Packages from "@/components/Packages/Packages";
import Services from "@/components/Services/Services";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import CourseList from "@/components/CourseList/CourseList";
import ClientExamples from "@/components/ClientExamples/ClientExamples";

export default function Home() {
  const LPtheme = createTheme(getLPTheme("light"));
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <ThemeProvider theme={LPtheme}>
      <Head>
        <title>App-DevZone</title>
        <meta name="description" content="Powered by App-DevZone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <Hero />
        <Services />
        <Packages />
        <CourseList />
        <About />
        {/* <ClientExamples /> */}
        <Contact />
      </MainLayout>
    </ThemeProvider>
  );
}
