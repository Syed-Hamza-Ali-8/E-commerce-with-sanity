import Image from "next/image";
import Link from "next/link";

const productData = {
  "cricket-bats": {
    name: "Cricket Bat",
    description: "Premium cricket bat designed for maximum power.",
    imageUrl: "/HomeSection/Cricket Bats.webp",
    price: "$120",
  },
  "cricket-balls": {
    name: "Cricket Ball",
    description: "Durable ball that excels in all weather conditions.",
    imageUrl: "/HomeSection/Cricket Balls.webp",
    price: "$25",
  },
  protection: {
    name: "Protection Gear",
    description: "Ensure your safety on the field with top-notch protection.",
    imageUrl: "/HomeSection/protection.webp",
    price: "$50",
  },
  shoes: {
    name: "Cricket Shoes",
    description:
      "Comfortable and durable shoes for the best grip on the field.",
    imageUrl: "/HomeSection/shoes.webp",
    price: "$80",
  },
  clothing: {
    name: "Cricket Clothing",
    description: "High-quality clothing designed for comfort and flexibility.",
    imageUrl: "/HomeSection/clothing.webp",
    price: "$45",
  },
};

type ProductProps = {
  params: {
    product: string;
  };
};

const ProductPage = ({ params }: ProductProps) => {
  const { product } = params;

  const currentProduct = productData[product as keyof typeof productData];

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="text-center p-6">
      <h1 className="text-3xl font-bold">{currentProduct.name}</h1>
      <Image
        src={currentProduct.imageUrl}
        alt={currentProduct.name}
        width={500}
        height={500}
        className="rounded-lg mt-4"
      />
      <p className="text-lg mt-2">{currentProduct.description}</p>
      <p className="text-xl mt-4 font-semibold">{currentProduct.price}</p>
      <Link
        href="/"
        className="mt-6 inline-block text-blue-600 hover:text-blue-700 transition duration-300"
      >
        Back to products
      </Link>
    </div>
  );
};

export async function generateStaticParams() {
  const productSlugs = Object.keys(productData);

  return productSlugs.map((slug) => ({
    product: slug,
  }));
}

export default ProductPage;
