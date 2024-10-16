// import React, { useEffect, useRef, useState } from "react";
// import {
//   Box,
//   Container,
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   Button,
// } from "@mui/material";

// const Packages = () => {
//   // const packages = [
//   //   {
//   //     title: "Basic Package",
//   //     description: "A simple website with essential features.",
//   //     price: "$1,000 - $2,000",
//   //     features: [
//   //       "Up to 5 pages",
//   //       "Responsive design",
//   //       "Basic SEO",
//   //       "Intermediate backend system with user management",
//   //       "Basic backend system for content management",
//   //     ],
//   //   },
//   //   {
//   //     title: "Standard Package",
//   //     description: "A complete website with additional features.",
//   //     price: "$2,000 - $4,000",
//   //     features: [
//   //       "Up to 10 pages",
//   //       "Responsive design",
//   //       "SEO optimization",
//   //       "Contact form",
//   //       "Intermediate backend system with user management",
//   //       "Basic backend system for content management",
//   //     ],
//   //   },
//   //   {
//   //     title: "Premium Package",
//   //     description: "A fully customized website with advanced features.",
//   //     price: "$4,000 and up",
//   //     features: [
//   //       "Unlimited pages",
//   //       "Responsive design",
//   //       "SEO optimization",
//   //       "Intermediate backend system with user management",
//   //       "Advanced backend system with analytics and reporting",
//   //     ],
//   //   },
//   // ];

//   const packages = [
//     {
//       title: "แพ็คเกจพื้นฐาน",
//       description: "เว็บไซต์ที่มีฟีเจอร์พื้นฐานที่จำเป็น.",
//       price: "35,000 - 70,000 บาท",
//       features: [
//         "สูงสุด 5 หน้า",
//         "การออกแบบที่ตอบสนอง",
//         "SEO พื้นฐาน",
//         "ระบบแบ็คเอนด์ระดับกลางที่มีการจัดการผู้ใช้",
//         "ระบบแบ็คเอนด์พื้นฐานสำหรับการจัดการเนื้อหา",
//       ],
//     },
//     {
//       title: "แพ็คเกจมาตรฐาน",
//       description: "เว็บไซต์ที่สมบูรณ์พร้อมฟีเจอร์เพิ่มเติม.",
//       price: "70,000 - 140,000 บาท",
//       features: [
//         "สูงสุด 10 หน้า",
//         "การออกแบบที่ตอบสนอง",
//         "การปรับแต่ง SEO",
//         "แบบฟอร์มติดต่อ",
//         "ระบบแบ็คเอนด์ระดับกลางที่มีการจัดการผู้ใช้",
//         "ระบบแบ็คเอนด์พื้นฐานสำหรับการจัดการเนื้อหา",
//       ],
//     },
//     {
//       title: "แพ็คเกจพรีเมียม",
//       description: "เว็บไซต์ที่ปรับแต่งได้เต็มรูปแบบพร้อมฟีเจอร์ขั้นสูง.",
//       price: "140,000 บาทขึ้นไป",
//       features: [
//         "จำนวนหน้าที่ไม่จำกัด",
//         "การออกแบบที่ตอบสนอง",
//         "การปรับแต่ง SEO",
//         "ระบบแบ็คเอนด์ระดับกลางที่มีการจัดการผู้ใช้",
//         "ระบบแบ็คเอนด์ขั้นสูงที่มีการวิเคราะห์และรายงาน",
//       ],
//     },
//   ];

