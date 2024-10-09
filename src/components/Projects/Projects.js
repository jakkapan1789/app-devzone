import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Auction Platform",
    description:
      "A comprehensive full-stack auction solution designed for seamless user experience. It includes robust user authentication, efficient pet management systems, and a dynamic bidding interface, enabling users to participate in auctions effortlessly.",
    technologies: ["React", "Next.js", "PostgreSQL", "C#"],
    link: "https://exotickingdoms.com/",
    image: "/images/customers/exotic-kingdoms.png",
    delay: "300",
  },

  {
    title: "SCG Communication Platform",
    description:
      "A custom-designed portfolio website that effectively showcases the client's work and achievements. This platform features an intuitive layout, responsive design, and interactive elements that highlight the client's projects and services.",
    technologies: ["React", "Next.js", "PostgreSQL"],
    link: "",
    image: "/images/customers/scg-logo.png",
    delay: "900",
  },

  {
    title: "'applove' Frontend Package",
    description:
      "An integrated TypeScript project package that provides a dialog or notification messaging system. This package is designed with flexibility in mind, allowing developers to customize its use cases for various applications, enhancing user interaction.",
    technologies: ["TypeScript"],
    link: "https://www.npmjs.com/package/applove",
    image: "https://via.placeholder.com/300x200?text=Frontend+Package",
    delay: "900",
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography
          data-aos="fade-up"
          data-aos-duration="600"
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6 }}
        >
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => {
            let aosEffect;
            if (index % 3 === 0) {
              aosEffect = "fade-right";
            } else if (index % 3 === 1) {
              aosEffect = "fade-down";
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
                data-aos={aosEffect}
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                <Card
                  sx={{
                    cursor: "pointer",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="div"
                      sx={{ fontWeight: "bold", mb: 2 }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      sx={{
                        mb: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      {project.technologies.map((tech, i) => (
                        <Chip
                          key={i}
                          label={tech}
                          variant="outlined"
                          sx={{ marginRight: 1, marginBottom: 1 }}
                        />
                      ))}
                    </Box>
                    <Button
                      variant="contained"
                      //   color="primary"
                      href={project.link}
                      target="_blank" // This will open the link in a new tab
                      rel="noopener noreferrer" // Recommended for security reasons
                      sx={{
                        textTransform: "none",
                        borderRadius: 50,
                        bgcolor: "#0046AD",
                      }}
                    >
                      View Project
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
