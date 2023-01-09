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
        Everyone has received a dreaded call from a debt collector. And, like
        the plague, these calls seem to keep coming no matter how hard you try
        to avoid them. But it’s important that you don’t ignore them—even if you
        don't owe the debt in question. If you fail to respond, debt collectors
        may continue their collection efforts, send negative information to
        credit bureaus and even take legal action against you.{" "}
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
          fontWeight: "bold",
        }}
      >
        Fortunately, our services are here to help! We provide expert solutions
        for all your debt resolution woes so that you can trust us to do what
        needs to be done in a timely and completely legal manner. With us on
        your side, you can rest assured that everything will be taken care of
        with complete transparency.{" "}
      </Typography>
    </Stack>
  );
}
function DebtWorks() {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 25,
          fontFamily: "Raleway",
          fontWeight: "bold",
        }}
      >
        How Debt Collectors Work
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
        Debt collectors contact people who have defaulted on payments or have
        not paid their debts in full. These companies are hired by creditors and
        usually operate independently from them. The job of the debt collector
        is to get payment for a creditor as soon as possible by collecting on an
        unpaid bill or loan. To do this, they employ techniques such as calling
        people multiple times in a day or sending threatening letters or emails.
        They also might threaten legal action if payment isn’t made immediately.
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
        }}
      >
        Unfortunately, some debt collectors use unscrupulous tactics like
        harassing people with phone calls or making false statements about the
        amount someone owes in order to pressure them into paying up quickly.
        It's important to know your rights when dealing with these companies and
        understand that they must operate within certain laws set forth by the
        Federal Trade Commission (FTC) and other regulatory bodies which outline
        what they can and cannot do while attempting collection activities.{" "}
      </Typography>
    </Stack>
  );
}
function Knowledge() {
  return (
    <Stack>
      <Typography
        sx={{
          fontSize: 25,
          fontFamily: "Raleway",
          fontWeight: "bold",
        }}
      >
        Knowledge is Power
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
        It is important for consumers to be aware of their rights and
        obligations when it comes to dealing with debt collectors. At times like
        these, knowledge is power; being armed with information gives you more
        confidence and control over the whole process. As such, it helps to
        understand how debt collection works; this includes understanding how
        long they are allowed to collect debts (generally up to 6 years), what
        types of information they need before they can begin collection
        proceedings (the original creditor's name plus details about the amount
        owed), and how old debts are treated (debts older than 7 years are no
        longer admissible in court). All this information will help you know
        where you stand against any collector who tries to take advantage of
        your lack of knowledge or awareness.
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
        When working with us, we will provide personalized advice that takes
        into account your unique situation – there is no one-size-fits-all
        solution when it comes to dealing with debt collectors! We'll also
        ensure that all communication is handled professionally and according to
        federal laws so your rights are always protected. And most importantly,
        we'll make sure that everything is resolved in a timely manner so you
        don't have to worry about being hounded by creditors indefinitely.{" "}
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
            We ensure all communication is handled professionally and according
            to federal laws so your rights are always protected.
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
            We ensure that everything is resolved in a timely manner so you
            don't have to worry about important due dates.
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
            We stay up-to-date on changes in laws related to collections and
            debts so that we can provide accurate advice based on current
            regulations.
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
            We know how creditors operate so we devise strategies which result
            in successful resolutions for our clients
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
            We provide you with legal representation to appear in court on your
            behalf in the event civil action is filed.{" "}
          </Typography>
        </li>
      </ul>
    </Stack>
  );
}

function DebtResolution() {
  return (
    <Stack
      sx={{
        paddingX: { xs: 2, sm: 6, md: 12 },
        paddingY: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Intro />
      <DebtWorks />
      <Knowledge />
      <OurServices />
    </Stack>
  );
}

export default DebtResolution;
