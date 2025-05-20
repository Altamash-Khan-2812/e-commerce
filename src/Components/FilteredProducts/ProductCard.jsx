import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const ProductCard = ({ img, id, name, text, price, color }) => {
  return (
    <Card className="w-auto flex flex-col">
      <CardHeader color="blue" className="relative h-96 object-cover">
        <img src={img} alt="card-image" className="h-full w-full" />
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h5" className="mb-2">
          {name}
        </Typography>
        <Typography>{text}</Typography>
      </CardBody>
      <CardFooter divider className="flex items-center justify-between py-3">
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
  );
};

export default ProductCard;
