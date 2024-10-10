import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Head from "next/head";
import getLPTheme from "@/data/getLPTheme";
import ProposalLayout from "@/components/Layout/ProposalLayout";
import Aos from "aos";
import axios from "axios";
import {
  TextField,
  Typography,
  Grid,
  Button,
  Box,
  Container,
  Stack,
  Alert,
} from "@mui/material";

export default function Home() {
  const LPtheme = createTheme(getLPTheme("light"));
  React.useEffect(() => {
    Aos.init();
  }, []);

  const [display, setDisplay] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [qrCode, setQrCode] = React.useState("");
  const [token, setToken] = React.useState("");
  const [verificationResult, setVerificationResult] = React.useState("");

  const registerUser = async () => {
    try {
      const response = await axios.post("/api/otp-auth/register", { username });
      setQrCode(response.data.qrCode);
      setDisplay(!display);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const verifyOtp = async () => {
    try {
      const response = await axios.post("/api/otp-auth/verify", {
        username,
        token,
      });
      setVerificationResult(
        response.data.verified ? "OTP is valid!" : "Invalid OTP!"
      );

      console.log("verificationResult", verificationResult);
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <Head>
        <title>Test App</title>
        <meta name="description" content="Powered by App-DevZone" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProposalLayout>
        <Box id="about" sx={{ py: 10, backgroundColor: "#f5f5f5" }}>
          <Container maxWidth="lg" data-aos="fade-up" data-aos-duration="600">
            <Typography variant="h4" gutterBottom align="center">
              OTP Authentication
            </Typography>

            <Grid container spacing={2} justifyContent={"center"}>
              <Grid item xs={12} md={3}>
                <Stack direction={"column"} spacing={3}>
                  {!display && (
                    <>
                      <TextField
                        autoComplete="off"
                        size="small"
                        label={"Username"}
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <Button
                        variant="contained"
                        onClick={registerUser}
                        sx={{ borderRadius: 15, bgcolor: "#0046AD" }}
                      >
                        Register User
                      </Button>
                    </>
                  )}
                  {display && (
                    <>
                      {qrCode && <img src={qrCode} alt="QR Code" />}

                      <TextField
                        autoComplete="off"
                        size="small"
                        label={"Enter OTP"}
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                      />
                      <Button
                        variant="contained"
                        sx={{ borderRadius: 15, bgcolor: "#0046AD" }}
                        onClick={verifyOtp}
                      >
                        Verify OTP
                      </Button>
                      {verificationResult === "OTP is valid!" &&
                      verificationResult !== "" ? (
                        <Alert severity="success">{verificationResult}</Alert>
                      ) : verificationResult === "Invalid OTP!" &&
                        verificationResult !== "" ? (
                        <Alert severity="error">{verificationResult}</Alert>
                      ) : null}
                    </>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ProposalLayout>
    </ThemeProvider>
  );
}
