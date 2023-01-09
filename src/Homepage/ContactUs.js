import { Box, Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router";

function ContactUs() {
  const navigate = useNavigate();
  return (
    <Stack
      sx={{
        backgroundSize: "100%",
        backgroundImage: "url(weHelp.png)",
        marginTop: { xs: 2, sm: 4, lg: 7, xl: 15 },
        marginX: { xs: 2, sm: 4, lg: 7, xl: 15 },
        marginBottom: { xs: 2, sm: 4, lg: 7, xl: 15 },
        boxShadow: 5,
        borderRadius: 2,
      }}
    >
      <Box
        sx={{
          padding: 2,
          boxShadow: 3,
          marginY: 4,
          backgroundColor: "rgba(256, 256, 256, .8)",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 30, md: 34 },
            paddingY: 3,
            textAlign: "center",
            fontFamily: "Raleway",
          }}
        >
          IF YOU NEED HELP WITH YOUR UNSECURED DEBT
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 20, sm: 30, md: 34 },
            paddingBottom: 5,
            textAlign: "center",
            fontFamily: "Raleway",
            fontWeight: "bold",
          }}
        >
          contact us today for a free consultation
        </Typography>
        <Button
          variant="contained"
          disableRipple
          sx={{
            fontSize: 24,
            padding: 2,
            marginBottom: 3,
            backgroundColor: "rgba(229, 56, 59, .8)",
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

        <Typography
          sx={{
            fontSize: { xs: 34, sm: 50, md: 55 },
            paddingBottom: 5,
            textAlign: "center",
            fontFamily: "Raleway",
            fontWeight: "bold",
          }}
        >
          (215) 804-3333
        </Typography>
      </Box>
      <Box></Box>
    </Stack>
  );
}

export default ContactUs;
