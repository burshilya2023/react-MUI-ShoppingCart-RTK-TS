import { Button, Divider, ListItem, Typography } from "@mui/material";
import React from "react";
const TotalBasket = ({ order }) => {
  return (
    <div>
      <ListItem>
        <Typography sx={{ width: "100%", fontWeight: 700 }}>
          quantity:
          {order.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)}{" "}
          totalCount:
          {order.reduce((acc, item) => {
            return acc + item.price * item.quantity;
          }, 0)}
          $
          <Divider />
          <Divider />
        </Typography>
        {/* //TODO: to do ModalWindow */}
        <Button sx={{ p: "10px", ml: "15px" }}>Buy</Button>
      </ListItem>
    </div>
  );
};
export default TotalBasket;
