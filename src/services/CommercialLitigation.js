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
        Commercial litigation is a legal term used to describe disputes between
        two businesses or parties over contractual matters, such as breach of
        contract, fraud, negligence, or other issues that arise from business
        transactions. The dispute may be resolved through negotiation between
        the parties or require court action if they are unable to reach an
        agreement. It is important to note that if you are involved in a
        commercial litigation case, there can be significant financial
        implications for both sides depending on the outcome of the case.
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
          fontWeight: "bold",
        }}
      >
        Whether you are facing a contract dispute or another type of commercial
        litigation matter, it is wise to seek out legal representation from an
        experienced lawyer who specializes in business law. Our team of
        qualified attorneys will be able to provide valuable insight into how
        best handle your case and ensure that all relevant documents are
        properly filed with the court and that proper notices are sent out when
        needed. By hiring our firm, you can feel confident knowing that your
        interests will be protected throughout every step of the process.
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
        What is Commercial Litigation?
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
        When it comes to commercial litigation, there are four main areas that
        often come up in court cases. These include contract disputes, torts,
        intellectual property disputes, and miscellaneous matters such as
        antitrust violations.
      </Typography>
      <Typography
        sx={{
          fontSize: 20,
          fontFamily: "Raleway",
          marginBottom: 3,
        }}
      >
        TYPES OF COMMERCIAL LITIGATION
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
            Contract Disputes – Contract disputes involve enforcing or defending
            contracts, such as leases or other agreements between parties. This
            often includes breach-of-contract claims, where one party fails to
            perform their obligations under the agreement. Additionally, this
            includes claims involving nonpayment or payment disputes between two
            parties under a contract agreement.
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
            Tort Claims – Tort claims involve wrongs committed by one party
            against another that do not involve contractual relationships. This
            can include personal injury claims resulting from accidents caused
            by someone else’s negligence or intentional acts; product liability
            claims for defective products; defamation lawsuits due to false
            statements made about another person; and other civil wrongdoings
            like trespass or nuisance complaints.
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
            Intellectual Property Disputes – Intellectual property disputes
            involve protecting copyrightable works (such as films and books),
            patented inventions (like medical devices), and trademarks (such as
            logos). These types of cases often require specialized knowledge in
            order to collect evidence that supports the infringement claim and
            prove damages suffered because of it.
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
            Miscellaneous Matters – This includes antitrust violations (such as
            price fixing), consumer protection matters (like deceptive trade
            practices), securities fraud allegations (like insider trading) ,
            real estate disputes (such as boundary conflicts) , bankruptcy
            issues (such as debt collection defense) , zoning issues (like
            obtaining permits for construction projects) , and other
            miscellaneous matters that do not fall into any other categories.
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
            We have extensive experience navigating the court system and
            familiarity with local statutes applicable to your case.
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
            We assess the merits of your case and provide legal advice regarding
            the best course of action for achieving success in court.
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
            We protect your interests by ensuring that all relevant documents
            are properly filed with the court and proper notices are given to
            all parties involved in the dispute.
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
            We thoroughly prepare, if your case proceeds to trial, by gathering
            evidence and witnesses, building a strong argument for your claim,
            and representing you in court.
          </Typography>
        </li>
      </ul>
    </Stack>
  );
}

function CommercialLitigation() {
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

export default CommercialLitigation;
