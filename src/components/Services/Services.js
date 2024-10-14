import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/system";

const ServiceBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  border: "1px solid #ccc",
  borderRadius: "8px",
  textAlign: "center",
  cursor: "pointer",
  height: "70px",
  transition: "transform 0.2s, box-shadow 0.2s",
  "&:hover": {
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
    transform: "scale(1.01)",
  },
  "&:active": {
    transform: "scale(0.95)",
    transition: "transform 0.1s",
  },
}));

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description: "ออกแบบเว็บไซต์ที่สวยงามและใช้งานง่าย",
    },
    {
      title: "Web Development",
      description: "พัฒนาเว็บไซต์ที่มีฟังก์ชันการทำงานครบถ้วน",
    },
    {
      title: "SEO Services",
      description:
        "บริการปรับแต่งเว็บไซต์เพื่อให้มีอันดับที่สูงขึ้นในผลการค้นหา",
    },
    {
      title: "Content Management Systems (CMS)",
      description: "ระบบจัดการเนื้อหาที่ใช้งานง่าย",
    },
    {
      title: "Social Media Integration",
      description: "เชื่อมต่อเว็บไซต์กับโซเชียลมีเดียต่าง ๆ",
    },
    {
      title: "Website Maintenance",
      description: "บริการดูแลและบำรุงรักษาเว็บไซต์",
    },
    {
      title: "Mobile Optimization",
      description: "ปรับเว็บไซต์ให้เหมาะสมกับการใช้งานบนมือถือ",
    },
    {
      title: "Analytics and Reporting",
      description: "ให้บริการวิเคราะห์ข้อมูลและรายงานผลการทำงานของเว็บไซต์",
    },
    {
      title: "Custom Development",
      description: "พัฒนาฟีเจอร์เฉพาะตามความต้องการของลูกค้า",
    },
    {
      title: "Google Authenticator Integration",
      description:
        "ให้บริการผสานระบบ Google Authenticator เพื่อเพิ่มความปลอดภัยด้วยการยืนยันตัวตนสองชั้น (2FA)",
    },
    {
      title: "LINE LIFF Integration",
      description:
        "เชื่อมต่อเว็บไซต์หรือแอปพลิเคชันของคุณกับ LINE ผ่าน LINE LIFF เพื่อการใช้งานที่ง่ายและรวดเร็ว",
    },
    {
      title: "Recovery by Email",
      description:
        "บริการการกู้คืนบัญชีผู้ใช้งานผ่านอีเมล เพื่อความปลอดภัยและความสะดวกสบายในการยืนยันตัวตน",
    },
  ];

  return (
    <Box id="services" sx={{ py: 10, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          gutterBottom
          align="center"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          บริการของเรา
        </Typography>
        <Grid container spacing={2}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <ServiceBox data-aos="flip-up" data-aos-duration="600">
                <Typography variant="h6" gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2">{service.description}</Typography>
              </ServiceBox>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
