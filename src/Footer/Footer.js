import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <Stack
      sx={{
        backgroundImage: "url(footerBackground.jpg)",
      }}
    >
      <Grid
        container
        sx={{
          backgroundColor: "rgba(0,0,0,.7)",
          padding: 2,
        }}
      >
        <Grid item xs={12} md={6}>
          <Stack sx={{}}>
            <Box component={"img"} src={"logoWhite.png"} maxWidth={800} />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6} sx={{}}>
          <Box
            sx={{
              display: "inline-flex",
              width: "100%",
              justifyContent: "space-around",
              padding: 1,
            }}
          >
            <Box
              sx={{
                padding: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontweight: "bold",
                  color: "red",
                }}
              >
                Addresss
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "white",
                }}
              >
                123 S. Broad St. #1640
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "white",
                }}
              >
                Philadelphia, PA 19109
              </Typography>
            </Box>
            <Box
              sx={{
                padding: 1,
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: 16,
                  fontweight: "bold",
                  color: "red",
                }}
              >
                Phone Number
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "white",
                }}
              >
                (215) 804-3333
              </Typography>
            </Box>
            <Box
              sx={{
                padding: 1,
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: 16,
                  fontweight: "bold",
                  color: "red",
                }}
              >
                Email Addresss
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  color: "white",
                }}
              >
                service@gallantlawpc.com
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <FooterBody />
    </Stack>
  );
}

function FooterBody() {
  return (
    <Stack sx={{ backgroundColor: "rgba(256,256,256,.7)" }}>
      <Box
        sx={{
          display: "inline-flex",
          width: "100%",
          justifyContent: "space-around",
          padding: 1,
          marginY: 5,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              color: "red",
            }}
          >
            Quick Links
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
              Home
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/about"}
            >
              About
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/services"}
            >
              Services
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/resources"}
            >
              Resources
            </Link>
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to={"/contact"}
            >
              Contact Us
            </Link>
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 20,
              fontWeight: "bold",
              color: "red",
            }}
          >
            Services
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Debt Litigation
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Bankruptcy
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Civil Litigation
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Commercial Litigation
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Real Estate Litigation
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Debt Relief
          </Typography>
          <Typography
            sx={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Collections Harrassment & FDCPA
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginY: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: 36,
            textAlign: "center",
            fontFamily: "Raleway",
          }}
        >
          TRUSTED LEGAL SOURCE FOR DEBT RESOLUTION AND LITIGATION
        </Typography>
        <Typography
          sx={{
            fontSize: 24,
            textAlign: "center",
            fontFamily: "Raleway",
          }}
        >
          servicing 48 states
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: "rgba(0,0,0, .7)",
          textAlign: "center",
          padding: 3,
        }}
      >
        <Typography sx={{ color: "white", fontSize: 12 }}>
          {" "}
          &copy; 2022 GALLANT LAW GROUP ALL RIGHTS RESERVED.
        </Typography>
        <Typography sx={{ color: "white", fontSize: 10 }}>
          All trademarks, service marks, trade names, product names, logos and
          trade dress appearing on our website are the property of their
          respective owners.
        </Typography>
      </Box>
    </Stack>
  );
}

export default Footer;
