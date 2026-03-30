import { Box, Container, Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: "auto",
        py: 3,
        borderTop: "1px solid #f1dfd2",
        bgcolor: "background.paper",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={1}
        >
          <Typography variant="body2" color="text.secondary">
            © 2026 Velora. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Track smarter. Review faster.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;