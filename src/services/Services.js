import { ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { fontFamily, height } from "@mui/system";
import { createRef, useEffect, useRef, useState } from "react";
import TriumphBanner from "../Homepage/TriumphBanner";
import Bankruptcy from "./Bankruptcy";
import CivilLitigation from "./CivilLitigation";
import CollectionsHarrassment from "./CollectionsHarrassment";
import CommercialLitigation from "./CommercialLitigation";
import DebtResolution from "./DebtResolution";
import RealEstateLitigation from "./RealEstateLitigation";

const services = [
  {
    id: 0,
    title: "Collections Harrassment",
    body: <CollectionsHarrassment />,
  },
  {
    id: 1,
    title: "Debt Resolution",
    body: <DebtResolution />,
  },
  {
    id: 2,
    title: "Bankruptcy",
    body: <Bankruptcy />,
  },
  {
    id: 3,
    title: "Civil Litigation",
    body: <CivilLitigation />,
  },
  {
    id: 4,
    title: "Commercial Litigation",
    body: <CommercialLitigation />,
  },
  {
    id: 5,
    title: "Real Estate Litigation",
    body: <RealEstateLitigation />,
  },
];

function ServiceAccordion({ id, title, body, expanded, handleChange }) {
  const titleArr = title.split(" ");
  const rest = titleArr.slice(0, titleArr.length - 1);
  const last = titleArr[titleArr.length - 1];
  return (
    <Accordion
      expanded={expanded.indexOf(`panel${id}`) !== -1}
      onChange={handleChange(`panel${id}`, id)}
      sx={{ padding: { sm: 2 }, backgroundColor: 'rgba(255,255,255, .9)' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMore />}
        aria-controls={`panel${id}bh-content`}
        id={`panel${id}bh-header`}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          <Avatar
            sx={{
              height: { xs: 50, sm: 75, md: 100 },
              width: { xs: 50, sm: 75, md: 100 },
              marginX: { xs: 2, sm: 2, md: 3 },
              boxShadow: 5,
              backgroundImage: "url(redTriBack.png)",
              backgroundSize: "cover",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            {title.slice(0, 2)}
          </Avatar>

          <Stack>
            <Typography
              sx={{
                fontSize: { xs: 20, md: 30 },
                fontWeight: "bold",
                fontFamily: "Raleway",
              }}
            >
              {rest.join(" ")}
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 20, md: 30 },
                fontWeight: "bold",
                fontFamily: "Raleway",
              }}
            >
              {last}
            </Typography>
          </Stack>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Stack>
          <Stack
            sx={{
              backgroundColor: "grey",
              height: 5,
              boxShadow: 2,
              borderRadius: 2
            }}
          />

          {body}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}

function Services() {
  const scrollRef = useRef(null);
  const [expanded, setExpanded] = useState([]);

  const handleChange = (panel, id) => (event, isExpanded) => {
    isExpanded
      ? setExpanded((state) => [...state, panel])
      : setExpanded((state) => state.filter((p) => panel !== p));
    const el = document.getElementById(id);
    scrollRef.current = el;
    scrollRef.current.scrollIntoView({ behavior: "smooth" });

    const scrolledY = window.scrollY;
    if (scrolledY) {
      if (!isExpanded) {
        window.scroll(0, scrolledY - 200);
      }
    }
  };

  return (
    <Stack spacing={0}>
      <Box component={"img"} src={"services1.png"} />
      <TriumphBanner />
      <Stack
        sx={{
          backgroundImage: "url(servicesBack.png)",
          backgroundSize: "100%",
        }}
      >
        <Stack
          sx={{
            backgroundColor: "rgba(256, 256, 256, .7)",
            paddingBottom: 20,
          }}
        >
          <Box sx={{ textAlign: "center", margin: { xs: 5, sm: 7 } }}>
            <Typography
              sx={{
                fontSize: { xs: 25, sm: 30, md: 35 },
                fontFamily: "Raleway",
                fontWeight: "bold",
              }}
            >
              <Typography
                component={"span"}
                sx={{
                  color: "red",
                  fontSize: { xs: 25, sm: 30, md: 35 },
                  fontFamily: "Raleway",
                  fontWeight: "bold",
                }}
              >
                How
              </Typography>{" "}
              can we help you?
            </Typography>
          </Box>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Stack
              sx={{
                maxWidth: { xs: 400, sm: 500, md: 600, lg: 800 },
                boxShadow: 10,
                borderRadius: 2,
              }}
            >
              {services.map((service) => {
                return (
                  <div id={service.id} key={service.id}>
                    <ServiceAccordion
                      id={service.id}
                      title={service.title}
                      body={service.body}
                      expanded={expanded}
                      handleChange={handleChange}
                    />
                  </div>
                );
              })}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Services;
