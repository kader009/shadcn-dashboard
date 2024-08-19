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
  const response = await fetch(`https://dummyjson.com/products`, {
    next: {
      revalidate: 3600,
    },
  });
  const products = await response.json();
  return (
    <div>
      <h1 className="ms-10 mb-5 capitalize text-2xl font-bold">New products</h1>
      <div className="grid grid-cols-2 justify-center sm:grid-cols-1 lg:grid-cols-3 gap-3 mx-10">
        {products?.products?.map((product: Products) => (
          <div key={product.id}>
            <Card className="w-96 min-h-72">
              <CardHeader>
                <div className="flex justify-center items-center">
                  <div className="relative w-[200px] h-[200px]">
                    <Image
                    className='rounded-full'
                      priority={true}
                      src='https://images.unsplash.com/photo-1652249418530-f5efa38f9d06?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                      alt="product image"
                      layout="fill"
                      objectFit="cover" // or 'cover'
                    />
                  </div>
                </div>
                <CardTitle className="text-[1.2rem]">
                  {product.title.slice(0, 150) + '...'}
                </CardTitle>
                <CardDescription className="text-blue-600 font-bold">
                  <span>Price: $</span> {product.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {product.description.slice(0, 200) + '...'}
                </p>
              </CardContent>
              <CardFooter>
                <p className=" text-sm text-gray-600">
                  Category : {product.category}
                </p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
