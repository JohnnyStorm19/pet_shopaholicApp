// import { Box } from "@mui/material";
// import { useState } from "react";

// interface ImagesSliderProps {
//   images: string[];
//   title: string;
// }

// const ImagesSlider = ({ images, title }: ImagesSliderProps) => {
//   const [currentCounter, setCurrentCounter] = useState(0);
//   const [currentImage, setCurrentImage] = useState(images[currentCounter]); 
//   const [hoveredImg, setHoveredImg] = useState('');

//   const incrementCounter = () => {
//     if (currentCounter < images.length - 1) {
//       setCurrentCounter((prev) => (prev += 1));
//     }
//   };
//   const decrementCounter = () => {
//     if (currentCounter >= 1) {
//       setCurrentCounter((prev) => (prev -= 1));
//     }
//   };
//   const onImageClick = (e: React.SyntheticEvent<HTMLImageElement>) => {
//     setCurrentImage(e.currentTarget.src);
//   };
//   const onImageHoverEnter = (e: React.SyntheticEvent<HTMLImageElement>) => {
//     setHoveredImg(e.currentTarget.src);
//   }
//   const onImageHoverLeave = () => {
//     setHoveredImg('');
//   }

//   return (
//     <Box display="flex" flexDirection="row">
//       <Box
//         display="flex"
//         flexDirection='column'
//         sx={{
//           gap: 0,
//         }}
//       >
//         {images.map((image) => {
//           if (image.includes('thumbnail')) return;
//           return (
//             <Box
//               component="img"
//               src={image}
//               alt={title}
//               display="block"
//               width="110px"
//               onClick={onImageClick}
//               onMouseEnter={onImageHoverEnter}
//               onMouseLeave={onImageHoverLeave}
//               sx={{
//                 opacity: `${hoveredImg === image ? '.5' : '1'}`
//               }}
//             />
//           );
//         })}
//       </Box>
//       <Box component="img" src={currentImage} alt={title} display="block" />
//     </Box>
//   );
// };

// export default ImagesSlider;
