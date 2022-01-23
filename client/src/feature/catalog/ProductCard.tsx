import { StayPrimaryLandscape } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader,
} from "@mui/material";
import { bgcolor } from "@mui/system";
import { Product } from "../../app/models/products";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "secondary.main" }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "primary.main" },
        }}
      ></CardHeader>
      <CardMedia
        sx={{ backgroundSize: "contain", bgcolor: "primary." }}
        component="img"
        height="140"
        image={product.pictureUrl}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5" component="div">
          $ {(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">ADD TO CART</Button>
        <Button size="small">VIEW</Button>
      </CardActions>
    </Card>
  );
}
