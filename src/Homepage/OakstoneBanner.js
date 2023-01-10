import { Stack, Box } from "@mui/material";

function OakstoneBanner() {
  return (
    <Stack
      sx={{
        boxShadow: 3,
      }}
    >
      <Box component={"img"} src="oakstone_Banner.png"  />
    </Stack>
  );
}

export default OakstoneBanner;
