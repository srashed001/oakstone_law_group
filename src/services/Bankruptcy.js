import { Grid, Stack, Typography } from "@mui/material";

function BackruptcyIntro() {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
        }}
      >
        Bankruptcy can seem like a scary word– it’s often associated with
        failure, and it carries a negative stigma. But for some people, filing
        for bankruptcy can be the best option when it comes to dealing with
        financial hardship.
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
          fontWeight: "bold",
        }}
      >
        Finding an experienced attorney who understands both state and federal
        laws related to bankruptcies should be considered an essential step in
        this process. Our legal teams understands all the intricacies related to
        filing for bankruptcy and will help ensure that everything goes as
        smoothly as possible during this stressful time in your life.
      </Typography>
    </Stack>
  );
}

function WhatisBankrupcy() {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 25,
          fontFamily: "Raleway",
          fontWeight: "bold",
        }}
      >
        What is Bankruptcy?
      </Typography>
      <Grid container>
        <Grid
          item
          xs={8}
          sx={{
            height: 6,
            backgroundColor: "red",
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
        Bankruptcy is a legal process that allows individuals or businesses to
        get out from under their debts. It involves filing a petition in federal
        court which indicates that you are unable to pay your creditors back,
        and therefore need protection from them. Once this petition is filed,
        most creditors are legally prohibited from attempting to collect
        payments from you or taking any other action against you such as
        repossessing property or garnishing wages.
      </Typography>
    </Stack>
  );
}

function TypesOfBankruptcy() {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
        }}
      >
        TYPES OF BANKRUPTCY
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
            Chapter 7 - Allows individuals to discharge their debts without
            having to make payments over time; however, certain exemptions
            apply, meaning that some assets may still need to be sold in order
            to pay down debt.
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
            Chapter 11 - This option involves restructuring your existing
            obligations, however it can be a long and costly legal process
            depending on its litigious nature.
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
            Chapter 12 - Available only to "family farmers" and "family
            fisherman", this type of filing involves restructuring existing debt
            and comes with debt limits.
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
            Chapter 13 - Allows individuals to keep their property while
            reorganizing their debts into a payment plan that generally lasts
            three to five years.
          </Typography>
        </li>
      </ul>
    </Stack>
  );
}

function BenefitsOfBankruptcy() {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 25,
          fontFamily: "Raleway",
          fontWeight: "bold",
        }}
      >
        Benefits of Bankrupcy
      </Typography>
      <Grid container>
        <Grid
          item
          xs={8}
          sx={{
            height: 6,
            backgroundColor: "red",
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
        There are several financial benefits associated with filing for
        bankruptcy such as stopping collection activities from creditors
        including wage garnishment and repossession of personal items such as
        furniture and cars. It also stops utility shut-offs which is an
        important aspect during times of financial hardship. Moreover, filing
        for bankruptcy could lower your monthly payments on credit cards and
        other unsecured debts which gives you more room in your budget -
        allowing you to save money for future purchases or investments! Finally,
        if you own any real estate property then a Chapter 13 filing helps
        protect it from foreclosure proceedings initiated by lenders who are
        unsatisfied with missed mortgage payments or delinquent tax bills!
      </Typography>
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
            backgroundColor: "red",
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
        Filing for bankruptcy can be a complicated process that involves many
        steps. Our experienced attorneys will help guide you through the process
        step by step so that all of your legal rights are protected throughout
        the proceeding and ensure that all paperwork is filled out correctly so
        there are no delays or issues down the line.
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
            We examine your case and advise you on the which type of bankruptcy
            is best for your situation.
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
            We ensure all documents are filed timely/correctly and explain all
            the nuances and procedures associated with your proceeding.
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
            We protect your interests if any issues arise during the
            proceedings, such disputes over assets or claims filed by your
            creditors.
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

function Bankruptcy() {
  return (
    <Stack
      sx={{
        paddingX: { xs: 2, sm: 6, md: 12 },
        paddingY: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <BackruptcyIntro />
      <WhatisBankrupcy />
      <TypesOfBankruptcy />
      <BenefitsOfBankruptcy />
      <OurServices />
    </Stack>
  );
}

export default Bankruptcy;
