import { Box, Stack, Typography } from "@mui/material";

function UnsecuredDebtBanner() {
  return (
    <Stack
      sx={{
        boxShadow: 5,
        backgroundImage: "url(cool-background3.png)",
        backgroundSize: "cover",
        color: "white",
        marginBottom: { xs: 2, sm: 4, lg: 7, xl: 15 },
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(256, 256, 256, .4)",
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0, 0, 0, .4)",
            marginY: { md: 4, lg: 7 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 28, sm: 34, md: 44 },
              padding: 4,
              fontFamily: "Raleway",
              textShadow: "1px 1px 1px #000000",
              textAlign: "center",
            }}
          >
            What is unsecured debt?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                fontSize: { sm: 20, md: 25 },
                padding: 4,
                paddingTop: 1,
                fontFamily: "Raleway",
                textShadow: "1px 1px 1px #000000",
                textAlign: "center",
                maxWidth: 700,
              }}
            >
              Unsecured debt is any debt that is not backed by collateral.
            </Typography>
            <Typography
              sx={{
                fontSize: { sm: 20, md: 25 },
                fontWeight: "bold",
                padding: 4,
                paddingTop: 1,
                fontFamily: "Raleway",
                textShadow: "1px 1px 1px #000000",
                textAlign: "center",
                maxWidth: 700,
              }}
            >
              This means that if you default on your payments, the creditor does
              not have a legal right to seize your property.{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
}

export default UnsecuredDebtBanner;