//   return (
//     <Box id="package" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
//       <Container maxWidth="lg">
//         <Typography
//           data-aos="fade-up"
//           data-aos-duration="600"
//           variant="h3"
//           component="h2"
//           align="center"
//           gutterBottom
//           sx={{ fontWeight: "bold", mb: 6 }}
//         >
//           แพ็คเกจ
//         </Typography>
//         <Grid
//           data-aos="fade-up"
//           data-aos-duration="600"
//           container
//           spacing={4}
//           justifyContent="center"
//           alignItems="stretch"
//           sx={{ backgroundColor: "white", p: 4, borderRadius: 8 }}
//         >
//           {packages.map((pkg, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <Card
//                 variant="outlined"
//                 sx={{
//                   height: "450px",
//                   cursor: "pointer",
//                   position: "relative",
//                 }}
//               >
//                 <CardContent
//                   sx={{
//                     display: "flex",
//                     flexDirection: "column",
//                     height: "100%",
//                     alignContent: "center",
//                   }}
//                 >
//                   <Typography variant="h5" component="div" gutterBottom>
//                     {pkg.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {pkg.description}
//                   </Typography>
//                   <Typography variant="h6" sx={{ mt: 2 }}>
//                     {pkg.price}
//                   </Typography>
//                   <Typography variant="body2" sx={{ mt: 1 }}>
//                     Features:
//                   </Typography>
//                   <ul>
//                     {pkg.features.map((feature, idx) => (
//                       <li key={idx}>
//                         <Typography variant="body2" color="text.secondary">
//                           {feature}
//                         </Typography>
//                       </li>
//                     ))}
//                   </ul>
//                   <Box sx={{ flexGrow: 1 }} />{" "}
//                   <Button
//                     variant="contained"
//                     sx={{
//                       borderRadius: 50,
//                       textTransform: "none",
//                       alignSelf: "center",
//                       mb: 3,
//                       bgcolor: "#0046AD",
//                     }}
//                   >
//                     รายละเอียดเพิ่มเติม
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default Packages;

import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

