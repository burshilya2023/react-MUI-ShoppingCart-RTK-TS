import { useState } from "react";
import GoodsList from "./Goods/GoodsList";
import { goods } from "../data/goods";
import { Box, Container } from "@mui/material";
import Basket from "./BasketItem/Basket";
import Snack from "./Snack";
import Header from "./Header";
import useInput from "../hooks/useInput";
import MySelect from "./MySelect";
import Search from "./Search";

const App = () => {
  //!card order search select
  const [products, setProducts] = useState(goods);
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [selecterSort, setSelectorSort] = useState("");
  //!openCart isSnak
  const [IsCartOpen, setIsCartOpen] = useState(false);
  const [isSnakOpen, setIsSnakOpen] = useState(false);
  const CastomInput = useInput(""); //TODO: find for use
  //!sort and search
  const sortProducts = (sort) => {
    setSelectorSort(sort);
    setProducts([...products].sort((a, b) => a[sort].localeCompare(b[sort])));
  };
  const SearchInputChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch("");
      return;
    }
    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };
  //!sort and search

  //!addToCard remove minusCard
  const addToOrder = (goodsItem) => {
    let quantity = 1;
    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);
    //если нету элемента получим -1
    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;
      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            poster: item.poster,
            quantity,
            complate: true,
          };
        })
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          poster: goodsItem.poster,
          quantity,
          complate: true,
        },
      ]);
    }

    setIsSnakOpen(true);
  };
  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };
  const MinusOrder = (goodsItem) => {
    let quantity = 1;
    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);
    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity - 1;
      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;
          return {
            id: item.id,
            name: item.name,
            price: item.price,
            poster: item.poster,
            quantity,
            complate: true,
          };
        })
      );
    }
    if (quantity <= -1) {
      removeFromOrder(goodsItem);

      alert("этих товаров 0");
    }
  };
  //!addToCard remove minusCard

  return (
    <>
      <Header
        order={order}
        orderLn={order.length}
        quantity={order.quantity}
        handleCart={() => setIsCartOpen(true)}
      />
      <>
        <Container
          sx={{
            mt: "1rem",
            mb: "15rem",
          }}
        >
          {/* //!Search and Select */}
          <Box sx={{ my: "30px" }}>
            <Search value={search} onChange={SearchInputChange} />
            <MySelect
              option={[
                { value: "category", name: "category " },
                { value: "name", name: "name" },
                { value: "priceUp", name: "priceUp" }, //TODO:
              ]}
              value={selecterSort}
              onChange={sortProducts}
            />
          </Box>
          {/* //!Product */}
          <GoodsList goods={products} setOrder={addToOrder} />
        </Container>
        {/* //!Cart */}
        <Basket
          removeFromOrder={removeFromOrder}
          order={order}
          cartOpen={IsCartOpen}
          closeCart={() => setIsCartOpen(false)}
          decrm={MinusOrder}
          incr={addToOrder}
        />
      </>
      {/* //!notification */}
      <Snack isOpen={isSnakOpen} handleClose={() => setIsSnakOpen(false)} />
    </>
  );
};

export default App;
