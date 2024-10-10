import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import TableUser from "../TableUser/TableUser";

const UserManagement = () => {
  //   React.useEffect(() => {
  //     window.scrollTo(0, 0); // เลื่อนกลับไปที่ด้านบน
  //   }, []);
  return (
    <Box sx={{ backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg" data-aos="fade-up" data-aos-duration="1000">
        <Typography variant="h4" gutterBottom align="center">
          ติดต่อเรา
        </Typography>
        <TableUser />
      </Container>
    </Box>
  );
};

export default UserManagement;
