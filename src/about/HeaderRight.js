import { Box, Grid, Typography, Stack } from "@mui/material";

function HeaderRight({ left, right, content }) {
  return (
    <Stack>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "baseline",
          justifyContent: "flex-end",
          paddingRight: 4
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 34, sm: 74, md: 94 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            // backgroundImage: "url(redTriBack.png)",
            // backgroundSize: "cover",
            paddingLeft: 4,
            color: "#284B63",
            textShadow: "2px 2px 2px grey"
          }}
        >
          {left}{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 24, sm: 48, md: 54 },
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
          sx={{ height: 10, 
          backgroundColor: "grey",
          borderTopRightRadius: 3,
          borderBottomRightRadius: 3,
          boxShadow: 5, }}
        ></Grid>
      </Grid>
      {content}
    </Stack>
  );
}

export default HeaderRight;
