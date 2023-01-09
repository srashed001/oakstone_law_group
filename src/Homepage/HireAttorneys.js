import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import { useNavigate } from "react-router";

function HireAttorneys() {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        marginY: { xs: 2, sm: 4, lg: 7, xl: 15 },
 
        backgroundImage: "url(section3_01.jpg)", backgroundSize: "cover" }}
    >
      <Box sx={{ boxShadow: 3, paddingLeft: { xs: 4, lg: 7 } }}>
        <Typography
          sx={{
            fontSize: { xs: 40, sm: 48, md: 54 },
            fontFamily: "Raleway",
            color: "white",
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
            Hire
          </Typography>{" "}
          attorneys
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          paddingX: { lg: 7 },
          paddingBottom: 2,
          backgroundColor: "rgba(256, 256, 256, .3)",
        }}
      >
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Stack sx={{ margin: 3 }}>
            <Typography
              sx={{
                fontSize: {xs: 22, md: 30},
                color: "white",
                fontWeight: "bold",
                paddingX: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: {xs: 22, md: 30},
                  fontWeight: "bold",
                  color: "black",
                  textShadow: "1px 1px 1px #FFFFFF",
                }}
                component={"span"}
              >
                NOT
              </Typography>{" "}
              debt consolidation
            </Typography>
            <Box
              sx={{
                padding: 2,
                marginY: 2,
                color: "white",
                paddingBottom: 4,
              }}
            >
              <Typography
                sx={{ fontSize: { xs: 18, sm: 22, md: 30 }, marginBottom: 3 }}
              >
                Debt consolidation is a form of debt refinancing. The idea is
                you take out one giant loan to pay off all of your debt at once.
                So instead of worrying about making multiple payments to
                different creditors, you only make one.
              </Typography>
              <Typography sx={{ fontSize: 19, fontStyle: "italic" }}>
                The loans typically have higher interest rates and additional
                fees such as origination fees, which means you just end up owing
                another credit more money.
              </Typography>
            </Box>
          </Stack>
          <Box
            sx={{
              textAlign: "center",
              position: { sm: "relative", md: "absolute" },
              bottom: "0%",
              width: "100%",
            }}
          >
            <CreditCardOffIcon sx={{ fontSize: 90, color: "white" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack sx={{ margin: 3 }}>
            <Typography
              sx={{
                fontSize: {xs: 22, md: 30},
                color: "white",
                fontWeight: "bold",
                paddingX: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: {xs: 22, md: 30},
                  fontWeight: "bold",
                  color: "black",
                  textShadow: "1px 1px 1px #FFFFFF",
                }}
                component={"span"}
              >
                NOT
              </Typography>{" "}
              debt settlement
            </Typography>
            <Box
              sx={{
                padding: 2,
                marginY: 2,
                color: "white",
                paddingBottom: 4,
              }}
            >
              <Typography
                sx={{ fontSize: { xs: 18, sm: 22, md: 30 }, marginBottom: 3 }}
              >
                Debt settlement involves hiring a company to settle your debt by
                collecting payments from you, while witholding payments from
                your creditors. Using a portion of the money you've sent them,
                they entice the creditor to settle your debt for one lump sum
                amount, and keep the rest.
              </Typography>
              <Typography sx={{ fontSize: 19, fontStyle: "italic" }}>
                Debt settlement companies often collect these payments for a
                duration of three years or more just to settle one debt.
              </Typography>
            </Box>
          </Stack>
          <Box sx={{ textAlign: "center" }}>
            <MonetizationOnIcon sx={{ fontSize: 90, color: "white" }} />
          </Box>
        </Grid>
      </Grid>
      <Stack
        sx={{ padding: { xs: 4, lg: 7 }, backgroundColor: "rgba(0,0,0, .5)" }}
      >
        <Typography
          sx={{
            fontSize: {xs: 22, md: 30},
            color: "white",
            fontWeight: "bold",
            paddingX: 2,
          }}
        >
          WE ARE legal debt resolution
        </Typography>
        <Box
          sx={{
            padding: 2,
            marginY: 2,
            color: "white",
            paddingBottom: 4,
          }}
        >
          <Typography sx={{ xs: 18, sm: 22, md: 30, marginBottom: 3 }}>
            We legally dispute your debt. Experienced attorneys using legal
            expertise and tactics to dispute your debt. This often means
            completely discharging your debt or negotiating in court. However,
            even when settling, we achieve much better results then debt
            settlement companies
          </Typography>
          <Typography sx={{ xs: 16, sm: 20, md: 27, fontStyle: "italic" }}>
            Debt resolution not only helps reduce your financial burden, but we
            also fight to repair your credit with all three credit bureaus.
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

export default HireAttorneys;
