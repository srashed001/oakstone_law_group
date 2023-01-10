import { Grid, Stack, Typography, Box } from "@mui/material";

function WhereWeServiceBody() {
  return (
    <Stack sx={{}}>
      <Grid
        container
        sx={{
          boxShadow: { xs: 10, md: 0 },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: { xs: "center", md: "flex-end" },
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, .8)",
            position: "relative",
            boxShadow: { xs: 0, md: 10 },
          }}
          item
          xs={12}
          md={7}
        >
          <Box
            sx={{
              padding: { xs: 2, sm: 4, md: 7, lg: 10 },
              maxWidth: { xs: 750, md: 400, lg: 500 },
              position: "relative",
              right: { md: 90, lg: 80 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 20, md: 22, lg: 25 },
                fontWeight: "bold",
                fontFamily: "Raleway",
                textAlign: { xs: "center", md: "right" },
                marginBottom: 3,
              }}
            >
              Our highly-qualified legal consultants can provide comprehensive
              assistance nationwide, except in{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: { xs: 20, md: 22, lg: 25 },
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                  textAlign: { xs: "center", md: "right" },
                  color: "#284B63",
                }}
              >
                North Dakota
              </Typography>{" "}
              and
              <Typography
                component={"span"}
                sx={{
                  fontSize: { xs: 20, md: 22, lg: 25 },
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                  textAlign: { xs: "center", md: "right" },
                  color: "#284B63",
                }}
              >
                {" "}
                Idaho.
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 18, md: 20, lg: 22 },
                fontFamily: "Raleway",
                textAlign: { xs: "center", md: "right" },
              }}
            >
              We’re confident our team has the experience to handle any case
              across{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: { xs: 18, md: 20, lg: 22 },
                  fontFamily: "Raleway",
                  textAlign: { xs: "center", md: "right" },
                  color: "#284B63",
                }}
              >
                48 states!
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            alignItems: "center",
            backgroundColor: { xs: "rgba(255, 255, 255, .8)", md: "inherit" },
          }}
          item
          xs={12}
          md={5}
        >
          <Stack>
            <Box
              component={"img"}
              src={"map.png"}
              borderRadius={2}
              sx={{
                position: "relative",
                left: { xs: 0, md: -100 },
                marginBottom: { xs: 2, sm: 4, md: 6 },
                marginY: { md: 6, lg: 10 },
                backgroundColor: "white",
                boxShadow: 5,
                maxWidth: { xs: 0, sm: 550, md: 450, lg: 550 },
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

function WhereWeServiceHeader() {
  return (
    <Stack justifyContent={"center"} alignItems={"center"}>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "baseline",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 54, sm: 74, md: 94 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            paddingLeft: 4,
            color: "white",
            textShadow: "2px 2px 2px lightgrey",
          }}
        >
          WHERE{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 32, sm: 48, md: 54 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            paddingLeft: 2,
            color: "white",
          }}
        >
          we service
        </Typography>
      </Box>
      <Stack
        sx={{
          width: "80%",
          height: 10,
          backgroundColor: "black",
          boxShadow: 5
        }}
      />
    </Stack>
  );
}

function WhereWeService() {
  return (
    <Stack
      sx={{
        marginTop: { xs: 2, sm: 3, md: 4, lg: 7, xl: 15 },
        paddingY: { xs: 0, sm: 3, md: 4, lg: 7, xl: 15 },
        marginLeft: 0,
        backgroundColor: "rgba(60, 110, 113, .7)",
        boxShadow: 5,
      }}
    >
      <WhereWeServiceHeader />
      <WhereWeServiceBody />
    </Stack>
  );
}

export default WhereWeService;
