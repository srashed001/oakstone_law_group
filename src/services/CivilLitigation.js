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
        Civil litigation is a legal process that resolves disputes between two
        parties. It is the most common way to resolve non-criminal cases such as
        contract disputes, personal injury cases, landlord-tenant disputes, and
        debt collection.
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
          fontWeight: "bold",
        }}
      >
        Hiring an attorney can help ensure that your rights are protected
        throughout every step of civil litigation and provide you with
        experienced legal advice regarding potential outcomes based on similar
        cases in your area. Our legal team can provide valuable guidance on how
        best to collect evidence needed to support your claim(s) as well as any
        potential defenses you may have against those claims made by other
        parties involved in your case.
      </Typography>
    </Stack>
  );
}

function CivilWorks() {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 25,
          fontFamily: "Raleway",
          fontWeight: "bold",
        }}
      >
        How Civil Litigation Works?
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
        The Steps of Civil Litigation Civil lawsuits typically involve four
        steps: filing the complaint, serving the complaint, discovery, and
        trial. Each step has its own unique purpose in the overall process and
        allows both parties to present their sides of the dispute before a judge
        decides on a final resolution. Here is a brief overview of each step:
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
        }}
      >
        STEPS OF CIVIL LITIGATION
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
            Filing The Complaint – This is when one party files a formal
            document with the court asking for relief from another party. The
            complaint outlines the facts of the case and requests relief from
            the court in some form. For example, if someone slips and falls on
            your property due to your negligence, they may file a complaint
            seeking damages for medical expenses or lost wages.
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
            Serving The Complaint – Once the complaint has been filed with the
            court, it must be served upon the defendant (the party being sued).
            This can be done in person or by mail depending on applicable state
            laws. Once served, the defendant must respond within a certain
            period of time (usually 30 days) or risk being held in default by
            the court.
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
            Discovery – This stage involves both parties exchanging information
            related to their case through written questions (interrogatories),
            requests for documents (subpoenas), depositions (sworn testimony
            taken outside of court), and expert testimony from witnesses who
            have knowledge about certain aspects of the case. The goal here is
            for both sides to get all relevant evidence before trial so that
            they can be prepared for any surprises that may arise during
            cross-examination.
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
            Trial - This final stage involves both parties presenting their
            arguments and evidence before a judge or jury. After both parties
            have pled their case, a judge or jury makes a judgment in favor of
            one of the parties, based on the facts presented in court.
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
        Civil litigation is a complex process that requires knowledge of state
        laws, courtroom procedures, and legal strategy building techniques that
        only experienced attorneys possess. Having our legal team by your side
        can provide invaluable guidance throughout this process as we possess
        expertise that is necessary for success in a civil lawsuit.
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
            We ensure all paperwork is being completed correctly and adequately
            protecting your rights throughout the process.
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
            We are familiar with local court rules and procedures so you never
            have to stress about making costly mistakes.
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
            We have access to resources that can help them build your case.
            These resources include research materials, expert witnesses,
            investigators, and other professionals.
          </Typography>
        </li>
      </ul>
    </Stack>
  );
}

function CivilLitigation() {
  return (
    <Stack
      sx={{
        paddingX: { xs: 2, sm: 6, md: 12 },
        paddingY: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Intro />
      <CivilWorks />
      <OurServices />
    </Stack>
  );
}

export default CivilLitigation;
