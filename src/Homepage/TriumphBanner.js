import { Stack, Box } from "@mui/material";

function TriumphBanner() {
  return (
    <Stack
      sx={{
        position: "relative",
        boxShadow: 3,
        backgroundColor: 'white'
      }}
    >
      <Box component={"img"} src="triumph_banner.png" sx={{ opacity: 0.5 }} />
    </Stack>
  );
}

export default TriumphBanner;
