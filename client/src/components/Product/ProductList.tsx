import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

const ProductList = ({ products }: Props) => {
  return (
    <>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {products.map((product: Product) => (
          <Grid
            item
            xs={13}
            sm={6}
            md={4}
            lg={3}
            key={product.id}
            sx={{
              "@media (max-width: 600px)": {
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
