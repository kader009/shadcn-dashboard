import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface Products {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

const ProductPage = async () => {
  const response = await fetch(`https://fakestoreapi.com/products`);
  const products = await response.json();
  // console.log(products);
  return (
    <div>
      <h1 className="ms-10 mb-5 capitalize text-2xl font-bold">
        {' '}
        New products
      </h1>
      <div className="grid grid-cols-2 justify-center sm:grid-cols-1 lg:grid-cols-2  gap-3 mx-10">
        {products.map((product: Products) => (
          <div key={product.id}>
            <Card>
              <CardHeader>
                <div className="flex justify-center items-center">
                  <Image
                    src={product.image}
                    width={200}
                    height={230}
                    alt="product image"
                  />
                </div>
                <CardTitle className="text-[1.2rem]">{product.title}</CardTitle>
                <CardDescription>
                  <span>Price:</span> {product.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>{product.description}</p>
              </CardContent>
              <CardFooter>
                <p>Category: {product.category}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
