import { Box, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import TriumphBanner from "../Homepage/TriumphBanner";
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
      <Box component={"img"} src={"aboutUs4.png"} />
      <TriumphBanner />
      <Stack
        sx={{
          backgroundImage: "url(aboutBack.png)",
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
