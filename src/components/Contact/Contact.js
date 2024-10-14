import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Stack,
  Dialog,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object().shape({
  name: yup.string().required("กรุณากรอกชื่อ"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง")
    .required("กรุณากรอกเบอร์โทรศัพท์"),
  email: yup
    .string()
    .email("กรุณากรอกอีเมลให้ถูกต้อง")
    .required("กรุณากรอกอีเมล"),
  message: yup.string().required("กรุณากรอกข้อความ"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      axios.post("/api/mail/contact", data);
      // Delay showing the success dialog for 1-3 seconds
      setTimeout(() => {
        setLoading(false);
        setOpenSuccessDialog(true);
      }, 3000); // Adjust the time as needed (1000 = 1 second)
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleCloseSuccessDialog = () => {
    setOpenSuccessDialog(false);
    window.location.reload();
  };

  return (
    <Box id="contact" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="md" data-aos="fade-up" data-aos-duration="1000">
        <Typography variant="h4" gutterBottom align="center">
          ติดต่อเรา
        </Typography>
        <Typography variant="body1" paragraph align="center">
          หากคุณมีคำถามหรือต้องการข้อมูลเพิ่มเติม โปรดกรอกแบบฟอร์มด้านล่าง
        </Typography>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            autoComplete="off"
            fullWidth
            label="ชื่อ"
            size="small"
            variant="outlined"
            margin="normal"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{ fontSize: "16px" }}
          />
          <TextField
            autoComplete="off"
            fullWidth
            label="โทรศัพท์"
            size="small"
            variant="outlined"
            margin="normal"
            {...register("phone")}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            sx={{ fontSize: "16px" }}
          />
          <TextField
            fullWidth
            autoComplete="off"
            label="อีเมล"
            size="small"
            variant="outlined"
            margin="normal"
            {...register("email")}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ fontSize: "16px" }}
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
            {...register("message")}
            error={!!errors.message}
            helperText={errors.message?.message}
            sx={{ fontSize: "16px" }}
          />

          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ textTransform: "none", bgcolor: "#0046AD" }}
            >
              ส่งข้อความ
            </Button>
          </Stack>
        </form>

        <Dialog
          open={loading}
          PaperProps={{
            sx: {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
          }}
        >
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CircularProgress />
            <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
              กำลังส่งข้อความ...
            </Typography>
          </DialogContent>
        </Dialog>

        <Dialog open={openSuccessDialog} onClose={handleCloseSuccessDialog}>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              ข้อความของคุณถูกส่งเรียบร้อยแล้ว!
            </Typography>
          </DialogContent>
          <DialogActions
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: -2,
            }}
          >
            <Button
              size="small"
              onClick={handleCloseSuccessDialog}
              sx={{ bgcolor: "#0046AD", color: "white" }}
            >
              ตกลง
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Contact;
