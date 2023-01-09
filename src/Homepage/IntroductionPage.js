import { Typography, Stack, Grid, Box, Button } from "@mui/material";
import { useNavigate } from "react-router";

function ListenCareFight() {
  const navigate = useNavigate();

  return (
    <Grid xs={12} md={6} sx={{}}>
      <Stack
        marginY={3}
        sx={{
          paddingRight: { xs: 5, md: 2 },
          paddingLeft: { xs: 5, md: 10 },
          display: "flex",
          justifyContent: "center",
          textAlign: {xs: 'center', md: 'left'}
        }}
      >
        <Typography
          sx={{
            fontSize: { sm: 20, md: 30 },
          }}
        >
          WHAT MAKES US SO SUCCESSFUL?
        </Typography>
        {["we listen", "we care"].map((slogan) => {
          return (
            <Typography
              sx={{
                fontWeight: "bold",
                lineHeight: 1,
                fontSize: { xs: 60, sm: 70, md: 75, lg: 95 },
              }}
            >
              {slogan}
            </Typography>
          );
        })}
        <Typography
          sx={{
            fontWeight: "bold",
            lineHeight: 1,
            fontSize: { xs: 60, sm: 70, md: 75, lg: 95 },
          }}
        >
          we{" "}
          <Typography
            component={"span"}
            sx={{
              fontWeight: "bold",
              color: "#FF1616",
              lineHeight: 1,
              fontSize: { xs: 60, sm: 70, md: 75, lg: 95 },
            }}
          >
            fight
          </Typography>
        </Typography>
        <Typography sx={{ fontSize: 20, marginTop: 3 }}>
          Gallant Law Group employs some of the most experiences attorneys in
          Debt Resolution and Litigation. Operating in 48 states, we are
          prepared to fight and help you and your family get to the financial
          freedom you deserve.
        </Typography>
        <Button
          variant="contained"
          disableRipple
          sx={{
            fontSize: 24,
            boxShadow: 5,
            marginY: 3,
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
      </Stack>
    </Grid>
  );
}

function TMoney() {
  return (
    <Grid
      xs={12}
      md={6}
      sx={{
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box component={"img"} src="homeT.png" alt="logo" height={400} />
    </Grid>
  );
}

function IntroductionPage() {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        // margin: { xs: 2, sm: 4, lg: 7, xl: 15 },
      }}
    >
      <Typography
        sx={{
          fontFamily: 'Archivo Black',
          fontSize: { xs: 40, sm: 50, md: 75, lg: 95 },
          textShadow: '5px 5px 5px lightgrey',
          maxWidth: {xs: 400, sm: 600, md: 800, lg: 1000},
          lineHeight: 1,
          textAlign: 'center',
          margin: { xs: 2, sm: 4}, 
        }}
      >Debt Resolution Attorneys
      </Typography>
      <Stack sx={{
        height: 5,
        width: '80%',
        backgroundColor: 'red'
      }} />
      <Grid container sx={{ maxWidth: { sm: 800, lg: 1000 } }}>
        <ListenCareFight />
        <TMoney />
      </Grid>
    </Stack>
  );
}

export default IntroductionPage;
