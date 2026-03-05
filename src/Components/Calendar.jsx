import * as React from "react";
import dayjs from "dayjs";
import { Box, Typography, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

export function CalendarDemo() {
  const [date, setDate] = React.useState(dayjs());

  const handlePrev = () => {
    setDate((prev) => prev.subtract(1, "month"));
  };

  const handleNext = () => {
    setDate((prev) => prev.add(1, "month"));
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      gap={1}
      marginTop={1}
    
    >
      <IconButton  onClick={handlePrev}>
        <ArrowBackIos fontSize="small" />
      </IconButton>

      <Typography
        variant="h6"
        fontWeight={500}
        fontSize={12}
        sx={{ whiteSpace: "nowrap" }}
      >
        {date.format("MMMM YYYY")}
      </Typography>

      <IconButton size="small" onClick={handleNext}>
        <ArrowForwardIos fontSize="small" />
      </IconButton>
    </Box>
  );
}