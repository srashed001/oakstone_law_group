import { Box, Stack, Typography } from "@mui/material";

function ContactInfo() {
  return (
    <Stack>
      <Stack
        sx={{
          backgroundColor: "rgba(5, 0,0, .8)",
          color: "white",
          boxShadow: 10,
          marginY: { xs: 2, sm: 4, md: 7, lg: 10 },
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: 2, sm: 4, md: 7, lg: 10 },
          }}
        >
          <Box
            component={"img"}
            src={"contactInfo.png"}
            sx={{
              maxWidth: { xs: 0, sm: 200, md: 400, lg: 600, xl: 700 },
              boxShadow: 5,
              borderRadius: 2,
            }}
          />

          <Stack
            sx={{
              maxWidth: { lg: 500 },
              padding: { xs: 2, sm: 4, md: 6, lg: 8 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 22, sm: 24, md: 32 },
                fontWeight: "bold",
                fontFamily: "Raleway",
              }}
            >
              CONTACT INFORMATION
            </Typography>
            <Stack sx={{height: 5, backgroundColor: 'red', borderRadius: 2, boxShadow: 10}} />
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 22, md: 25 },

                  marginTop: 2,
                  fontFamily: "Raleway",

                }}
              >
                Head Attorney:
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 24, md: 27 },
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                }}
              >
                Ty Dollasigns
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 22, md: 25 },

                  marginTop: 2,
                  fontFamily: "Raleway",

                }}
              >
                Address:
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 24, md: 27 },
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                }}
              >
                123 S. Broad St. #1640
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 24, md: 27 },
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                }}
              >
                Philadelphia, PA 19109
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 22, md: 25 },

                  marginTop: 2,
                  fontFamily: "Raleway",

                }}
              >
                Phone Number:
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 24, md: 27 },
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                }}
              >
                (215) 804-3333
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: 20, sm: 22, md: 25 },

                  marginTop: 2,
                  fontFamily: "Raleway",

                }}
              >
                Email Address:
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 22, sm: 24, md: 27 },
                  fontWeight: "bold",
                  fontFamily: "Raleway",
                }}
              >
                service@gallantlawpc.com
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default ContactInfo;
