import { Grid, Paper, Stack, Typography, Box, Avatar } from "@mui/material";

const debtTypes = [
  "credit cards",
  "personal loans",
  "business loans",
  "auto loans",
  "medical bills",
  "timeshares",
  "rental agreements",
  "judgements",
  "private student debt",
  "utility bills",
];

function DebtTypeCards({ title }) {
  return (
    <Grid item xs={12} sm={6}>
      <Paper
        sx={{
          backgroundImage: "url(cool-background4.png)",
          backgroundSize: "cover",
          height: "100%",
          width: "100%",
        }}
        elevation={3}
      >
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            backgroundColor: "rgba(256,256,256,.8)",
          }}
        >
          <Typography
            sx={{
              fontSize: { sm: 18, md: 25 },
              fontFamily: "Raleway",
              padding: {xs: 1.5, sm: 2, md: 3},
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Stack>
      </Paper>
    </Grid>
  );
}

function ProvenTrackRecordHeader() {
  return (
    <Stack>
      <Box sx={{ paddingX: { xs: 2, md: 4, lg: 7 }, textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: { xs: 14, sm: 18, md: 22, lg: 26 },
            fontFamily: "Raleway",
            fontWeight: "bold",
            textTransform: "uppercase",
            color: "grey",
          }}
        >
          We work vigorously to defend your interests
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 38, md: 48, lg: 64 },
            fontFamily: "Raleway",
            fontWeight: "bold",
          }}
        >
          Our{" "}
          <Typography
            component={"span"}
            sx={{
              fontSize: { xs: 20, sm: 38, md: 48, lg: 64 },
              fontFamily: "Raleway",
              fontWeight: "bold",
              color: "#284B63",
            }}
          >
            attorneys
          </Typography>{" "}
          are debt relief specialists
        </Typography>
      </Box>
      <Grid container sx={{ height: 10 }}>
        <Grid item xs={2}></Grid>
        <Grid
          item
          xs={10}
          sx={{
            backgroundColor: "grey",
            borderBottomLeftRadius: 3,
            borderBottomRightRadius: 3,
            boxShadow: 5,
          }}
        ></Grid>
      </Grid>
    </Stack>
  );
}

function ProvenTrackRecordContainer() {
  return (
    <Stack>
      <Box
        sx={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center" ,
          marginX: { xs: 2, sm: 4, lg: 7, xl: 15 },
          marginTop: { xs: 2, sm: 4, lg: 7 },
          marginBottom: { xs: 2, sm: 3, lg: 5 },
        }}
      >
        <Avatar
          sx={{
            height: { xs: 0, sm: 200, md: 300, lg: 300, xl: 400 },
            width: { xs: 0, sm: 200, md: 300, lg: 300, xl: 400 },
            boxShadow: 5,
            zIndex: "tooltip",
          }}
          src={"debtAvatar.png"}
        />
        <Box
          sx={{
            maxWidth: { sm: 250, md: 400, lg: 500 },
            marginLeft: { sm: 5, xl: 10 },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 20, md: 20, lg: 22 },
              fontFamily: "Raleway",
              marginY: {xs: 1.5, sm: 3},
              fontWeight: "bold",
              textAlign: {xs: 'center', sm: "left"}
            }}
          >
            Whether you're struggling with debt from a car loan that's gone
            underwater or you can't seem to get out from under the weight of
            your high-interest credit cards, we can help.
          </Typography>
        </Box>{" "}
      </Box>

      <Stack
        sx={{
          padding: { xs: 2, md: 12, lg: 12, xl: 17 },
          backgroundColor: "rgba(40,75,99,.6)",
          boxShadow: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          height: '100%',

          top: { md: -80, lg: -90, xl: -120 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 18, sm: 22, md: 25 },
            fontFamily: "Raleway",
            textAlign: "center",
            marginBottom: 4,
            textDecoration: "underline",
            color: 'white'
          }}
        >
          Explore some of the types of debt we dispute below.
        </Typography>
        <Grid
          spacing={2}
          container
          sx={{
            maxWidth: { xs: 300, sm: 500, md: 800 },
          }}
        >
          {debtTypes.map((debt) => {
            return <DebtTypeCards title={debt} key={debt} />;
          })}
        </Grid>
      </Stack>
    </Stack>
  );
}

function ProvenTrackRecord() {
  return (
    <Stack
      sx={{
        position: "relative",
        marginTop: { xs: 2, sm: 4, md: 7 },
        marginBottom: { xs: 2, sm: 4, md: 0 },
      }}
    >
      <ProvenTrackRecordHeader />
      <ProvenTrackRecordContainer />
    </Stack>
  );
}

export default ProvenTrackRecord;
