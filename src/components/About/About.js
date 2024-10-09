import React from "react";
import { Box, Container, Typography } from "@mui/material";

const About = () => {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg" data-aos="fade-up" data-aos-duration="600">
        <Typography variant="h4" gutterBottom align="center">
          เกี่ยวกับเรา
        </Typography>
        <Typography variant="body1" paragraph>
          เราคือทีมงานที่มุ่งมั่นในการให้บริการด้านการพัฒนาเว็บไซต์และโซลูชันดิจิทัลที่ดีที่สุดสำหรับลูกค้าของเรา
          ด้วยประสบการณ์ที่หลากหลายและความเชี่ยวชาญในด้านเทคโนโลยี
          เรามุ่งหวังที่จะสร้างผลงานที่มีคุณภาพสูงสุด
          เพื่อให้ลูกค้าของเราเติบโตในยุคดิจิทัลนี้
        </Typography>
        <Typography variant="body1" paragraph>
          เป้าหมายของเราคือการนำเสนอประสบการณ์ที่ดีที่สุดและสร้างความพึงพอใจให้กับลูกค้าทุกคน
          เราเชื่อว่าความสำเร็จของเราอยู่ที่ความสำเร็จของลูกค้า
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
