import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { singleProduct } from "../../features/slices/productSlice";

const ProductCard = ({ img, id, name, text, price, color }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <Card
        className="w-auto flex flex-col shadow-sm"
        onClick={() => dispatch(singleProduct(id))}
      >
        <CardHeader color="blue" className="relative h-96 object-cover">
          <img src={img} alt="card-image" className="h-full w-full rounded-tl-xl rounded-tr-lg" />
        </CardHeader>
        <CardBody className="text-center px-4">
          <Typography variant="h5" className="mb-2">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between p-5">
          <Typography variant="small">{price}$</Typography>
          <Typography variant="small" color="gray" className="flex gap-1">
            {color.map((color, index) => {
              return (
                <i
                  className="fas fa-marker-alt fa-sm mt-[3px] p-2 rounded-full mr-4"
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </Typography>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
