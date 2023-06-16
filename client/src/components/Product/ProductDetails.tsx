import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../models/product";
import Loading from "../helper/Loading";
import NotFound from "../../errors/NotFound";
import { Divider, Grid, Typography } from "@mui/material";
import agent from "../../api/agent";
import { minHeight } from "../../muiStyles/helper/helper";
import ProductTable from "../helper/Table";

const ProductDetails = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    id &&
      agent.Product.details(id)
        .then((res) => setProduct(res))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading message="Loading product..." />;

  if (!product) return <NotFound />;

  return (
    <Grid
      container
      spacing={6}
      sx={{ minHeight: minHeight, pt: 1, mt: 0, mb: 0 }}
    >
      <Grid item xs={12} sm={6}>
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ width: "100%", maxHeight: "60vh" }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <Typography variant="h3" sx={{ fontFamily: "Arial", fontSize: "26px" }}>
          {product.name}
        </Typography>
        <Divider sx={{ mb: 2 }} />

        <ProductTable product={product} />

        <Typography
          variant="h4"
          color="secondary"
          sx={{
            marginTop: 3,
            fontFamily: "Arial",
            fontSize: "24px",
          }}
        >
          <span style={{ color: "#3a3a3ae0", paddingRight: "1%" }}>
            Price:{" "}
          </span>
          ${(product.price / 100).toFixed(2)}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductDetails;
