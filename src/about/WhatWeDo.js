import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import HeaderLeft from "./HeaderLeft";
import { useNavigate } from "react-router";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DoneIcon from "@mui/icons-material/Done";
import { fontWeight, textAlign } from "@mui/system";

const statement = `Our experienced team of lawyers provide a legal means for reducing
your debt load and resolving your financial problems.. The truth is debt left ignored will not go anywhere, and the damage
it can have on your credit report can limit your financial freedom.. Creditors and debt collectors make mistakes, and here at Triumph Law
Group, we have the expertise and resources to leverage those
mistakes to create favorable outcomes for our clients.
`;

const wWDCards = [
  {
    id: "easy",
    header: "PERSONALIZED",
    body: `At our firm, we believe personalized service is essential. To ensure you get the best attention possible, once you enroll with us an Account Manager will be assigned to serve as your go-to contact for all legal matters or queries that may arise.`,
    icon: <DoneIcon />,
    img: "personalized.png",
  },
  {
    id: "doIt",
    header: "EASY",
    body: `We handle every step of your debt resolution process. We only expect our clients to answer our calls, read our emails, and send us all correspondence they receive. We do the rest.`,
    icon: <EmojiPeopleIcon />,
    img: "easy.png",
  },
  {
    id: "affordable",
    header: "AFFORDABLE",
    body: "We want to make sure our services are accessible and affordable. We exercise the ability to work with our clients when it comes to our retainer payment. We can break down the cost of our service into montly payments that you can afford.",
    icon: <AttachMoneyIcon />,
    img: "affordable.png",
  },
];

function WWDCard({ header, body, icon, img }) {
  return (
    <Card
      elevation={0}
      sx={{ backgroundColor: "inherit", margin: 2, padding: 2 }}
    >
      <CardHeader
        sx={{}}
        avatar={icon}
        title={
          <Typography
            sx={{ fontFamily: "Raleway", fontSize: 20, fontWeight: "bold" }}
          >
            {header}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Paella dish"
        sx={{ borderRadius: 2, boxShadow: 5 }}
      />
      <CardContent>
        {body.split(". ").map((sent, i) => {
          const fontWeight = i === 0 ? "bold" : "normal";
          console.log(i, fontWeight);
          const fontSize = i === 0 ? { xs: 16, sm: 20 } : { xs: 16, sm: 18 };
          return (
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontSize,
                fontWeight,
                marginBottom: 2,
              }}
            >
              {sent}
            </Typography>
          );
        })}
      </CardContent>
    </Card>
  );
}

function ContainerBody() {
  const navigate = useNavigate();

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        padding: { xs: 2, sm: 3, md: 5 },
      }}
    >
      <Box
        sx={{
          textAlign: "right",
          display: "flex",
          justifyContent: { xs: "center" },
          alignItems: { xs: "center" },
          padding: { xs: 2, sm: 3, md: 5 }
        }}
      >
        <Box component={'img'} src={"lawT.png"} sx={{
          maxWidth: {xs: 0, md: 200, lg: 300},
          paddingRight: {xs: 2, sm: 4, md: 6, lg: 8}
        }} />
        <Box
          sx={{
            maxWidth: { sm: 500, md: 500, lg: 600 },
            borderLeft: 1,
            paddingY: 4,
            paddingLeft: 2,
          }}
        >
          {statement.split(". ").map((s, i) => {
            const fontWeight = i === 0 ? "bold" : "normal";
            const fontSize = i === 0 ? { xs: 20, sm: 22, md: 25 } : { xs: 18, sm: 20, md: 22 };

            return (
              <Typography
                sx={{
                  fontSize,
                  fontFamily: "Raleway",
                  fontWeight,
                  width: "100%",
                  textAlign: "left",
                  marginBottom: 2,
                }}
              >
                {s}
              </Typography>
            );
          })}
        </Box>
      </Box>
      <Button
        variant="contained"
        disableRipple
        sx={{
          fontSize: 24,
          padding: 2,
          marginBottom: 3,
          backgroundColor: "rgba(229, 56, 59, 1)",
          color: "white",
          "&:hover": {
            backgroundColor: "lightgrey",
            color: "black",
          },
        }}
        onClick={() => {
          navigate("/services");
        }}
      >
        Learn more about our services
      </Button>
    </Stack>
  );
}
function MakeServices() {
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        paddingY: { xs: 2, sm: 4, md: 6, lg: 10 },
        marginTop: { xs: 2, sm: 4, md: 6 },
        backgroundColor: "rgba(0, 0, 0, .04)",
        boxShadow: 5,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 30, sm: 40, md: 50 },
          fontWeight: "bold",
          fontFamily: "Raleway",
          textShadow: "2px 2px 2px lightgrey",
          textAlign: "center",
        }}
      >
        We make our services...
      </Typography>
      <Grid container sx={{ maxWidth: { md: 900, lg: 1000 } }}>
        {wWDCards.map((card) => {
          return (
            <Grid item xs={12} md={4} alignItems={"center"} sx={{}}>
              <WWDCard
                key={card.id}
                img={card.img}
                header={card.header}
                body={card.body}
                icon={card.icon}
              />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
function WhatWeDoContainer() {
  return (
    <Stack>
      <ContainerBody />
      <MakeServices />
    </Stack>
  );
}

function WhatWeDo() {
  return (
    <Stack
      sx={{
        marginTop: { md: 4, lg: 7, xl: 15 },
        marginLeft: 0,
      }}
    >
      <HeaderLeft left={"WHAT"} right={"we do"} />
      <WhatWeDoContainer />
    </Stack>
  );
}

export default WhatWeDo;
