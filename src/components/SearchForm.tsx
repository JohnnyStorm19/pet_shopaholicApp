import { FormControl, IconButton, InputAdornment, InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import '../styles/resetInput.css';
import { useRef, useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  borderStyle: "solid",
  borderWidth: '1.5px',
  borderColor: theme.palette.primary.contrastText,
  backgroundColor: 'transparent',
  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "30ch",
      },
    },
  },
}));

const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement | null>();
  const [inputText, setInputText] = useState('');

  const onChangeHandler = () => {
    if (inputRef.current) {
      setInputText(inputRef.current.value);
    }
  }
  const onInputClear = () => {
    setInputText('');
  }

  return (
    <FormControl variant="outlined" sx={{ ml: "auto" }}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{
            color: 'primary.contastText'
          }} />
        </SearchIconWrapper>
        <StyledInputBase
          type="search"
          value={inputText}
          inputRef={inputRef}
          onChange={onChangeHandler}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton 
                aria-label="clear search-input"
                edge="end"
                disableRipple
                onClick={onInputClear}
                sx={{
                  mr: 1
                }}
              >
                <CloseIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Search>
    </FormControl>
  );
};

export default SearchForm;
