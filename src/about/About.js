import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import OakstoneBanner from "../Homepage/OakstoneBanner";
import WhatWeDo from "./WhatWeDo";
import WhenWeHelp from "./WhenWeHelp";
import WhereWeService from "./WhereWeService";
import WhoWeHelp from "./WhoWeHelp";
import WhyWeFight from "./WhyWeFight";

function About() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack sx={{}}>
      <Box sx={{marginTop: {xs: 7}}} component={"img"} src={"aboutUs4.png"} />
      <OakstoneBanner />
      <Stack
        sx={{
          backgroundImage: "url(aboutBack4.png)",
          backgroundSize: "100%",
        }}
      >
        <WhatWeDo />
        <WhyWeFight val={value} handleChange={handleChange} />
        <WhereWeService />
        <WhoWeHelp />
        <WhenWeHelp />
      </Stack>
    </Stack>
  );
}

export default About;
