// import { useState } from "react";
import Categories from "./Categories";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

const Filter = () => {
  // const [showCategories, setShowCategories] = useState(false);

  // const handleToggleCategories = () => {
  //   setShowCategories(!showCategories);
  // };

  return (
    <Accordion sx={{
        mb: 1,
        backgroundColor: "transparent",
        boxShadow: 'none'
    }}
      square={true}
    >
      <AccordionSummary
        expandIcon={<ArrowDownwardIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <FilterAltIcon />
          <Typography>Filter</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          {/* <Button onClick={handleToggleCategories} variant="outlined" sx={{mb: 2}}>
            {showCategories ? "hide categories" : "show categories"}
          </Button> */}
          {/* <Categories show={showCategories} /> */}
          <Categories show={true} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default Filter;




// <>
    //   <IconButton
    //     sx={{
    //       display: "flex",
    //       gap: 2,
    //       color: "primary.contrastText"
    //     }}
    //     disableRipple
    //     onClick={handleToggleCategories}
    //   >
    //     <FilterAltIcon />
    //     <Typography>Filter</Typography>
    //   </IconButton>
    //   <SwipeableDrawer
    //     anchor="left"
    //     open={showCategories}
    //     onClose={handleToggleCategories}
    //     onOpen={handleToggleCategories}
    //   >
    //     <Categories show={showCategories} />
    //   </SwipeableDrawer>
    // </>