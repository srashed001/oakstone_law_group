import { Avatar, Box, Grid, Stack, Typography } from "@mui/material";
import HeaderRight from "./HeaderRight";

const content = [
  {
    title: "being harrassed by collectors",
    body: `People tired of all harrassing calls and endless letters.`,
    img: "harrassment.png",
  },
  {
    title: "being sued by creditors",
    body: `Our law firm has experienced litigators who can represent you in court 
            and get you a favorable outcome`,
    img: "lawsuit.png",
  },
  {
    title: "being drained by debt",
    body: `We take every legal avenue to reduce your debt load and repair your credit score.`,
    img: "drained.png",
  },
  {
    title: "being denied financial freedom",
    body: `Our firm makes their services accessible so that everyone can get the financial freedom they deserve`,
    img: "denied.png",
  },
];

function WWHCard({ content }) {
  const { title, body, img } = content;
  return (
    <Box
      sx={{
        display: { xs: "inline-flex", sm: "block" },
        textAlign: "center",
        maxWidth: { xs: "100%", sm: 200 },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
        <Avatar
          src={img}
          sx={{
            width: { xs: 100, sm: 125,  lg: 200 },
            height: { xs: 100, sm: 125,  lg: 200 },
            boxShadow: 3,
          }}
        />
      </Box>
      <Box>
        <Typography
          sx={{
            marginBottom: 4,
            fontSize: { xs: 16, sm: 20 },
            fontWeight: "bold",
            fontFamily: "Raleway",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 14, sm: 18 }, fontFamily: "Raleway" }}
        >
          {body}
        </Typography>
      </Box>
    </Box>
  );
}

function WhoWeHelpContainer() {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ marginX: { xs: 4, lg: 7 } }}
    >
      <Grid container sx={{ padding: 2, maxWidth: {md: 800,  lg: 1200 } }}>
        {content.map((el) => {
          return (
            <Grid key={el.img} item xs={12} sm={6} md={3}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <WWHCard content={el} />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

function WhoWeHelp() {
  return (
    <Stack
      sx={{
        marginTop: { xs: 2, sm: 3, md: 4, lg: 7, xl: 15 },
      }}
    >
      <HeaderRight left={"Who"} right={"we help"} />
      <Typography
        sx={{
          fontSize: { xs: 34, sm: 60, md: 84 },
          fontWeight: "bold",
          fontFamily: "Raleway",
          textShadow: "5px 5px 5px lightgrey",
          textAlign: "center",
          paddingY: { xs: 4, sm: 6},
          
        }}
      >
        anyone...
      </Typography>
      <WhoWeHelpContainer />
    </Stack>
  );
}

export default WhoWeHelp;
