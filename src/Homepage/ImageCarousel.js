import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import { Stack } from "@mui/material";

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Stack sx={{marginTop: 7}}>
      <Carousel
        fade
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="homepage1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="HomepageCarousel2.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="HomepageCarousel3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </Stack>
  );
}

export default ImageCarousel;
