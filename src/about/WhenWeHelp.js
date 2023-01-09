import {
  Box,
  Button,
  Stack,
  Typography,
  Grid,
  TextField,
  FormHelperText,
} from "@mui/material";
import { textAlign } from "@mui/system";
import { useNavigate } from "react-router";
import HeaderLeft from "./HeaderLeft";

function WhenWeHelpForm() {
  return (
    <Stack
      sx={{
        marginLeft: 2,
        padding: { sm: 4 },
        paddingX: { xs: 2, sm: 4 },
        marginX: { sm: 4 },
        boxShadow: { sm: 5 },
        borderRadius: 2,
        backgroundColor: "white",
      }}
    >
      <Box sx={{ marginBottom: 3 }}>
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
        <Button color={"error"}>submit</Button>
      </Stack>
    </Stack>
  );
}

function WhenWeHelpBody() {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        paddingY: { xs: 2, sm: 4, lg: 7 },
        width: { xs: 500, sm: 600, md: 900, lg: 1000 },
      }}
    >
      <Grid item sm={12} md={5} sx={{ padding: 3 }}>
        <Stack>
          <Typography
            sx={{
              fontSize: { xs: 30, sm: 50, md: 70, lg: 90 },
              fontWeight: "bold",
              marginBottom: 3,
              fontFamily: "Raleway",
              textShadow: "5px 5px 5px lightgrey"

            }}
          >
            Today!
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 20, md: 22 },
              fontWeight: "bold",
              marginBottom: 3,
              fontFamily: "Raleway",
            }}
          >
            Are you weighed down by creditor harassment and financial worries?
            Our legal team has extensive experience helping people just like you
            get back on their feet.
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 20, md: 22 },
              marginBottom: 3,
              fontFamily: "Raleway",
            }}
          >
            Don't wait – take charge of your future today with a free
            consultation from us!
          </Typography>
          <Box
            sx={{
              marginY: 3,
            }}
          >
            <Button
              variant="contained"
              disableRipple
              sx={{
                fontSize: 24,
                boxShadow: 5,
                padding: 2,
                backgroundColor: "grey",
                color: "white",
                "&:hover": {
                  backgroundColor: "lightgrey",
                  color: "black",
                },
              }}
              onClick={() => {
                navigate("/contact");
              }}
            >
              CONTACT US TODAY
            </Button>
          </Box>
        </Stack>
      </Grid>
      <Grid item sm={12} md={7} sx={{}}>
        <WhenWeHelpForm />
      </Grid>
    </Grid>
  );
}

function WhenWeHelp() {
  return (
    <Stack
      sx={{
        marginTop: { xs: 4, sm: 8, lg: 14, xl: 30 },
      }}
    >
      <HeaderLeft left={"WHEN"} right={"can we help"} />
      <Stack>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WhenWeHelpBody />
        </Stack>
      </Stack>
      <Grid container>
        <Grid item sx={{}} xs={4}></Grid>
        <Grid item sx={{ height: 10, backgroundColor: "red" }} xs={8}></Grid>
      </Grid>
    </Stack>
  );
}

export default WhenWeHelp;
