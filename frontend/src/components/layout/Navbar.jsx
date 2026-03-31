import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleCloseDrawer = () => {
    setMobileOpen(false);
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(255,255,255,0.82)",
          backdropFilter: "blur(14px)",
          color: "text.primary",
          borderBottom: "1px solid rgba(244, 162, 97, 0.15)",
        }}
      >
        <Container maxWidth={false} sx={{ px: { xs: 2, sm: 3, md: 6, lg: 8, xl: 10 } }}>
          <Toolbar
            disableGutters
            sx={{
              minHeight: { xs: 70, md: 78 },
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              component={NavLink}
              to="/"
              sx={{
                textDecoration: "none",
                fontSize: { xs: "1.5rem", md: "1.75rem" },
                fontWeight: 800,
                color: "primary.main",
                letterSpacing: "-0.02em",
              }}
            >
              Velora
            </Typography>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 2,
              }}
            >
              {navLinks.map((link) => (
                <Button
                  key={link.path}
                  component={NavLink}
                  to={link.path}
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    color: "text.primary",
                    borderRadius: "999px",
                    px: 2,
                    "&.active": {
                      bgcolor: "rgba(244, 162, 97, 0.12)",
                      color: "primary.main",
                    },
                  }}
                >
                  {link.label}
                </Button>
              ))}

              <Button
                component={NavLink}
                to="/signin"
                variant="contained"
                sx={{
                  px: 3,
                  py: 1.2,
                  borderRadius: "999px",
                  boxShadow: "0 8px 22px rgba(244, 162, 97, 0.28)",
                }}
              >
                Sign In
              </Button>
            </Box>

            <IconButton
              onClick={handleDrawerToggle}
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "text.primary",
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleCloseDrawer}
        PaperProps={{
          sx: {
            width: 280,
            p: 2,
            bgcolor: "background.paper",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.35rem",
              fontWeight: 800,
              color: "primary.main",
            }}
          >
            Velora
          </Typography>

          <IconButton onClick={handleCloseDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <List sx={{ p: 0 }}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <ListItemButton
                key={link.path}
                component={NavLink}
                to={link.path}
                onClick={handleCloseDrawer}
                sx={{
                  borderRadius: "14px",
                  mb: 1,
                  bgcolor: isActive ? "rgba(244, 162, 97, 0.12)" : "transparent",
                  color: isActive ? "primary.main" : "text.primary",
                }}
              >
                <ListItemText
                  primary={link.label}
                  primaryTypographyProps={{
                    fontWeight: 600,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>

        <Box sx={{ mt: 2 }}>
          <Button
            component={NavLink}
            to="/signin"
            onClick={handleCloseDrawer}
            variant="contained"
            fullWidth
            sx={{
              py: 1.4,
              borderRadius: "999px",
              boxShadow: "0 8px 22px rgba(244, 162, 97, 0.28)",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;