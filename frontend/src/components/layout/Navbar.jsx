import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

function Navbar() {
  return (
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
      <Container maxWidth={false} sx={{ px: { xs: 3, md: 6, lg: 10 } }}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 78,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: "primary.main",
              letterSpacing: "-0.02em",
            }}
          >
            Velora
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: { xs: 1, md: 2 },
            }}
          >
            <Button
              color="inherit"
              sx={{
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              sx={{
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              About
            </Button>
            <Button
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
