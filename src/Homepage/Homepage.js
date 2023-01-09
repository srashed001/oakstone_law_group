import ImageCarousel from "./ImageCarousel";
import TriumphBanner from "./TriumphBanner";
import IntroductionPage from "./IntroductionPage";
import ProvenTrackRecord from "./ProvenTrackRecord";
import OurFocus from "./OurFocus";
import JoinUs from "./JoinUs";
import { Stack } from "@mui/material";
import HireAttorneys2 from "./HireAttorneys2";
import FederalReserveBanner from "./FederalReserveBanner";
import SeekLegalAdvice2 from "./SeekLegalAdvise2";
import UnsecuredDebtBanner from "./UnsercuredDebtBanner";
import FreqQuestions from "./FreqQuestions";
import SeekLegalAdvice3 from "./SeekLegalAdvise3";

function Homepage() {
  return (
    <Stack
      sx={{
        backgroundImage: "url(aboutBack3.png)",
        backgroundSize: "100%",
      }}
    >
      <ImageCarousel />
      <TriumphBanner />
      <IntroductionPage />
      {/* <FederalReserveBanner /> */}
      <SeekLegalAdvice3 />
      {/* <UnsecuredDebtBanner /> */}
      <ProvenTrackRecord />
      <HireAttorneys2 />
      <OurFocus />
      <FreqQuestions />
      <JoinUs />
    </Stack>
  );
}

export default Homepage;
