import { Box, Container, Typography } from "@mui/material";

function AboutPage() {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 700 }}>
          About Velora
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ maxWidth: 700, lineHeight: 1.8 }}
        >
          Velora is a transaction tracking platform designed to help users log,
          track, search, and organize financial activity with clarity.
        </Typography>
      </Container>
    </Box>
  );
}

export default AboutPage;
