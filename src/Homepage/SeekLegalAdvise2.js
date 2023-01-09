import { Box, Grid, Stack, Typography } from "@mui/material";
import ContactUs from "./ContactUs";
import GavelIcon from '@mui/icons-material/Gavel';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

function SeekLegalAdvice2Header() {
  return (
    <Stack>
      <Box
        sx={{
          paddingLeft: { xs: 4, lg: 7 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 40, sm: 48, md: 54 },
            fontFamily: "Raleway",
            fontWeight: "bold",
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
        <Grid item xs={10} sx={{ backgroundColor: "red" }}></Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Stack>
  );
}

function SeekLegalAdvice2Container() {
  return (
    <Stack sx={{}}>
      <Stack
        sx={{
          
          display: "flex",
          flexDirection: {xs: 'column', md: 'row'},
          justifyContent: "center",
          alignItems: "center",
          marginY: { xs: 3, sm: 5, md: 7, lg: 10 },
          marginX: { xs: 3, sm: 7, md: 10 },
        }}
      >
        <AccountBalanceIcon sx={{fontSize: {xs: 0, lg: 200}, color: 'rgba(0,0,0,.7)'}} />
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
            When you are in{" "}
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 22, md: 30 },
                color: "red",
                fontFamily: "Raleway",
                fontWeight: "bold",
              }}
              component={"span"}
            >
              debt
            </Typography>{" "}
            and can't pay, it's important to know your{" "}
            <Typography
              sx={{
                fontSize: { xs: 18, sm: 22, md: 30 },
                color: "red",
                fontFamily: "Quicksand",
                fontWeight: "bold",
              }}
              component={"span"}
            >
              legal rights.
            </Typography>{" "}
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
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22, md: 25 },
              marginBottom: 3,
              fontFamily: "Raleway",
            }}
          >
            With locations and attorneys operating in 48 states, we have the
            diverse background and case experience to select the right legal
            team for every case.
          </Typography>
        </Box>
      </Stack>
      <ContactUs />
    </Stack>
  );
}

function SeekLegalAdvice2() {
  return (
    <Stack sx={{}}>
      <SeekLegalAdvice2Header />
      <SeekLegalAdvice2Container />
    </Stack>
  );
}

export default SeekLegalAdvice2;
