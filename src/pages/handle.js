import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Head from "next/head";
import getLPTheme from "@/data/getLPTheme";
import ProposalLayout from "@/components/Layout/ProposalLayout";
import Aos from "aos";
import { Typography, Grid, Box, Container } from "@mui/material";
import TableUser from "@/components/TableUser/TableUser";
import UserManagement from "@/components/UserManagement/UserManagement";
export default function Home() {
  const LPtheme = createTheme(getLPTheme("light"));
  React.useEffect(() => {
    Aos.init();
  }, []);

  const users = [
    {
      name: "Jakkapan Pakeerat",
      email: "jakkapan.pakeerat@hotmail.com",
      role: "admin",
      status: true,
    },
  ];

  return (
    <ThemeProvider theme={LPtheme}>
      <Head>
        <title>Admin App</title>
        <meta name="description" content="Powered by App-DevZone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProposalLayout>
        <UserManagement />
      </ProposalLayout>
    </ThemeProvider>
  );
}
