import { DraftsOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  Stack,
  styled,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import HeaderRight from "./HeaderRight";

const pages = {
  0: <MissionCard />,
  1: <VisionCard />,
  2: <ValuesCard />,
};

const headers = {
  0: "Mission",
  1: "Vision",
  2: "Values",
};

const values = [
  {
    title: "Respect Individuals",
    body: `Showing respect for each person and their unique perspectives is an essential part of creating a productive environment. 
    `,
  },
  {
    title: "Deliver Excellence",
    body: `At every opportunity, we strive to exceed expectations and achieve extraordinary results.`,
  },
  {
    title: "Embrace Change",
    body: `We welcome progress and invigorate our approach with the power of transformation. `,
  },
  {
    title: "Foster Collaboration",
    body: `Our team thrives on the collective insights we gain when collaborating with each other and our clients.`,
  },
];

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    width: "100%",
    backgroundColor: "#284B63",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: "bold",
    fontFamily: "Raleway",
    padding: theme.spacing(4),
    color: "grey",
    "&.Mui-selected": {
      color: "black",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

function MissionCard() {
  return (
    <Stack
      sx={{
        padding: 3,
        marginX: { sm: 3, md: 4 },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: { xs: 20, sm: 24, md: 26 },
            fontWeight: "bold",
          }}
        >
          Oakstone Law Group intends to be the most innovative solution partner
          in the legal sector, powering our clients to success with
          comprehensive debt relief services. Our cutting-edge technology,
          expertise and customer orientation will gives us an edge over
          competitors as we seek to create value for stakeholders while keeping
          our clients' evolving needs at heart. We aim to take strides towards
          modernizing legal proceedings with advanced business solutions and
          technological developments that drive progress even further.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: { xs: 16, sm: 20, md: 22 },
            marginY: 3,
          }}
        >
          We strive to be the US leader in debt relief services by building on
          our technologies, competencies and customer interests, and creating
          value for our stakeholders and customers.
        </Typography>
      </Box>
    </Stack>
  );
}

function VisionCard() {
  return (
    <Stack
      sx={{
        padding: 3,
        marginX: { sm: 3, md: 4 },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: { xs: 20, sm: 24, md: 26 },
            fontWeight: "bold",
          }}
        >
          We have set our sights on becoming the premier debt relief service
          provider in America. To be the US leader in debt relief services.
          Building on our technologies, competencies and customer interests, and
          creating value for our stakeholders and customers. We’ll achieve this
          by focusing on the intersection of our client’s emerging needs and the
          acceleration of legal work using the latest business and technological
          change.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: { xs: 16, sm: 20, md: 22 },
            marginY: 3,
          }}
        >
          Our diversely talented employees are renowned as leaders within their
          industries; we believe fuelling this talent is essential for continued
          success! Together, we can strive toward a future of improved
          operations and better futures through inspired collaboration and
          unimagined possibilities.
        </Typography>
      </Box>
    </Stack>
  );
}

function ValueCard({ title, body }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
      }}
    >
      <Box
        sx={{
          marginX: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Avatar
          sx={{
            height: { md: 100 },
            width: { md: 100 },
            fontSize: { md: 40 },
            boxShadow: 3,
            // backgroundImage: "url(redTriBack.png)",
            // backgroundSize: "cover",
            backgroundColor: '#284B63',
            color: "white",
          }}
        >
          {title[0].toUpperCase()}
        </Avatar>
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: { xs: 20, sm: 22, md: 24 },
            fontWeight: "bold",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: { xs: 16, sm: 18, md: 20 },
          }}
        >
          {body}
        </Typography>
      </Box>
    </Box>
  );
}

function ValuesCard() {
  return (
    <Stack
      sx={{
        marginX: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontSize: { xs: 18, sm: 22, md: 24 },
            fontWeight: "bold",
          }}
        >
          We believe these principles ensure compassionate treatment of each
          other as well as encapsulate what helps shape us into who we strive to
          be:
        </Typography>
      </Box>
      <Grid
        container
        sx={{
          marginTop: 3,
        }}
      >
        {values.map((value) => {
          return (
            <Grid item xs={12} sm={6}>
              <ValueCard {...value} />
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

function WhyWeFightTabs({ val, handleChange }) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{}}>
        <StyledTabs
          sx={{
            marginTop: 2,
            marginLeft: 2,
          }}
          value={val}
          onChange={handleChange}
          aria-label="MVV"
        >
          <StyledTab
            label="Mission"
            sx={{
              padding: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: 20, sm: 30, md: 45 },
            }}
          />
          <StyledTab
            label="Vision"
            sx={{
              padding: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: 20, sm: 30, md: 45 },
            }}
          />
          <StyledTab
            label="Values"
            sx={{
              padding: { xs: 2, sm: 3, md: 4 },
              fontSize: { xs: 20, sm: 30, md: 45 },
            }}
          />
        </StyledTabs>
      </Box>
    </Box>
  );
}

function ContainerHeader({ header }) {
  const [first, ...rest] = header;
  return (
    <Stack sx={{ paddingX: 3 }}>
      <Box>
        <Typography
          component={"span"}
          sx={{
            color: "#284B63",
            fontFamily: "Raleway",
            fontSize: { xs: 54, sm: 70, md: 94 },
            fontWeight: "bold",
            textShadow: "5px 5px 5px lightgrey"
          }}
        >
          {first}
        </Typography>
        <Typography
          component={"span"}
          sx={{
            fontFamily: "Raleway",
            fontSize: { xs: 34, sm: 50, md: 74 },
            fontWeight: "bold",
            textShadow: "5px 5px 5px lightgrey"
          }}
        >
          {rest}
        </Typography>
      </Box>
    </Stack>
  );
}

function WhyWeFightContainer({ val }) {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: "center",
        alignItems: { xs: "center", lg: "flex-start" },
      }}
    >
      <ContainerHeader header={headers[val]} />
      <Stack
        sx={{
          maxWidth: { md: 800, lg: 1000 },
        }}
      >
        {pages[val]}
      </Stack>
    </Stack>
  );
}

function WhyWeFight({ val, handleChange }) {
  return (
    <Stack
      sx={{
        marginTop: { xs: 2, sm: 3, md: 4, lg: 7, xl: 15 },
      }}
    >
      <HeaderRight left={"WHY"} right={"we fight"} />
      <Stack
        sx={{
          padding: { xs: 2, sm: 3, md: 4, lg: 7, xl: 15 },
        }}
      >
        <WhyWeFightTabs val={val} handleChange={handleChange} />
        <WhyWeFightContainer val={val} />
      </Stack>
    </Stack>
  );
}

export default WhyWeFight;
