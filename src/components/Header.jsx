import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import { ShoppingBasket } from "@mui/icons-material";
import React from "react";

const Header = ({ handleCart, order }) => {
  const totalCount = order.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const totalQuantity = order.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="span" sx={{ flexGrow: 1 }}>
            Bursh shop
          </Typography>

          <Typography variant="subtitle2" sx={{ color: "black" }}>
            total: {totalCount}$
          </Typography>
          <IconButton color="inherit" onClick={handleCart}>
            <Badge color="secondary" badgeContent={totalQuantity}>
              <ShoppingBasket />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
