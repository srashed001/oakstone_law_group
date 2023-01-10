import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ContactUs from "./ContactUs";
import GavelIcon from "@mui/icons-material/Gavel";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { useNavigate } from "react-router";

function SeekLegalAdvice3Header() {
  return (
    <Stack>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 26, sm: 39, md: 54 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            textShadow: "4px 4px 5px lightgrey",
          }}
        >
          <Typography
            component={"span"}
            sx={{
              fontSize: { xs: 30, sm: 55, md: 94 },
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
            backgroundColor: "#3C6E71",
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
  const navigate = useNavigate();
  return (
    <Stack sx={{}}>
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
        <AccountBalanceIcon sx={{ fontSize: { xs: 0, lg: 200 } }} />
        <Box
          sx={{
            maxWidth: 700,
            textAlign: {xs: 'center', lg: 'left' },


            paddingX: { xs: 3, sm: 7, md: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 22, md: 25 },
              marginBottom: {xs: 1.5, sm: 3},
              fontFamily: "Raleway",
            }}
          >
            When you are in debt and can't pay, it's important to know your
            legal rights.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 22, md: 25 },
              marginBottom: {xs: 1.5, sm: 3},
              fontFamily: "Raleway",
              fontWeight: "bold",
            }}
          >
            We've handled thousands of cases involving unsecured debts like
            credit card bills or medical loans before-and we do everything
            possible for consumers in bad financial situations so they can find
            the freedom they deserve.
          </Typography>
          <Button
            variant="contained"
            disableRipple
            sx={{
              fontSize: {xs: 14, sm: 19, md: 24},
              boxShadow: 5,
              marginBottom: {xs: 1.5, sm: 3},
              padding: 2,
              backgroundColor: "lightgrey",
              color: "black",
              "&:hover": {
                backgroundColor: "grey",
                color: "white",
              },
            }}
            onClick={() => {
              navigate("/about");
            }}
          >
            learn About us
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}

function SeekLegalAdvice3() {
  return (
    <Stack sx={{}}>
      <SeekLegalAdvice3Header />
      <SeekLegalAdvice3Container />
    </Stack>
  );
}

export default SeekLegalAdvice3;
