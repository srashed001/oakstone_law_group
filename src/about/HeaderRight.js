import { Box, Grid, Typography, Stack } from "@mui/material";

function HeaderRight({ left, right, content }) {
  return (
    <Stack>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "baseline",
          justifyContent: "flex-end",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 54, sm: 74, md: 94 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            // backgroundImage: "url(redTriBack.png)",
            // backgroundSize: "cover",
            paddingLeft: 4,
            color: "red",
            textShadow: "2px 2px 2px grey"
          }}
        >
          {left}{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 32, sm: 48, md: 54 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            paddingX: 2,
          }}
        >
          {right}
        </Typography>
      </Box>
      <Grid container>
        <Grid item xs={3}></Grid>
        <Grid
          item
          xs={9}
          sx={{ height: 10, backgroundColor: "rgba(79, 81, 84, 1)" }}
        ></Grid>
      </Grid>
      {content}
    </Stack>
  );
}

export default HeaderRight;
