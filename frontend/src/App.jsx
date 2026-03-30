import { Box } from "@mui/material";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <Navbar />
      <LandingPage />
      <Footer />
    </Box>
  );
}

export default App;