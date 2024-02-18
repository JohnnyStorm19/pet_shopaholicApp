import { useGetAllProductsQuery, useGetProductsByCategoryQuery } from "../services/productsApi";
import { useEffect, useRef, useState } from "react";
import { IProduct } from "../models/IProducts";
import MyLoader from "../components/MyLoader";
import MyError from "../components/MyError";
import Filter from "../components/Filter";
import ProductsList from "../components/ProductsList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeLastAction } from "../store/categorySlice";

const CataloguePage = () => {
  // console.log('Catalogue RENDERS');
  const [skipNumber, setSkipNumber] = useState(0);
  const categoriesInStore = useAppSelector(state => state.category.categories);
  const lastAction = useAppSelector(state => state.category.lastAction);
  const dispatch = useAppDispatch();
  const { data, isFetching, isLoading, isError } = useGetAllProductsQuery(skipNumber, {
    skip: categoriesInStore.length > 0
  });
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const { data: productsByCategoryResponse, isFetching: fetchingProductsByCategories } = useGetProductsByCategoryQuery(categoriesInStore[categoriesInStore.length - 1], { 
    skip: categoriesInStore.length === 0 
  })
  const gridContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (data && data.products.length > 0 && !isFetching && filteredProducts.length === 0) {
      setProducts((prev) => [...prev, ...data.products]);
    }

    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      if (gridContainer.current && filteredProducts.length === 0) {
        const isReachBottom = gridContainer.current?.scrollHeight <= scrolledTo;
        // console.log(isReachBottom, scrolledTo, gridContainer.current?.scrollHeight)
        if (isReachBottom && !isFetching && skipNumber < 100 && filteredProducts.length === 0) {
          setSkipNumber(skipNumber + 10);
          dispatch(changeLastAction({lastAction: ''}));
        }
      }
    };
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, [isFetching, skipNumber, data, filteredProducts, dispatch]);

  useEffect(() => {
    console.log('productsByCategoryResponse: ', productsByCategoryResponse);
    if (productsByCategoryResponse && !fetchingProductsByCategories) {
      setProducts([]);
      setSkipNumber(0);
      setFilteredProducts(prev => [...prev, ...productsByCategoryResponse.products]);
    }

  }, [productsByCategoryResponse, fetchingProductsByCategories])

  useEffect(() => {
    if (filteredProducts.length > 0 && lastAction === 'removed') {
      const filteredProductsNew = filteredProducts.filter(product => {
        if (categoriesInStore.includes(product.category)) {
          return product;
        }
      })
      setFilteredProducts(filteredProductsNew);
    }
  }, [categoriesInStore, filteredProducts, lastAction]);


  return (
    <>
      {isError && <MyError />}
      {(isLoading || isFetching) && <MyLoader position="center" />}

      <Filter />
      <ProductsList containerRef={gridContainer} products={filteredProducts.length ? filteredProducts : products} />
    </>
  );
};

export default CataloguePage;
