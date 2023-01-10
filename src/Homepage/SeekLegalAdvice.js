import { Box, Grid, Stack, Typography } from "@mui/material";
import Divider from '@mui/material/Divider';

function SeekLegalAdvice() {
  return (
    <Stack sx={{}}>
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
              fontSize: { xs: 24, sm: 74, md: 94 },
              fontFamily: "Raleway",
              fontWeight: "bold",
            }}
          >
            Seek
          </Typography>{" "}
          legal advice
        </Typography>
      </Box>
      <Stack sx={{}}>
        <Grid container sx={{ height: 10 }}>
          <Grid item xs={10} sx={{ backgroundColor: "red" }}></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        {/* <Grid container sx={{ marginTop: 0 }}>
          <Grid
            item
            xs={9}
            sx={{
              boxShadow: 3,
              backgroundImage: "url(cool-background3.png)",
              backgroundSize: "cover",
              color: "white",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(256, 256, 256, .4)",
              }}
            >
              <Typography
                sx={{
                  fontSize: { sm: 20, md: 25 },
                  padding: { xs: 4, lg: 7 },
                  fontFamily: "Raleway",
                  textShadow: "1px 1px 1px #000000",
                  fontWeight: "bold",
                }}
              >
                According the the Federal Reserve, Household Debt reached $16.51
                Trillion in 2022
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid> */}
        <Box sx={{ padding: { xs: 4, lg: 7 }, marginX: 3, borderRight: 2 }}>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22, md: 25 },
              marginBottom: 3,
              fontFamily: "Raleway",
              fontWeight: "bold",
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
              fontWeight: "bold",
            }}
          >
            With locations and attorneys operating in 48 states, we have the
            diverse background and case experience to select the right legal
            team for every case.{" "}
          </Typography>
        </Box>
        <Grid container sx={{ marginTop: 2 }}>
          <Grid item xs={3}></Grid>
          <Grid
            item
            xs={9}
            sx={{
              boxShadow: 3,
              backgroundImage: "url(cool-background3.png)",
              backgroundSize: "cover",
              color: "white",
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(256, 256, 256, .4)",
                padding: { md: 4, lg: 7 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 28, sm: 34, md: 44 },
                  padding: 4,
                  fontFamily: "Raleway",
                  textShadow: "1px 1px 1px #000000",
                  textAlign: "right",
                }}
              >
                What is unsecured debt?
              </Typography>
              <Typography
                sx={{
                  fontSize: { sm: 20, md: 25 },
                  fontWeight: "bold",
                  padding: 4,
                  paddingTop: 1,
                  fontFamily: "Raleway",
                  textShadow: "1px 1px 1px #000000",
                  textAlign: "right",
                }}
              >
                Unsecured debt is any debt that is not backed by collateral.
                This means that if you default on your payments, the creditor
                does not have a legal right to seize your property. Examples of
                unsecured debt include credit card debt, medical bills, and
                personal loans.{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container sx={{ height: 10 }}>
          <Grid item xs={2}></Grid>
          <Grid item xs={10} sx={{ backgroundColor: "red" }}></Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default SeekLegalAdvice;
