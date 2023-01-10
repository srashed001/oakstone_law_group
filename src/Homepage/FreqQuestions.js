import { Stack, Box, Grid } from "@mui/material";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const elements = [
  {
    question: "I am being harrassed by creditors while I am at work and home",
    answer:
      "Creditor Harrassment is illegal and grounds for civil suit. If you are being harrassed we can put an end to that.",
  },
  {
    question:
      "My credit report is severly damaged by debts that have gone to collections",
    answer:
      "Our legal team specializes in debt validation. We may find a way to dispute you debt and have it removed from your credit report",
  },
  {
    question: "I am scared that my creditors might take me to court",
    answer:
      "If a creditor takes you to court after you retain our services, our law firm supplies you an attorney to represent you in court. Our legal team has the litigation experience to give you the best possible defense",
  },
  {
    question: "I have thousands in unpaid medical bills",
    answer:
      "Our legal team is equipped to dispute your medical debt. We use proprietary legal tactics to pressure creditors in giving us favorable outcomes.",
  },
  {
    question: "My old utilities bill got sent to collections",
    answer:
      "We love working with debt collection companies because we have the first-hand experience in getting the best outcome from them.",
  },
  {
    question:
      "I am in so much credit card debt and I have no way of ever paying it back",
    answer:
      "There are different approaches to resolving your credit card debt but both take time. Your debt will not go anywhere if you don't start taking action. ",
  },
];

function SectionAccordion({ element }) {
  return (
    <Accordion sx={{ boxShadow: 5, maxWidth: 1000 }}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography
          sx={{
            fontSize: { xs: 21, sm: 25 },
            fontWeight: "bold",
          }}
        >
          {element.question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container sx={{ height: 10 }}>
          <Grid item xs={10} sx={{ backgroundColor: "grey" }}></Grid>
          <Grid item xs={2}></Grid>
        </Grid>
        <Typography
          sx={{
            fontSize: { xs: 21, sm: 25 },
            padding: 2,
          }}
        >
          {element.answer}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

function FreqQuestionsHeader() {
  return (
    <Box
      sx={{
        paddingY: { xs: 2, sm: 4, lg: 5 },
        color: "white",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 40, sm: 48, md: 54 },
          fontFamily: "Raleway",
          fontWeight: "bold",
        }}
      >
        Solutions We Offer
      </Typography>
    </Box>
  );
}

function FreqQuestionsSubHeader() {
  return (
    <Box
      sx={{
        padding: 4,
        backgroundColor: "rgba(256, 256, 256, .9)",
        color: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textShadow: "1px 1px 1px grey",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: 20, sm: 22, md: 25 },

          fontFamily: "Raleway",
          fontWeight: "bold",
          textShadow: "1px 1px 1px grey",
          maxWidth: { lg: 700 },
        }}
      >
        Our experienced legal team is here to solve your financial problems.
      </Typography>
    </Box>
  );
}

function FreqQuestionsAccordion() {
  return (
    <Stack
      sx={{
        boxshadow: 5,
        padding: 4,
        paddingTop: 0,
        backgroundColor: "rgba(256, 256, 256, .9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {elements.map((element) => {
        return <SectionAccordion element={element} />;
      })}
    </Stack>
  );
}

function FreqQuestions() {
  return (
    <Stack
      sx={{
        backgroundColor: "rgba(40,75,99,.8)",
        paddingBottom: { xs: 2, sm: 4, lg: 7 },
        boxShadow: 5,
        boxRadius: 2,
        textAlign: "center",
        marginBottom: { xs: 2, sm: 4, lg: 7, xl: 15 },
      }}
    >
      <Stack sx={{ paddingBottom: 4 }}>
        <FreqQuestionsHeader />
        <FreqQuestionsSubHeader />
        <FreqQuestionsAccordion />
      </Stack>
    </Stack>
  );
}

export default FreqQuestions;
