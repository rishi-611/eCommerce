import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../store/actions/productActions";

const Product = (props) => {
  const dispatch = useDispatch();
  const product = useSelector(({ products }) => ({
    productDetails: products.product,
    loading: products.loading,
    error: products.error,
  }));
  const { id } = useParams();

  useEffect(() => {
    if (!product.productDetails) dispatch(getProduct(id));
  }, []);

  return <div>product</div>;
};

export default Product;
