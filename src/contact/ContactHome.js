import { Box, Stack, Typography } from "@mui/material";
import { margin } from "@mui/system";
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
            {/* <ContactInfo /> */}
            <Typography sx={{
              fontSize:30,
              textAlign: 'center',
              marginY: 20
            }}>
              Contact information coming soon...
            </Typography>
            {/* <ContactBody /> */}
          </Stack>
        </Stack>
      );
    

}

export default ContactHome;