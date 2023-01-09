import { Box, Grid, Stack, Typography } from "@mui/material";
import ContactUs from "./ContactUs";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";

function SeekLegalAdvice3Header() {
  return (
    <Stack>
      <Box
        sx={{
          paddingLeft: { xs: 4, lg: 7 },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 40, sm: 48, md: 54 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            textShadow: "4px 4px 5px black",
          }}
        >
          <Typography
            component={"span"}
            sx={{
              fontSize: { xs: 54, sm: 74, md: 94 },
              fontFamily: "Raleway",
              fontWeight: "bold",
            }}
          >
            Seek
          </Typography>{" "}
          legal advice
        </Typography>
      </Box>
      <Grid container sx={{ height: 10 }}>
        <Grid
          item
          xs={10}
          sx={{
            backgroundColor: "red",
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,
            boxShadow: 5,
          }}
        ></Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Stack>
  );
}

function SeekLegalAdvice3Container() {
  return (
    <Stack sx={{ backgroundColor: "rgba(0,0,0,.4)" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          marginY: { xs: 3, sm: 5, md: 7, lg: 10 },
          marginX: { xs: 3, sm: 7, md: 10 },
        }}
      >
        <AccountBalanceIcon
          sx={{ fontSize: { xs: 0, lg: 200 }, color: "white" }}
        />
        <Box
          sx={{
            maxWidth: 700,

            paddingX: { xs: 3, sm: 7, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22, md: 25 },
              marginBottom: 3,
              fontFamily: "Raleway",
            }}
          >
            When you are in debt and can't pay, it's important to know your
            legal rights.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22, md: 25 },
              marginBottom: 3,
              fontFamily: "Raleway",
              fontWeight: "bold",
            }}
          >
            We've handled thousands of cases involving unsecured debts like
            credit card bills or medical loans before-and we do everything
            possible for consumers in bad financial situations so they can find
            the freedom they deserve.
          </Typography>
          {/* <Typography
            sx={{
              fontSize: { xs: 18, sm: 22, md: 25 },
              marginBottom: 3,
              fontFamily: "Raleway",
            }}
          >
            With locations and attorneys operating in 48 states, we have the
            diverse background and case experience to select the right legal
            team for every case.
          </Typography> */}
        </Box>
      </Stack>
    </Stack>
  );
}

function SeekLegalAdvice3() {
  return (
    <Stack sx={{ backgroundColor: "grey", color: "white" }}>
      <SeekLegalAdvice3Header />
      <SeekLegalAdvice3Container />
    </Stack>
  );
}

export default SeekLegalAdvice3;
