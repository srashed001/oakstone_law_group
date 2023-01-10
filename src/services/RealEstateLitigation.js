import { Grid, Stack, Typography } from "@mui/material";

function Intro() {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
        }}
      >
        Real estate litigation is a type of legal dispute that involves real
        estate transactions. It can involve disputes between buyers and sellers,
        landlords and tenants, or homeowners’ associations and homeowners. While
        there are various types of real estate litigation cases, they all
        involve a disagreement or conflict over property rights.
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
          fontWeight: "bold",
        }}
      >
        we understand that real estate litigation can be complex and
        overwhelming. Our experienced attorneys have years of experience helping
        clients navigate the complexities of real estate laws in their state. We
        offer personalized attention and legal representation tailored
        specifically to our clients’ needs so they can feel confident knowing
        they are getting the best possible outcome in their case. We also
        provide aggressive representation in court when needed so our clients
        can rest assured that their rights are protected at every step of the
        process.
      </Typography>
    </Stack>
  );
}

function WhatIs() {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 25,
          fontFamily: "Raleway",
          fontWeight: "bold",
        }}
      >
        What is Real Estate Litigation?
      </Typography>
      <Grid container>
        <Grid
          item
          xs={8}
          sx={{
            height: 6,
            backgroundColor: "#284B63",
            borderRadius: 2,
            boxShadow: 2,
          }}
        ></Grid>
        <Grid item xs={4} sx={{}}></Grid>
      </Grid>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginY: 3,
        }}
      >
        Real estate litigation refers to the legal action taken when someone has
        a dispute with another party about real property. These disputes can
        involve anything from contract breaches to zoning issues and are usually
        resolved through negotiation or court proceedings. In some cases, the
        parties involved may be able to settle the matter without even going to
        trial. However, if the dispute remains unresolved, it may be necessary
        for one or both sides to take their case to court and seek a judgment
        from a judge or jury.
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
        }}
      >
        TYPES OF REAL ESTATE LITIGATION CASES
      </Typography>
      <ul>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            Boundary Line Disputes
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            Deed Restriction Violations
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            Title Claims
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            Fraudulent Conveyance Actions
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            Foreclosure Defense{" "}
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            Nuisance Claims
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            Landlord-Tenant Disputes
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            Quiet Title Actions
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            Partition Actions
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            More...
          </Typography>
        </li>
      </ul>
    </Stack>
  );
}

function OurServices() {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 25,
          fontFamily: "Raleway",
          fontWeight: "bold",
        }}
      >
        Our Services
      </Typography>
      <Grid container>
        <Grid
          item
          xs={8}
          sx={{
            height: 6,
            backgroundColor: "#284B63",
            borderRadius: 2,
            boxShadow: 2,
          }}
        ></Grid>
        <Grid item xs={4} sx={{}}></Grid>
      </Grid>

      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginY: 3,
        }}
      >
        Our team is comprised of highly experienced attorneys who have an
        in-depth understanding of the laws governing these cases as well as the
        local real estate markets throughout your state. We understand that no
        two cases are alike so we take the time to get to know our clients and
        their unique situations in order to develop customized solutions for
        their needs.
      </Typography>
      <ul>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            We have extensive knowledge and experience handling all types of
            real estate cases for both individuals and businesses alike.
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            We understand how to use alternative dispute resolution methods such
            as mediation, which in some cases can dramatically decrease cost to
            both parties.
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            We review, prepare, and submit all relevant documents related to
            your case, in a timely manner, and advise you as to how best to
            proceed.
          </Typography>
        </li>
        <li>
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Raleway",
              marginBottom: 3,
            }}
          >
            We provide you legal representation for any court proceedings should
            they arise.
          </Typography>
        </li>
      </ul>
    </Stack>
  );
}

function RealEstateLitigation() {
  return (
    <Stack
      sx={{
        paddingX: { xs: 2, sm: 6, md: 12 },
        paddingY: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Intro />
      <WhatIs />
      <OurServices />
    </Stack>
  );
}

export default RealEstateLitigation;
