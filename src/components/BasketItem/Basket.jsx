import { ShoppingBasket } from "@mui/icons-material";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import BasketItem from "./BasketItem";
import TotalBasket from "./TotalBasket";

const Basket = (props) => {
  const {
    cartOpen,
    closeCart = Function.prototype,
    order = [],
    removeFromOrder,
    decrm,
    incr,
  } = props;
  return (
    <Drawer anchor="right" open={cartOpen} onClose={closeCart}>
      <List sx={{ width: "100%" }}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary="cart" />
        </ListItem>
        <Divider />
        {!order.length ? (
          <ListItem>not order</ListItem>
        ) : (
          <>
            {order.map((item) => (
              <BasketItem
                key={item.name}
                removeFromOrder={removeFromOrder}
                {...item}
                order={item}
                decrm={decrm}
                incr={incr}
              />
            ))}
            <Divider />
            <TotalBasket order={order} />
          </>
        )}
      </List>
    </Drawer>
  );
};

export default Basket;
