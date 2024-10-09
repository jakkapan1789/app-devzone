import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
} from "@mui/material";

const Contact = () => {
  return (
    <Box id="contact" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="md" data-aos="fade-up" data-aos-duration="1000">
        <Typography variant="h4" gutterBottom align="center">
          ติดต่อเรา
        </Typography>
        <Typography variant="body1" paragraph align="center">
          หากคุณมีคำถามหรือต้องการข้อมูลเพิ่มเติม โปรดกรอกแบบฟอร์มด้านล่าง
        </Typography>

        <form>
          <TextField
            autoComplete="off"
            fullWidth
            label="ชื่อ"
            size="small"
            variant="outlined"
            margin="normal"
            sx={{ fontSize: "16px" }}
            // data-aos="flip-up"
            // data-aos-duration="500"
            // data-aos-delay="300"
          />
          <TextField
            autoComplete="off"
            fullWidth
            label="โทรศัพท์"
            size="small"
            variant="outlined"
            margin="normal"
            sx={{ fontSize: "16px" }}
            // data-aos="flip-up"
            // data-aos-duration="500"
            // data-aos-delay="300"
          />
          <TextField
            fullWidth
            autoComplete="off"
            label="อีเมล"
            size="small"
            variant="outlined"
            margin="normal"
            sx={{ fontSize: "16px" }}
            // data-aos="flip-up"
            // data-aos-duration="500"
            // data-aos-delay="600"
          />
          <TextField
            fullWidth
            autoComplete="off"
            label="ข้อความ"
            size="small"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            sx={{ fontSize: "16px" }}
            // data-aos="flip-up"
            // data-aos-duration="500"
            // data-aos-delay="900"
          />

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button
              // data-aos="flip-up"
              // data-aos-duration="500"
              // data-aos-delay="1200"
              variant="contained"
              color="primary"
              type="submit"
              sx={{ textTransform: "none", bgcolor: "#0046AD" }}
            >
              {/* Send Message */}
              ส่งข้อความ
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};

export default Contact;
