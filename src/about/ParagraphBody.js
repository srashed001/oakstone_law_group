function ParagraphBody({ content }) {
  return (
    <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }}>
      <Typography
        sx={{
          paddingX: 4,
          paddingY: 2,
          fontSize: { xs: 20, sm: 25, md: 28 },
          fontFamily: "Raleway",
          fontWeight: "bold",
        }}
      >
        {content}
      </Typography>
    </Box>
  );
}

export default ParagraphBody;
