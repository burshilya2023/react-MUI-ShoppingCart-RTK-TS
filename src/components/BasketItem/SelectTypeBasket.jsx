import { Box, Chip, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const SelectTypeBasket = () => {
  const [stackId, setStackId] = useState(null);
  //TODO: up to App and do function
  const [stack] = useState([
    { id: 1, label: "jun+10%", price: 100, color: "" },
    { id: 2, label: "mid+20%", price: 200, color: "" },
    { id: 3, label: "senir+30%", price: 300, color: "" },
  ]);
  //?TODO
  const DOfunction = (i) => {
    setStackId(i);
  };
  return (
    <div>
      <Box sx={{ m: 2 }}>
        <Typography gutterBottom variant="body1">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          {stack.map((categ, i) => (
            <Chip
              label={categ.label}
              onClick={() => DOfunction(i)}
              sx={{
                color: stackId === i ? "#ffffff" : "gray",
                background: stackId === i ? "#565656" : "",
              }}
            >
              {categ.label}
            </Chip>
          ))}
        </Stack>
      </Box>
    </div>
  );
};

export default SelectTypeBasket;
