import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar/Avatar";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";

interface Props {
    product: Product;
}

export default function ProductCard({product}: Props){
    return(
    <Card>
        <CardHeader 
            avatar={
                <Avatar sx={{bgcolor: 'secondary.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }
            title={product.name}
            titleTypographyProps={{
                sx: {fontWeight: "bold", color: "primary.main"}
            }}
        />
        <CardActionArea component={Link} to={`/catalog/${product.id}`}>
            <CardMedia
            sx={{height: 140, backgroundSize: "contain", bgcolor: "primary.light"}}
            image={product.pictureUrl}
            title={product.name}
            />
            <CardContent>
            <Typography gutterBottom color="secondary" variant="h5">
                R${(product.price / 100).toFixed(2)}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {product.brand} / {product.type}
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">Add to cart</Button>
            <Button component={Link} to={`/catalog/${product.id}`} size="small" color="primary">View</Button>
        </CardActions>
    </Card>
    )
}