import React, { useState } from "react";
import Link from "next/link";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
  Stack,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MainLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);

  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleNavigation = (href) => {
    handleMenuClose();
    router.push(href);
  };

  const handleLogout = () => {
    handleMenuClose();
    // Add your logout logic here
    console.log("Logged out");
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { text: "หน้าหลัก", href: "/" },
    { text: "แพ็คเกจ", href: "/#package" },
    { text: "บริการของเรา", href: "/#services" },
    { text: "เกี่ยวกับเรา", href: "/#about" },
    { text: "ติดต่อเรา", href: "/#contact" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f7fafc" }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={1}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <IconButton
              edge="end"
              color="inherit"
              sx={{ display: { md: "none" }, ml: -3 }}
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Stack
              direction="row"
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
            >
              <AutoAwesomeMosaicIcon sx={{ color: "#0046AD" }} />
              <Typography
                variant="h6"
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: "none",
                  color: "#0046AD",
                  fontWeight: "bold",
                }}
              >
                App-DevZone
              </Typography>
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, ml: 2 }}>
                {menuItems.map((item) => (
                  <Typography
                    key={item.text}
                    sx={{
                      color: "#4b5563",
                      textDecoration: "none",
                      "&:hover": {
                        color: "#0046AD",
                        backgroundColor: "#e0e7ff",
                        // transform: "scale(1.05)",
                        transition: "background-color 0.3s, transform 0.3s",
                      },
                      transition: "color 0.3s",
                      cursor: "pointer",
                      padding: "2px 10px", // Add padding for better button appearance
                      borderRadius: "4px", // Rounded corners
                    }}
                    onClick={() => handleNavigation(item.href)}
                  >
                    {item.text}
                  </Typography>
                ))}
              </Box>
            </Stack>
            <Box>
              {/* <IconButton
                sx={{ color: "#0046AD", mr: { xs: -3, md: 0 } }}
                onClick={handleProfileMenuOpen}
              >
                <AccountCircleIcon />
              </IconButton> */}
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 0.2,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem>
                  <Avatar /> Jakkapan Pakeerat
                </MenuItem>
                <Divider />

                <MenuItem>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Admin Settings
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
              {/* <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={() => handleNavigation("/profile")}>
                  Profile
                </MenuItem>
                <MenuItem onClick={() => handleNavigation("/settings")}>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu> */}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={toggleMenu}
        sx={{ display: { md: "none" }, zIndex: 9999 }}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => handleNavigation(item.href)}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: "#4b5563",
                      textDecoration: "none",
                    }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main">{children}</Box>

      <Box
        component="footer"
        sx={{ backgroundColor: "#1f2937", color: "white", py: 4 }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            © 2024 App-DevZone. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton
              color="inherit"
              href="https://www.facebook.com/jakkapan.pakeerat.5?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </IconButton>
            {/* <IconButton color="inherit" href="#">
              <TwitterIcon />
            </IconButton> */}
            <IconButton
              color="inherit"
              href="https://github.com/jakkapan1789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainLayout;
