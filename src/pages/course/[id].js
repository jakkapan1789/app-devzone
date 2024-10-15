import React from "react";
import MainLayout from "@/components/Layout/MainLayout";
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  Divider,
  Button,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SchoolIcon from "@mui/icons-material/School";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import TagIcon from "@mui/icons-material/LocalOffer";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/router";

const courses = [
  {
    id: 1,
    title: "Getting Started as a LINE Developer",
    description:
      "คอร์สนี้ เราจะมาสอนคุณสู่การเป็น LINE Developer, ตั้งแต่เริ่มต้นจนถึงใช้งานจริงใน Production เช่น การ Login ด้วย LINE LIFF รวมถึงส่งข้อความหาไลน์โดยเลือกเป้าหมาย ด้วย Mesaaging API",
    instructor: "จักรพันธ์ ภาคีรัตน์",
    duration: "3 ชั่วโมง",
    level: "ผู้เริ่มต้น",
    certificate: true,
    currentAttendees: 10,
    maxAttendees: 20,
    prerequisites: "พื้นฐานโปรแกรม",
    startDate: "23 ธ.ค. 2567",
    endDate: "23 ธ.ค. 2567",
    weeklyCommitment: "5 ชม",
    learningObjectives: [
      "เข้าใจการใช้งาน LINE",
      "บูรณาการเว็บไซต์ของคุณกับ LINE LIFF ได้",
      "ใช้ LINE Messaging API ได้อย่างเข้าใจ",
    ],
    courseMaterials: "ไฟล์เนื้อหาที่สอน, ตัวอย่างโค้ด",
    assessmentMethods: "Quiz, Project",
    tags: ["Next.js", "LINE LIFF", "LINE Messaging API"],
    agenda: [
      { week: 1, topic: "แนะนำ LINE LIFF และ LINE Messasging API" },
      { week: 2, topic: "เตรียมความพร้อมก่อนเริ่มสอน" },
    ],
  },
  {
    id: 2,
    title: "Migrating OTP to TOTP with Google Authenticator",
    description: "Learn how to implement TOTP with Google Authenticator...",
    instructor: "Jane Smith",
    duration: "2 hours",
    level: "Intermediate",
    certificate: true,
    currentAttendees: 5,
    maxAttendees: 15,
    prerequisites: "Basic Security Knowledge",
    startDate: "2024-10-25",
    endDate: "2024-12-25",
    weeklyCommitment: "3 hours",
    learningObjectives: [
      "Understand OTP and TOTP",
      "Implement TOTP with Google Authenticator",
      "Secure your applications",
    ],
    courseMaterials: "Course slides, Lab exercises",
    assessmentMethods: "Assignment, Project",
    tags: ["TOTP", "Security", "Authenticator"],
    agenda: [
      { week: 1, topic: "Overview of OTP and TOTP" },
      { week: 2, topic: "Google Authenticator Integration" },
    ],
  },
];

const CourseDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the course by ID
  const course = courses.find((course) => course?.id === parseInt(id, 10));

  if (!course) {
    return (
      <MainLayout>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography variant="h5" color="error" textAlign="center">
            Course not found
          </Typography>
        </Container>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={3} sm={3} lg={3}>
            <Card>
              <CardContent>
                <Stack direction={"column"}>
                  <Typography variant="h7" gutterBottom>
                    ลงทะเบียน
                  </Typography>
                  <Divider sx={{ mb: 1 }} />

                  <Box display="flex" alignItems="center">
                    <PersonIcon sx={{ mr: 1 }} />
                    <Typography variant="body2">{course.instructor}</Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <AccessTimeIcon sx={{ mr: 1 }} />
                    <Typography variant="body2">
                      19:00-22:00 น. {course.duration}
                    </Typography>
                  </Box>

                  <Stack direction={"row"} spacing={2}>
                    <Typography variant="caption" gutterBottom>
                      ราคา
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: "line-through" }}
                    >
                      {"1200".toLocaleString()} THB
                    </Typography>
                    <Typography variant="body2" color="error">
                      {"790".toLocaleString()} THB
                    </Typography>
                  </Stack>
                  <Button
                    sx={{ bgcolor: "#0046AD" }}
                    fullWidth
                    size="small"
                    variant="contained"
                  >
                    ลงทะเบียน
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={9} sm={9} mg={3}>
            <Card>
              <CardContent>
                <Typography variant="h4" gutterBottom>
                  {course.title}
                </Typography>
                <Divider sx={{ mb: 1, mt: -1 }} />
                <Typography variant="body1" paragraph>
                  {course.description}
                </Typography>

                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center">
                      <PersonIcon sx={{ mr: 1 }} />
                      <Typography variant="body2">
                        ผู้สอน: {course.instructor}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center">
                      <AccessTimeIcon sx={{ mr: 1 }} />
                      <Typography variant="body2">
                        ระยะเวลา: {course.duration}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Box display="flex" alignItems="center">
                      <SchoolIcon sx={{ mr: 1 }} />
                      <Typography variant="body2">
                        ระดับ: {course.level}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>

                <Box sx={{ mb: 2 }}>
                  <Typography variant="h6" gutterBottom>
                    รายละเอียดคอร์ส
                  </Typography>
                  <Typography variant="body2">
                    <strong>ข้อกำหนดเบื้องต้น:</strong> {course.prerequisites}
                  </Typography>
                  <Typography variant="body2">
                    <strong>วันที่เริ่มต้น:</strong> {course.startDate}
                  </Typography>
                  <Typography variant="body2">
                    <strong>วันที่สิ้นสุด:</strong> {course.endDate}
                  </Typography>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    วัตถุประสงค์การเรียนรู้
                  </Typography>
                  <ul>
                    {course.learningObjectives.map((objective, index) => (
                      <li key={index}>
                        <Typography variant="body2">{objective}</Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="h5" gutterBottom>
                    เอกสารประกอบการสอน
                  </Typography>
                  <Typography variant="body2">
                    {course.courseMaterials}
                  </Typography>
                </Box>

                <Box sx={{ mb: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {course.tags.map((tag, index) => (
                    <Chip key={index} icon={<TagIcon />} label={tag} />
                  ))}
                </Box>
              </CardContent>

              {/* <Box sx={{ px: 4, py: 2, backgroundColor: "grey.100" }}>
                <Typography variant="h5" gutterBottom>
                  Course Agenda
                </Typography>
                <ul>
                  {course.agenda.map((item) => (
                    <li
                      key={item.week}
                      style={{ display: "flex", alignItems: "start" }}
                    >
                      <CalendarMonthIcon sx={{ mr: 1 }} />
                      <Typography variant="body2">
                        <strong>Week {item.week}:</strong> {item.topic}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Box> */}
            </Card>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  );
};

export default CourseDetail;
