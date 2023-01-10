import { Box, Stack } from "@mui/material";
import OakstoneBanner from "../Homepage/OakstoneBanner";
import ContactBody from "./ContactBody";
import ContactInfo from "./ContactInfo";


function ContactHome(){
    return (
        <Stack sx={{}}>
          <Box component={"img"} src={"contactUsBack.png"} />
          <OakstoneBanner />
          <Stack
            sx={{
            //   backgroundImage: "url(aboutBack.png)",
              backgroundSize: "100%",
            }}
          >
            <ContactInfo />
            <ContactBody />
          </Stack>
        </Stack>
      );
    

}

export default ContactHome;