import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import CardBasket from "./CardBasket";
import SelectTypeBasket from "./SelectTypeBasket";
const BasketItem = ({
  incr,
  decrm,
  removeFromOrder,
  id,
  quantity,
  name,
  price,
  poster,
}) => {
  return (
    <Box>
      <SelectTypeBasket />
      <CardBasket
        incr={incr}
        decrm={decrm}
        id={id}
        name={name}
        quantity={quantity}
        price={price}
        removeFromOrder={removeFromOrder}
        poster={poster}
      />
      <Divider />
    </Box>
  );
};

export default BasketItem;
