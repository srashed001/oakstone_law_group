import {
  Box,
  Button,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function JoinUsForm() {
  return (
    <Stack
      sx={{
        marginLeft: 2,
        padding: { sm: 4 },
        paddingX: { xs: 2, sm: 4 },
        marginX: { sm: 4 },
        boxShadow: { sm: 5 },
        borderRadius: 2,
      }}
    >
      <Box sx={{ marginBottom: 3 }}>
        <Typography
          sx={{
            fontSize: { xs: 25, sm: 35, md: 40 },
            fontWeight: "bold",
            fontFamily: "Raleway",
          }}
        >
          we{" "}
          <Typography
            component={"span"}
            sx={{
              fontSize: { xs: 30, sm: 40, md: 50 },
              fontWeight: "bold",
              color: "#284B63",
              fontFamily: "Raleway",
            }}
          >
            listen
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 25, md: 30 },
            fontFamily: "Raleway",
          }}
        >
          schedule a free and confidential consultation
        </Typography>
      </Box>
      <Stack component={"form"}>
        <TextField id="firstName" variant="standard" />
        <FormHelperText sx={{ fontSize: 16 }} id="firstName">
          First Name
        </FormHelperText>
        <TextField id="lastName" variant="standard" />
        <FormHelperText sx={{ fontSize: 16 }} id="name">
          Last Name
        </FormHelperText>
        <TextField id="email" variant="standard" />
        <FormHelperText sx={{ fontSize: 16 }} id="email">
          Email
        </FormHelperText>
        <TextField id="phoneNumber" variant="standard" />
        <FormHelperText sx={{ fontSize: 16 }} id="phoneNumber">
          Phone Number
        </FormHelperText>
        <TextField multiline rows={4} id="description" variant="standard" />
        <FormHelperText sx={{ fontSize: 16 }} id="description">
          Explain your case
        </FormHelperText>
        <Button color={"primary"}>submit</Button>
      </Stack>
    </Stack>
  );
}

function JoinUsBody() {
  return (
    <Grid
      container
      sx={{
        paddingY: { xs: 2, sm: 4, lg: 7 },
        maxWidth: { xs: 500, sm: 600, md: 900, lg: 1000 },
      }}
    >
      <Grid item sm={12} md={5} sx={{ padding: 3 }}>
        <Stack>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 20, md: 22 },
              fontWeight: "bold",
              marginBottom: 3,
              fontFamily: "Raleway",
            }}
          >
            If you're being hounded by the creditors and find yourself in debt,
            our legal team is here to help. With years of experience helping
            people just like us get back on their feet we can provide an expert
            solution for all your needs!
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 16, sm: 20, md: 22 },
              marginBottom: 3,
              fontFamily: "Raleway",
            }}
          >
            We understand that, sometimes in life there are difficult moments
            when you need help. We want to provide this assistance and ensure
            your legal rights are protected so don't hesitate - contact us
            today!
          </Typography>
        </Stack>
      </Grid>
      <Grid item sm={12} md={7} sx={{}}>
        <JoinUsForm />
      </Grid>
    </Grid>
  );
}

function JoinUs() {
  return (
    <Stack sx={{}}>
      <Stack>
        <Box
          sx={{
            paddingLeft: 4,
            textAlign: "center",
          }}
        >
          <Typography
            component={"span"}
            sx={{
              fontSize: { xs: 26, sm: 54, md: 94 },
              fontFamily: "Raleway",
              fontWeight: "bold",
              textShadow: '4px 4px 4px lightgrey'
            }}
          >
            Contact us today
          </Typography>{" "}
        </Box>
        <Grid container sx={{ height: 10 }}>
          <Grid item xs={2}></Grid>
          <Grid
            item
            xs={10}
            sx={{
              backgroundColor: "#3C6E71",
              borderTopLeftRadius: 3,
              borderBottomLeftRadius: 3,
              boxShadow: 5,
            }}
          ></Grid>
        </Grid>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <JoinUsBody />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default JoinUs;
