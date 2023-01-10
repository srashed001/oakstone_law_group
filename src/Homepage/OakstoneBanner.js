import { Stack, Box } from "@mui/material";

function OakstoneBanner() {
  return (
    <Stack
      sx={{
        position: "relative",
        boxShadow: 3,
        backgroundColor: 'white'
      }}
    >
      <Box component={"img"} src="Oakstonebanner.png" sx={{ opacity: 0.5 }} />
    </Stack>
  );
}

export default OakstoneBanner;
