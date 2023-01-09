import { Box, Grid, Stack, Typography } from "@mui/material";

function OurFocusHeader() {
  return (
    <Stack>
      <Box
        sx={{
          paddingLeft: { xs: 4, lg: 7 },
          marginTop: 4,
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
            Core
          </Typography>{" "}
          focus
        </Typography>
      </Box>
      <Grid container sx={{ height: 10 }}>
        <Grid item xs={10} sx={{ backgroundColor: "red" }}></Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Stack>
  );
}

function OurFocusBody() {
  return (
    <Stack sx={{}}>
      <Stack
        sx={{
          marginY: { xs: 2, sm: 4, lg: 7, xl: 15 },
        }}
        spacing={6}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          sx={{
            paddingLeft: 4,
            maxWidth: { sm: 400, md: 400, lg: 500 },
            textAlign: { md: "right" },
            borderLeft: { sm: 1, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 20, md: 22, lg: 25 },
              marginBottom: 3,
              fontFamily: "Raleway",
              fontWeight: "bold",
            }}
          >
            Triumph Law Group is a well-established, successful law firm that
            was founded on the principles of helping consumers and Americans get
            control over their debt and repair their financial standing.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 18, md: 20, lg: 22 },
              marginBottom: 3,
              fontFamily: "Raleway",
            }}
          >
            It is important that all consumers have access to premium legal
            services. We understand that handling personal and business debt can
            be overwhelming for American families and businesses, which is why
            we do our best to make our services accessible and affordable.
          </Typography>
        </Box>
        <Box>
          <Box
            component={"img"}
            src={"coreFocus.png"}
            sx={{
              borderRadius: 2,
              boxShadow: 5,
              width: { xs: 0, md: 350, lg: 400 },
            }}
          />
        </Box>
      </Stack>
    </Stack>
  );
}

function OurFocus() {
  return (
    <Stack sx={{ marginY: { xs: 2, sm: 4, lg: 7, xl: 15 } }}>
      <OurFocusHeader />
      <OurFocusBody />
    </Stack>
  );
}

export default OurFocus;
