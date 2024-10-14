import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Container,
  Divider,
  Stack,
} from "@mui/material";

// Sample course data with images
const courses = [
  {
    id: 1,
    title: "Getting Started as a LINE Developer",
    date: "เร็วๆนี้",
    details:
      "คอร์สนี้ เราจะมาสอนคุณสู่การเป็น LINE Developer, ตั้งแต่เริ่มต้นจนถึงใช้งานจริงใน Production เช่น การ Login ด้วย LINE LIFF รวมถึงส่งข้อความหาไลน์โดยเลือกเป้าหมาย ด้วย Mesaaging API",
    image: "https://via.placeholder.com/400x200?text=LINE+Developer", // Placeholder image
  },
  {
    id: 2,
    title: "Migrating OTP to TOTP with Google Authenticator",
    date: "เร็วๆนี้",
    details:
      "คอร์สนี้ เราจะมาสอนคุณใช้ TOTP ด้วย Google Authenticator ตั้งแต่เริ่มต้นจนถึงใช้งานจริงใน Production เพื่อความปลอดภัยให้ Application ของคุณ และยังเป็นอีกทางเลือกสำหรับ Cost saving อีกด้วย",
    image: "https://via.placeholder.com/400x200?text=Google+Authenticator", // Placeholder image
  },
];

const CourseList = () => {
  return (
    <Box id="course" sx={{ py: 10, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg" data-aos="fade-up" data-aos-duration="1000">
        <Typography align="center" variant="h4" gutterBottom>
          หลักสูตรอบรม
        </Typography>
        <Grid container spacing={2}>
          {courses.map((course) => (
            <Grid item xs={12} sm={6} md={6} key={course.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={course.image}
                  alt={course.title}
                  sx={{ objectFit: "cover" }} // Ensures the image covers the area
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h5" component="div">
                    {course.title}
                  </Typography>
                  <Typography color="text.secondary">
                    วันที่: {course.date}
                  </Typography>
                  <Typography variant="body2">
                    รายละเอียด: {course.details}
                  </Typography>
                  <Divider sx={{ mt: 2, mb: 1 }} />
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography variant="body2">ออนไลน์</Typography>
                    <Typography variant="body2">1290 THB</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CourseList;
