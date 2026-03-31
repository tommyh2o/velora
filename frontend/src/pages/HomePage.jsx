import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

const featureCards = [
  {
    title: "Search Transactions",
    description:
      "Quickly locate entries by merchant, category, note, or amount with fast filtering tools.",
  },
  {
    title: "Organize Better",
    description:
      "Keep your financial activity easy to review with a clean, intuitive layout built for everyday use.",
  },
  {
    title: "Built to Scale",
    description:
      "Start with simple tracking and grow into a more advanced dashboard as your needs expand.",
  },
];

function LandingPage() {
  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: -120,
          right: -100,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(244,162,97,0.22) 0%, rgba(244,162,97,0.06) 45%, rgba(255,255,255,0) 72%)",
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -140,
          left: -100,
          width: 360,
          height: 360,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,214,184,0.32) 0%, rgba(255,214,184,0.08) 50%, rgba(255,255,255,0) 72%)",
          pointerEvents: "none",
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          px: { xs: 3, md: 6, lg: 8, xl: 10 },
          py: { xs: 8, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "1.15fr 0.85fr" },
            gap: { xs: 5, md: 6 },
            alignItems: "stretch",
            minHeight: { lg: "70vh" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Stack spacing={4} sx={{ maxWidth: 760 }}>
              <Chip
                label="Modern transaction tracking"
                sx={{
                  alignSelf: "flex-start",
                  bgcolor: "rgba(244, 162, 97, 0.12)",
                  color: "primary.dark",
                  fontWeight: 700,
                  borderRadius: "999px",
                }}
              />

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2.8rem", sm: "3.6rem", lg: "4.8rem" },
                  lineHeight: 1.03,
                  letterSpacing: "-0.04em",
                  fontWeight: 800,
                  color: "text.primary",
                }}
              >
                Track every transaction with a cleaner, smarter workflow
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", md: "1.2rem" },
                  lineHeight: 1.8,
                  color: "text.secondary",
                  maxWidth: 640,
                }}
              >
                Velora helps users log, search, and filter financial transactions in one
                streamlined experience designed for clarity, speed, and control.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: "999px",
                    boxShadow: "0 14px 28px rgba(244, 162, 97, 0.26)",
                  }}
                >
                  Get Started
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: "999px",
                    borderColor: "rgba(244, 162, 97, 0.35)",
                    color: "primary.main",
                    bgcolor: "rgba(255,255,255,0.68)",
                  }}
                >
                  Learn More
                </Button>
              </Stack>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                  gap: 3,
                  pt: 1,
                  maxWidth: 760,
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.35rem" }}>
                    Fast Search
                  </Typography>
                  <Typography color="text.secondary">
                    Find entries without digging
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.35rem" }}>
                    Clean UI
                  </Typography>
                  <Typography color="text.secondary">
                    Simple and readable by design
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 800, fontSize: "1.35rem" }}>
                    Future Ready
                  </Typography>
                  <Typography color="text.secondary">
                    Built for filters, dashboards, and scale
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 4 },
              borderRadius: "28px",
              border: "1px solid rgba(244, 162, 97, 0.16)",
              bgcolor: "rgba(255,255,255,0.82)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 24px 60px rgba(30, 30, 30, 0.08)",
              width: "100%",
              alignSelf: "stretch",
              display: "flex",
            }}
          >
            <Stack spacing={3} sx={{ width: "100%" }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                Why Velora works
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  bgcolor: "background.paper",
                  border: "1px solid rgba(244, 162, 97, 0.14)",
                }}
              >
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Centralized tracking</Typography>
                <Typography color="text.secondary">
                  Store your financial activity in one place instead of scattered notes or spreadsheets.
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  bgcolor: "background.paper",
                  border: "1px solid rgba(244, 162, 97, 0.12)",
                }}
              >
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Flexible querying</Typography>
                <Typography color="text.secondary">
                  Search by fields that matter so users can inspect transactions quickly and precisely.
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  bgcolor: "background.paper",
                  border: "1px solid rgba(244, 162, 97, 0.12)",
                }}
              >
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Expandable foundation</Typography>
                <Typography color="text.secondary">
                  Start with logging and filtering, then grow into categories, dashboards, and user accounts.
                </Typography>
              </Paper>

              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: "20px",
                  bgcolor: "background.paper",
                  border: "1px solid rgba(244, 162, 97, 0.12)",
                }}
              >
                <Typography sx={{ fontWeight: 700, mb: 1 }}>Visual Dashboard</Typography>
                <Typography color="text.secondary">
                  Modern and aesthetic dashboards and graphs help users stay on track with their saving goals.
                </Typography>
              </Paper>
            </Stack>
          </Paper>
        </Box>

        <Box sx={{ mt: { xs: 6, md: 7 } }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
              gap: 3,
              width: "100%",
            }}
          >
            {featureCards.map((card) => (
              <Paper
                key={card.title}
                elevation={0}
                sx={{
                  height: "100%",
                  p: 4,
                  borderRadius: "24px",
                  border: "1px solid rgba(244, 162, 97, 0.14)",
                  bgcolor: "rgba(255,255,255,0.78)",
                  backdropFilter: "blur(10px)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  boxShadow: "0 10px 30px rgba(30, 30, 30, 0.04)",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 18px 40px rgba(30, 30, 30, 0.08)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    mb: 2,
                    fontWeight: 700,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    lineHeight: 1.8,
                    fontSize: "1rem",
                  }}
                >
                  {card.description}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default LandingPage;