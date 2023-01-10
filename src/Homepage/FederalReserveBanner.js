import { Box, Stack, Typography } from "@mui/material";

function FederalReserveBanner() {
  return (
    <Stack
      sx={{
        boxShadow: 3,
        backgroundColor: "rgba(60,110,113,.7)",
        color: "white",
        marginBottom: { xs: 4, sm: 7, md: 10, lg: 13 },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: { xs: 2, sm: 4 },
        }}
      > */}
        <Typography
          sx={{
            fontSize: { sm: 25, md: 30, lg: 35 },
            paddingTop: { xs: 4, lg: 7 },
            fontFamily: "Raleway",
            textShadow: "1px 1px 1px #000000",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          DID YOU KNOW?
        </Typography>
        <Typography
          sx={{
            fontSize: { sm: 20, md: 25, lg: 30 },
            padding: { xs: 4, lg: 7 },
            fontFamily: "Raleway",
            textShadow: "1px 1px 1px #000000",
            fontWeight: "bold",
            textAlign: "center",
            maxWidth: { lg: 700 },
          }}
        >
          According the the Federal Reserve, Household Debt reached $16.51
          Trillion in 2022
        </Typography>
        {/* <Box
          component={"img"}
          src={"federalReserve.png"}
          sx={{
            maxWidth: {xs: 0, md: 300},
            borderRadius: 2,
            boxShadow: 10,
          }}
        /> */}
      {/* </Box> */}
    </Stack>
  );
}

export default FederalReserveBanner;
