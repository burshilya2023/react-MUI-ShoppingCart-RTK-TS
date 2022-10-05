import * as React from "react";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Delete } from "@mui/icons-material";
export default function CardBasket({
  removeFromOrder,
  incr,
  decrm,
  id,
  name,
  quantity,
  price,
  poster,
}) {
  const totalPrice = price * quantity;
  return (
    <Card
      sx={{
        "&:hover": {
          backgroundColor: "#cacaca",
          transition: "0.5s",
        },
        p: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" sx={{ width: "150px" }}>
            {name}
          </Typography>
          <Typography sx={{ color: "#0800ff", fontWeight: 800 }}>
            {totalPrice} $
          </Typography>
        </CardContent>
        <Box
          sx={{
            cursor: "pointer",
            width: "65px",
            display: "flex",
            justifyContent: "center",
            verticalAlign: "center",
            alignItems: "center",
            p: "10px",
          }}
        >
          <ChevronLeftIcon
            sx={{
              padding: "5px",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#79797a",
                color: "#fff9fb",
              },
            }}
            onClick={() =>
              decrm({
                id: id,
                name: name,
                price: price,
              })
            }
          />
          <Typography sx={{ fontWeight: 800 }}> {quantity}</Typography>
          <ChevronRightIcon
            sx={{
              padding: "5px",
              borderRadius: "50%",
              "&:hover": {
                backgroundColor: "#79797a",
                color: "#ffffff",
                opacity: [0.9, 0.8, 0.7],
              },
            }}
            onClick={() =>
              incr({
                id: id,
                name: name,
                price: price,
              })
            }
          />
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 100, height: 100 }}
        image={poster}
        alt="w"
      />
      <IconButton onClick={() => removeFromOrder(id)}>
        <Delete sx={{ color: "red" }} />
      </IconButton>
    </Card>
  );
}
