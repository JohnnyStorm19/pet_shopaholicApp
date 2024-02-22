import {
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
} from "../services/productsApi";
import { useEffect, useRef, useState } from "react";
import MyLoader from "../components/MyLoader";
import MyError from "../components/MyError";
import Filter from "../components/Filter";
import ProductsList from "../components/ProductsList";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeLastAction } from "../store/categorySlice";
import {
  addToFilteredProducts,
  addToProducts,
  clearFilteredProducts,
  removeFromFilteredProducts,
  sortFilteredProductsBy,
} from "../store/catalogueSlice";

const CataloguePage = () => {
  const [skipNumber, setSkipNumber] = useState(0);
  const categoriesInStore = useAppSelector(
    (state) => state.category.categories
  );
  const lastAction = useAppSelector((state) => state.category.lastAction);

  const sortingByPriceValue = useAppSelector(
    (state) => state.sorting.sortByPriceValue
  );
  const sortingByDiscountValue = useAppSelector(
    (state) => state.sorting.sortByDiscountValue
  );

  const dispatch = useAppDispatch();
  const { data, isFetching, isLoading, isError } = useGetAllProductsQuery(
    skipNumber,
    {
      skip: categoriesInStore.length > 0,
    }
  );

  const products = useAppSelector((state) => state.catalogue.products);
  const filteredProducts = useAppSelector(
    (state) => state.catalogue.filteredProducts
  );

  const {
    data: productsByCategoryResponse,
    isFetching: fetchingProductsByCategories,
  } = useGetProductsByCategoryQuery(
    categoriesInStore[categoriesInStore.length - 1],
    {
      skip: categoriesInStore.length === 0,
    }
  );

  const gridContainer = useRef<HTMLDivElement>(null);

  // ! спрятать эффекты

  useEffect(() => {
    const isProductsAreInStore = products.find(p => p.id === data?.products[0].id);
    if (categoriesInStore.length === 0) {
      dispatch(clearFilteredProducts());
    }
    if (
      !isProductsAreInStore &&
      data &&
      data.products.length > 0 &&
      !isFetching &&
      categoriesInStore.length === 0
    ) {
      dispatch(addToProducts({ products: data.products }));
    }

    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      if (gridContainer.current && categoriesInStore.length === 0) {
        const isReachBottom = gridContainer.current?.scrollHeight <= scrolledTo;
        if (isReachBottom && !isFetching && skipNumber < 100) {
          setSkipNumber(skipNumber + 10);
          dispatch(changeLastAction({ lastAction: "" }));
        }
      }
    };
    window.addEventListener("scroll", onscroll);
    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, [isFetching, skipNumber, data, categoriesInStore, dispatch, products]);

  useEffect(() => {
    const isProductsAreInStore = filteredProducts.find(p => p.id === productsByCategoryResponse?.products[0].id);
    if (!isProductsAreInStore && productsByCategoryResponse && categoriesInStore.length > 0 && !fetchingProductsByCategories) {
      dispatch(
        addToFilteredProducts({ products: productsByCategoryResponse.products })
      );
    }
  }, [productsByCategoryResponse, fetchingProductsByCategories, categoriesInStore, dispatch, filteredProducts]);

  useEffect(() => {
    if (categoriesInStore.length === 0) {
      dispatch(clearFilteredProducts());
    }
    if (lastAction === "removed" && categoriesInStore.length > 0) {
      dispatch(removeFromFilteredProducts({ categories: categoriesInStore }));
    }
    if (lastAction === "removed" && categoriesInStore.length === 0) {
      dispatch(clearFilteredProducts());
    }
  }, [categoriesInStore, lastAction, dispatch]); 


  useEffect(() => {
    if (sortingByPriceValue === "from higher" && categoriesInStore.length > 0) {
      dispatch(sortFilteredProductsBy({sortingDirection: "from higher", sortingType: "price"}))
    }
    if (sortingByPriceValue === "from lower" && categoriesInStore.length > 0) {
      dispatch(sortFilteredProductsBy({sortingDirection: "from lower", sortingType: "price"}))
    }
  }, [sortingByPriceValue, categoriesInStore, dispatch]);


  useEffect(() => {
    if (
      sortingByDiscountValue === "from higher" &&
      categoriesInStore.length > 0
    ) {
      dispatch(sortFilteredProductsBy({sortingDirection: "from higher", sortingType: "discount"}))
    }
    if (
      sortingByDiscountValue === "from lower" &&
      categoriesInStore.length > 0
    ) {
      dispatch(sortFilteredProductsBy({sortingDirection: "from lower", sortingType: "discount"}))
    }
  }, [sortingByDiscountValue, categoriesInStore, dispatch]);

  return (
    <>
      {isError && <MyError />}
      {(isLoading || isFetching) && <MyLoader position="center" />}

      <Filter />
      {categoriesInStore.length > 0 && (
        <ProductsList
          containerRef={gridContainer}
          products={filteredProducts}
          componentFor="CataloguePage"
        />
      )}
      {categoriesInStore.length === 0 && (
        <ProductsList containerRef={gridContainer} products={products} componentFor="CataloguePage" />
      )}
    </>
  );
};

export default CataloguePage;
