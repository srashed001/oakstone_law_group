import {
  Box,
  Button,
  FormHelperText,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

function ContactBodyForm() {
  return (
    <Stack
      sx={{
        marginX: 3,
        padding: 4,
        boxShadow: {sm: 5},
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <Box sx={{ marginBottom: 3 }}>
        <Typography
          sx={{
            fontSize: 50,
            fontWeight: "bold",
            color: "red",
            fontFamily: "Raleway",
          }}
        >
          don't{" "}
          <Typography
            component={"span"}
            sx={{
              fontSize: 40,
              fontWeight: "bold",
              fontFamily: "Raleway",
              color: "black",
            }}
          >
            wait
          </Typography>
        </Typography>
        <Typography
          sx={{
            fontSize: 20,
            fontFamily: "Raleway",
            marginBottom: 3,
            marginTop: 2,
          }}
        >
          Reach out now for a free consultation - so we can get started on
          finding practical solutions tailored just for you!
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
          Brief Case Description
        </FormHelperText>
        <Button color={"error"}>submit</Button>
      </Stack>
    </Stack>
  );
}

function ContactBodyContent() {
  return (
    <Grid
      container
      sx={{
        paddingY: { xs: 2, sm: 4, lg: 7 },
        width: { xs: 500, sm: 600, md: 900, lg: 1000 },
      }}
    >
      <Grid item sm={12} md={5} sx={{ padding: 2 }}>
        <Stack>
          <Typography
            sx={{
              fontSize: { xs: 20, md: 22 },
              marginBottom: 3,
              fontFamily: "Raleway",
              paddingLeft: 4,
            }}
          >
            Our legal team is here to support you during testing moments,
            offering expert solutions tailored to your specific needs with years
            of experience assisting individuals just like yourself get back on
            their feet. Rest assured that we are dedicated to protecting all
            your rights while helping resolve any debt issues
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 20, md: 22 },
              marginBottom: 3,
              fontFamily: "Raleway",
              paddingX: 5,
              fontWeight: 'bold'
            }}
          >
            Arrange your free consultation today for a confidential discussion
            about how we can guide you towards restoring financial stability in
            your life. We are eager to provide quality service that helps get
            you back on track!
          </Typography>
        </Stack>
      </Grid>
      <Grid item sm={12} md={7} sx={{}}>
        <ContactBodyForm />
      </Grid>
    </Grid>
  );
}

function ContactBody() {
  return (
    <Stack sx={{}}>
      <Stack sx={{}}>
        <Box
          sx={{
            paddingLeft: 4,
            boxShadow: 3,
            backgroundColor: "white",
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
                color: "red",
              }}
            >
              Make
            </Typography>{" "}
            the step
          </Typography>
        </Box>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <ContactBodyContent />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ContactBody;
