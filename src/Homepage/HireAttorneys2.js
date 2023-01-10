import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function WeAreNotHeader({ service }) {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: { xs: 22, md: 30 },
          fontWeight: "bold",
          color: "#284B63",
          textShadow: "1px 1px 1px lightgrey",
        }}
      >
        WE ARE NOT
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: 22, md: 30 },
          textDecoration: "underline",
        }}
      >
        {service}
      </Typography>
    </Stack>
  );
}

function NotConsolidation() {
  return (
    <Grid item xs={12} md={6} sx={{textAlign: "right"}}>
      <Stack sx={{ margin: 3 }}>
        <WeAreNotHeader service={"debt consolidation"} />
        <Box
          sx={{
            marginY: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 18, sm: 20, md: 22 },
              marginBottom: 3,
            }}
          >
            Debt consolidation is a form of debt refinancing.
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 18, sm: 20, md: 22 }, marginBottom: 3 }}
          >
            The idea is you take out one giant loan to pay off all of your debt
            at once.
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 18, sm: 20, md: 22 }, marginBottom: 3 }}
          >
            So instead of worrying about making multiple payments to different
            creditors, you only make one.
          </Typography>
          <Typography sx={{ fontSize: 19, fontStyle: "italic" }}>
            The loans typically have higher interest rates and additional fees
            such as origination fees, which means you just end up owing another
            credit more money.
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
}

function NotSettlement() {
  return (
    <Grid item xs={12} md={6} sx={{}}>
      <Stack sx={{ margin: 3 }}>
        <WeAreNotHeader service={"debt settlement"} />
        <Box
          sx={{
            marginY: 2,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 18, sm: 20, md: 22 },
              marginBottom: 3,
            }}
          >
            Debt settlement involves hiring a company to settle your debt by
            collecting payments from you, while witholding payments from your
            creditors.
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 18, sm: 20, md: 22 }, marginBottom: 3 }}
          >
            Using a portion of the money you've sent them, they entice the
            creditor to settle your debt for one lump sum amount, and keep the
            rest.
          </Typography>
          <Typography sx={{ fontSize: 19, fontStyle: "italic" }}>
            Debt settlement companies often collect these payments for a
            duration of three years or more just to settle one debt.
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
}

function WeAreNotContainer() {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginY: { xs: 2, sm: 4, lg: 7, xl: 10 },
      }}
    >
      <Grid
        container
        sx={{
          maxWidth: { md: 700, lg: 1000 },
          backgroundColor: "rgba(256, 256, 256, .3)",
        }}
      >
        <NotConsolidation />
        <NotSettlement />
      </Grid>
    </Stack>
  );
}

function HireAttorneys2Header() {
  return (
    <Stack>
      <Box sx={{ paddingLeft: { xs: 4, lg: 7 }, textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: 40, sm: 48, md: 54 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          The difference between hiring{" "}
          <Typography
            component={"span"}
            sx={{
              fontSize: { xs: 54, sm: 74, md: 84 },
              fontFamily: "Raleway",
              fontWeight: "bold",
            }}
          >
            attorneys
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 14, sm: 18, md: 22, lg: 26 },
              fontFamily: "Raleway",
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "grey",
              marginBottom: {xs: 2, sm: 4, md: 6}
            }}
          >
            It is important you understand the options you have for resolving
            your debt
          </Typography>
        </Typography>
      </Box>
      <Grid container sx={{ height: 10 }}>
        <Grid item xs={2}></Grid>
        <Grid item xs={10} sx={{ backgroundColor: "grey", borderTopLeftRadius: 3, borderBottomLeftRadius: 3, boxShadow: 5 }}></Grid>
      </Grid>
    </Stack>
  );
}

function WeAreHeader() {
  return (
    <Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: { xs: 4 },
          width: "100%",
          textAlign: 'center'
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 30, sm: 38, md: 44 },

            fontWeight: "bold",
          }}
        >
          <Typography
            component={"span"}
            sx={{
              fontSize: { xs: 44, sm: 64, md: 84 },
              color: "#284B63",
              fontWeight: "bold",
              paddingRight: 2,
              textShadow: "1px 1px 1px lightgrey",
            }}
          >
            WE ARE
          </Typography>
          Attorneys
        </Typography>
      </Box>
      <Stack
        sx={{
          height: 5,
          width: { xs: "90%", sm: "80%" },
          backgroundColor: "white",
        }}
      />
    </Stack>
  );
}

function WeAreContainer() {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        backgroundImage: "url(cool-background5.png)",
        backgroundSize: "cover",
        boxShadow: 5,
        textAlign: 'center'

      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingY: { xs: 2, sm: 4, lg: 7, xl: 15 },
          backgroundColor: "rgba(256,256,256, .8)",
        }}
      >
        <WeAreHeader />
        <Box
          sx={{
            padding: 2,
            marginY: 2,

            paddingBottom: 4,
            maxWidth: { sm: 500, md: 600, lg: 800 },
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: { xs: 18, sm: 20, md: 22, lg: 25 },
              marginBottom: 3,
            }}
          >
            We legally dispute your debt.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 20, md: 22, lg: 25 },
              marginBottom: 3,
            }}
          >
            Experienced attorneys using legal expertise and tactics to dispute
            your debt.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, sm: 20, md: 22, lg: 25 },
              marginBottom: 3,
            }}
          >
            This often means completely discharging your debt or negotiating in
            court. However, even when settling, we achieve much better results
            then debt settlement companies
          </Typography>
          <Typography
            sx={{ fontSize: { xs: 16, sm: 20, md: 27 }, fontStyle: "italic" }}
          >
            We not only aim to reduce your financial burden, but also work to
            repair your credit score.
          </Typography>
        </Box>
        <Box sx={{ marginBottom: 2, paddingX: 2 }}>
          <Button
            variant="contained"
            disableRipple
            sx={{
              fontSize: 24,
              boxShadow: 5,
              width: { md: 400 },
              padding: 2,
              backgroundColor: "white",
              color: "black",
              "&:hover": {
                backgroundColor: "grey",
                color: "white",
              },
            }}
            onClick={() => {
              navigate("/services");
            }}
          >
            Our Services
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}

function HireAttorneys2() {
  return (
    <Stack
      sx={{
        marginTop: { xs: 2, md: 0 },
      }}
    >
      <HireAttorneys2Header />
      <WeAreNotContainer />
      <WeAreContainer />
    </Stack>
  );
}

export default HireAttorneys2;
