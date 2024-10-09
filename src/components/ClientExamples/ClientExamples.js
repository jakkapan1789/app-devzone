// import React from "react";
// import { Box, Container, Typography, Grid, CardMedia } from "@mui/material";

// const ClientExamples = () => {
//   const clients = [
//     {
//       name: "SCG",
//       description: "บริการพัฒนาแบบเว็บไซต์",
//       logo: "images/customers/scg-logo.png",
//     },
//     {
//       name: "Exotic Kingdoms",
//       description: "บริการออกแบบและพัฒนาเว็บไซต์",
//       logo: "images/customers/exotic-kingdoms.png",
//     },
//   ];

//   return (
//     <Box id="clients" sx={{ py: 10, backgroundColor: "#f5f5f5" }}>
//       <Container maxWidth="lg">
//         <Typography variant="h4" gutterBottom align="center">
//           ลูกค้าที่ใช้บริการของเรา
//         </Typography>
//         <Grid
//           container
//           spacing={2}
//           sx={{
//             alignItems: "center",
//             display: "flex",
//             justifyContent: "center",
//           }}
//         >
//           {clients.map((client, index) => {
//             let aosEffect;
//             if (index % 2 === 0) {
//               aosEffect = "fade-right";
//             } else {
//               aosEffect = "fade-left";
//             }

//             return (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <img
//                   data-aos={aosEffect}
//                   data-aos-duration="600"
//                   src={client.logo}
//                   style={{
//                     width: "250px",
//                     cursor: "pointer",
//                     transition: "transform 0.2s, box-shadow 0.2s",
//                     ":hover": {
//                       transform: "scale(1.02)",
//                     },
//                   }}
//                 ></img>
//               </Grid>
//             );
//           })}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default ClientExamples;

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
    <Box
      id="clients"
      sx={{ py: { xs: 5, md: 10 }, backgroundColor: "#fafafa" }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          sx={{
            fontWeight: "bold",
            letterSpacing: "0.05em",
            color: "#333",
            mb: { xs: 3, md: 5 },
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          ลูกค้าที่ใช้บริการของเรา
        </Typography>
        <Grid
          container
          spacing={4}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {clients.map((client, index) => {
            let aosEffect;
            if (index % 2 === 0) {
              aosEffect = "fade-right";
            } else {
              aosEffect = "fade-left";
            }

            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={index}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  data-aos={aosEffect}
                  data-aos-duration="600"
                  sx={{
                    borderRadius: 2,
                    p: 3,
                    textAlign: "center",
                    cursor: "pointer",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    },
                    maxWidth: { xs: "180px", sm: "220px" },
                  }}
                >
                  <CardMedia
                    component="img"
                    image={client.logo}
                    alt={client.name}
                    sx={{
                      width: "100%",
                      margin: "0 auto",
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#555",
                      fontWeight: 500,
                      fontSize: { xs: "1rem", md: "1.2rem" },
                    }}
                  >
                    {client.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#777",
                      fontSize: { xs: "0.8rem", md: "1rem" },
                    }}
                  >
                    {client.description}
                  </Typography>
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
