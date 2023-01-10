import { Box, Grid, Typography, Stack } from "@mui/material";


function HeaderLeft({ left, right, content }) {
  return (
    <Stack>
      <Box sx={{ display: "inline-flex", alignItems: "baseline" }}>
        <Typography
          sx={{
            fontSize: { xs: 54, sm: 74, md: 94 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            paddingLeft: 4,
            color: "#284B63",
            textShadow: "2px 2px 2px lightgrey"
          }}
        >
          {left}{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 32, sm: 48, md: 54 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            paddingLeft: 2,
          }}
        >
          {right}
        </Typography>
      </Box>
      <Grid container>
        <Grid
          item
          xs={9}
          sx={{
            height: 10,
            backgroundColor: "#3C6E71",
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,
            boxShadow: 5,
          }}
        ></Grid>
        <Grid item xs={3}></Grid>
      </Grid>
      {content}
    </Stack>
  );
}

export default HeaderLeft;
