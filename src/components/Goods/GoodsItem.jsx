import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

const GoodsItem = (props) => {
  const { name, price, poster, setOrder, category } = props;
  const [isid, setIsid] = React.useState(null);

  const isId = (i) => {
    setIsid(i);
    setOrder({
      id: props.id,
      name: props.name,
      price: props.price,
      poster: props.poster,
    });
  };

  return (
    <Grid
      item
      xs={8}
      md={4}
      sx={{ justifyContent: "space-between", m: "25px auto" }}
    >
      <Card
        sx={{
          height: "110%",
        }}
      >
        <CardMedia
          image={poster}
          title={name}
          sx={{ height: 160 }}
          alt={name}
        />
        <CardContent>
          <Typography variant="h6" component="h3" className="card-title">
            {name}
          </Typography>
          <span>category: {category}</span>
          <Typography variant="body1">price: {price} $.</Typography>
        </CardContent>

        <CardActions>
          <Button
            variant={isid === props.id ? "outlined" : "contained"}
            sx={{ color: isid === props.id && "#00d604" }}
            onClick={() => isId(props.id)}
          >
            {isid === props.id ? "in the cart" : "Buy"}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default GoodsItem;
