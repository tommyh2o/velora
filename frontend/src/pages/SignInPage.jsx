import { useState } from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Sign in form submitted:", formData);
  };

  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 10 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -120,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(244,162,97,0.18) 0%, rgba(244,162,97,0.05) 50%, rgba(255,255,255,0) 72%)",
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          <Stack spacing={3} sx={{ maxWidth: 520 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "2.4rem", md: "3.4rem" },
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                fontWeight: 800,
              }}
            >
              Welcome back to Velora!
            </Typography>
            <Typography
              sx={{
                color: "text.secondary",
                lineHeight: 1.8,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Sign in to access your transaction dashboard, review entries, and
              manage your financial activity in one place.{" "}
            </Typography>
          </Stack>
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              maxWidth: 520,
              justifySelf: "center",
              p: { xs: 3, sm: 4 },
              borderRadius: "28px",
              border: "1px solid rgba(244, 162, 97, 0.16)",
              bgcolor: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 24px 60px rgba(30, 30, 30, 0.08)",
            }}
          >
            <Stack spacing={3} component="form" onSubmit={handleSubmit}>
              <Box>
                <Typography
                  variant="h4"
                  sx={{ fontWeight: 800, letterSpacing: "-0.02em", mb: 1 }}
                >
                  Sign In
                </Typography>
                <Typography color="text.secondary">
                  Enter your account details to continue.
                </Typography>
              </Box>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailOutlinedIcon fontSize="small"></EmailOutlinedIcon>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockOutlinedIcon fontSize="small"></LockOutlinedIcon>
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? (
                          <VisibilityOffOutlinedIcon fontSize="small" />
                        ) : (
                          <VisibilityOutlinedIcon fontSize="small" />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 2,
                  flexWrap: "wrap",
                }}
              >
                <Link
                  href="#"
                  underline="hover"
                  sx={{ color: "primary.main", fontWeight: 600 }}
                >
                  Forgot Password?
                </Link>
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    color: "text.main",
                    fontWeight: 600,
                  }}
                >
                  Create an account
                </Link>
              </Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  py: 1.5,
                  borderRadius: "999px",
                  boxShadow: "0 14px 28px rgba(244, 162, 97, 0.26)",
                }}
              >
                Sign In
              </Button>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
}

export default SignInPage;
