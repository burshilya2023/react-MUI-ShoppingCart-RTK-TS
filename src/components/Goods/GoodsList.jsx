import { Grid, Typography } from "@mui/material";
import React from "react";

import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
  const { goods, setOrder } = props;

  return (
    <Grid container spacing={3}>
      {goods.length ? (
        <Grid container spacing={2}>
          {goods.map((item) => (
            <GoodsItem key={item.id} setOrder={setOrder} {...item} />
          ))}
        </Grid>
      ) : (
        <Typography variant="h3"> There is no such product</Typography>
      )}
    </Grid>
  );
};

export default GoodsList;
