import { TextField } from "@mui/material";

const Search = (props) => {
  const { onChange, value } = props;

  return (
    <TextField
      label="search"
      variant="standard"
      type="search"
      fullWidth
      sx={{
        mb: 2,
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export default Search;