const Packages = () => {
  // const packages = [
  //   {
  //     title: "แพ็คเกจพื้นฐาน",
  //     description: "เว็บไซต์ที่มีฟีเจอร์พื้นฐานที่จำเป็น.",
  //     price: "35,000 - 70,000 บาท",
  //     features: [
  //       "สูงสุด 5 หน้า",
  //       "การออกแบบที่ตอบสนอง",
  //       "SEO พื้นฐาน",
  //       "ระบบแบ็คเอนด์ระดับกลางที่มีการจัดการผู้ใช้",
  //       "ระบบแบ็คเอนด์พื้นฐานสำหรับการจัดการเนื้อหา",
  //     ],
  //   },
  //   {
  //     title: "แพ็คเกจมาตรฐาน",
  //     description: "เว็บไซต์ที่สมบูรณ์พร้อมฟีเจอร์เพิ่มเติม.",
  //     price: "70,000 - 140,000 บาท",
  //     features: [
  //       "สูงสุด 10 หน้า",
  //       "การออกแบบที่ตอบสนอง",
  //       "การปรับแต่ง SEO",
  //       "แบบฟอร์มติดต่อ",
  //       "ระบบแบ็คเอนด์ระดับกลางที่มีการจัดการผู้ใช้",
  //       "ระบบแบ็คเอนด์พื้นฐานสำหรับการจัดการเนื้อหา",
  //     ],
  //   },
  //   {
  //     title: "แพ็คเกจพรีเมียม",
  //     description: "เว็บไซต์ที่ปรับแต่งได้เต็มรูปแบบพร้อมฟีเจอร์ขั้นสูง.",
  //     price: "140,000 บาทขึ้นไป",
  //     features: [
  //       "จำนวนหน้าที่ไม่จำกัด",
  //       "การออกแบบที่ตอบสนอง",
  //       "การปรับแต่ง SEO",
  //       "ระบบแบ็คเอนด์ระดับกลางที่มีการจัดการผู้ใช้",
  //       "ระบบแบ็คเอนด์ขั้นสูงที่มีการวิเคราะห์และรายงาน",
  //     ],
  //   },
  // ];
  const packages = [
    {
      title: "แพ็คเกจพื้นฐาน",
      description:
        "เว็บไซต์ที่มีฟีเจอร์พื้นฐานที่จำเป็น เหมาะสำหรับธุรกิจขนาดเล็กหรือผู้เริ่มต้นที่ต้องการแสดงข้อมูลพื้นฐานให้กับลูกค้า.",
      price: "35,000 - 70,000 บาท",
      features: [
        "สูงสุด 5 หน้า (รวมถึงหน้าแรก, เกี่ยวกับเรา, ติดต่อเรา, และบริการ)",
        "การออกแบบที่ตอบสนอง (Responsive Design) เพื่อให้ดูดีบนทุกอุปกรณ์",
        "SEO พื้นฐาน เพื่อช่วยให้เว็บไซต์ติดอันดับในผลการค้นหาของ Google",
        "ระบบแบ็คเอนด์ระดับกลางที่มีการจัดการผู้ใช้เพื่อความสะดวกในการบริหารจัดการข้อมูล",
        "ระบบแบ็คเอนด์พื้นฐานสำหรับการจัดการเนื้อหา (CMS) เพื่อให้คุณสามารถอัปเดตเนื้อหาได้ง่าย",
        "การรวม Google Authenticator สำหรับการยืนยันตัวตนที่ปลอดภัย",
      ],
    },
    {
      title: "แพ็คเกจมาตรฐาน",
      description:
        "เว็บไซต์ที่สมบูรณ์พร้อมฟีเจอร์เพิ่มเติม เหมาะสำหรับธุรกิจที่ต้องการฟีเจอร์ที่ครบครันเพื่อการดำเนินงาน.",
      price: "70,000 - 140,000 บาท",
      features: [
        "สูงสุด 10 หน้า (รวมถึงหน้าบริการพิเศษและบทความ)",
        "การออกแบบที่ตอบสนองและปรับแต่งได้เพื่อให้สอดคล้องกับแบรนด์ของคุณ",
        "การปรับแต่ง SEO เพื่อให้เว็บไซต์ของคุณมีการมองเห็นที่ดีขึ้น",
        "แบบฟอร์มติดต่อที่ใช้งานง่าย เพื่อให้ลูกค้าสามารถติดต่อคุณได้สะดวก",
        "ระบบแบ็คเอนด์ระดับกลางที่มีการจัดการผู้ใช้",
        "ระบบแบ็คเอนด์พื้นฐานสำหรับการจัดการเนื้อหา (CMS)",
        "การรวม LINE LIFF เพื่อเพิ่มประสบการณ์ผู้ใช้ในการเชื่อมต่อกับ LINE",
      ],
    },
    {
      title: "แพ็คเกจพรีเมียม",
      description:
        "เว็บไซต์ที่ปรับแต่งได้เต็มรูปแบบพร้อมฟีเจอร์ขั้นสูง เหมาะสำหรับธุรกิจที่ต้องการโซลูชันที่มีคุณภาพสูงและการวิเคราะห์ข้อมูล.",
      price: "140,000 บาทขึ้นไป",
      features: [
        "จำนวนหน้าที่ไม่จำกัด เพื่อรองรับทุกความต้องการของธุรกิจ",
        "การออกแบบที่ตอบสนองและปรับแต่งได้อย่างเต็มที่",
        "การปรับแต่ง SEO ขั้นสูงเพื่อเพิ่มโอกาสในการเข้าถึงลูกค้า",
        "ระบบแบ็คเอนด์ระดับกลางที่มีการจัดการผู้ใช้",
        "ระบบแบ็คเอนด์ขั้นสูงที่มีการวิเคราะห์และรายงานสำหรับการติดตามผลการดำเนินงานของเว็บไซต์",
        "การรวมบริการกู้คืนข้อมูลผ่านอีเมลเพื่อความปลอดภัยของบัญชีผู้ใช้",
        "ระบบการชำระเงินออนไลน์และการจัดการคำสั่งซื้อสำหรับธุรกิจ E-commerce",
      ],
    },
  ];

  return (
    <Box id="package" sx={{ py: 10, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography
          data-aos="fade-up"
          data-aos-duration="600"
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 4 }}
        >
          แพ็คเกจ
        </Typography>
        <Grid
          data-aos="fade-up"
          data-aos-duration="600"
          container
          spacing={2}
          justifyContent="center"
          alignItems="stretch"
        >
          {packages.map((pkg, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  cursor: "pointer",
                  borderRadius: 4,
                  boxShadow: 2,
                }}
              >
                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h5" component="div" gutterBottom>
                    {pkg.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {pkg.description}
                  </Typography>
                  <Typography variant="h6" color="text.primary">
                    {pkg.price}
                  </Typography>
                  <ul style={{ paddingLeft: 20 }}>
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} style={{ fontSize: "0.9rem" }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Packages;
