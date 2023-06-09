import { Grid, styled } from "@mui/material";
import { Product } from "../../models/product";
import ProductListItem from "./ProductCard";
import { useAppSelector } from "../../redux/store/configureStore";
import ProductSkeleton from "./ProductSkeleton";

const GridStyle = styled(Grid)(({ theme }) => ({
  marginTop: 1,
  marginBottom: theme.spacing(5),
  justifyContent: "center",
}));

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  const { productsLoaded } = useAppSelector((state) => state.product);

  return (
    <GridStyle container spacing={5} sx={{ mb: "0" }}>
      {products.map((product) => (
        <Grid key={product.id} item xs={9} sm={6} md={4} lg={4}>
          {!productsLoaded ? (
            <ProductSkeleton />
          ) : (
            <ProductListItem key={product.id} product={product} />
          )}
        </Grid>
      ))}
    </GridStyle>
  );
};

export default ProductList;
