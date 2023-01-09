import { Box, Stack, Typography } from "@mui/material";

function FederalReserveBanner() {
  return (
    <Stack
      sx={{
        boxShadow: 3,
        backgroundImage: "url(cool-background3.png)",
        backgroundSize: "100%",
        color: "white",
        marginBottom: { xs: 4, sm: 7, md: 10, lg: 13 },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(256, 256, 256, .2)",
        }}
      >
        <Typography
          sx={{
            fontSize: { sm: 20, md: 25 },
            padding: { xs: 4, lg: 7 },
            fontFamily: "Raleway",
            textShadow: "1px 1px 1px #000000",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          According the the Federal Reserve, Household Debt reached $16.51
          Trillion in 2022
        </Typography>
      </Box>
    </Stack>
  );
}

export default FederalReserveBanner;
