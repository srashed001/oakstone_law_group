import React from "react";
import { Stack } from "@mui/system";
import Navbar from "./Nav/Navbar";

import Footer from "./Footer/Footer";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <Stack className="App" sx={{}}>
      <Navbar />
      <PublicRoutes />
      <Footer />
    </Stack>
  );
}

export default App;
