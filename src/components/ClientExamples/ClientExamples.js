import React from "react";
import { Box, Container, Typography, Grid, CardMedia } from "@mui/material";

const ClientExamples = () => {
  const clients = [
    {
      name: "SCG",
      description: "บริการพัฒนาแบบเว็บไซต์",
      logo: "images/customers/scg-logo.png",
    },
    {
      name: "Exotic Kingdoms",
      description: "บริการออกแบบและพัฒนาเว็บไซต์",
      logo: "images/customers/exotic-kingdoms.png",
    },
  ];

  return (
    <Box id="clients" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography variant="h4" gutterBottom align="center">
          ตัวอย่างลูกค้าที่ใช้บริการของเรา
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {clients.map((client, index) => {
            let aosEffect;
            if (index % 2 === 0) {
              aosEffect = "fade-right";
            } else {
              aosEffect = "fade-left";
            }
            return (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box
                  data-aos={aosEffect}
                  data-aos-duration="600"
                  sx={{
                    p: 3,
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "transform 0.2s, box-shadow 0.2s",
                    ":hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <CardMedia
                      component="img"
                      src={client.logo}
                      alt={client.name}
                      // onError={(e) => {
                      //   e.target.onerror = null; // Prevents looping
                      //   e.target.src = "/path/to/default-image.png"; // Fallback image
                      // }}
                      sx={{
                        height: 200, // Set a fixed height or adjust as needed
                        objectFit: "contain", // Ensures the image fits within the CardMedia
                      }}
                    />
                  </Box>

                  <Typography variant="h6" gutterBottom>
                    {client.name}
                  </Typography>
                  <Typography variant="body2">{client.description}</Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default ClientExamples;
