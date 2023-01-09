import { Box, Stack } from "@mui/material";
import TriumphBanner from "../Homepage/TriumphBanner";
import ContactBody from "./ContactBody";
import ContactInfo from "./ContactInfo";


function ContactHome(){
    return (
        <Stack sx={{}}>
          <Box component={"img"} src={"contactUsBack.png"} />
          <TriumphBanner />
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