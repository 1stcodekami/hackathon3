import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Sanity client setup
const client = createClient({
  projectId: 'oev1zrbu', // Replace with your Sanity project ID
  dataset: 'production', // Replace with your dataset name
  useCdn: false,
  token: 'sktpsPvPL8riMricV2pyC9vhUUEMa9pbJLB2wolPPF71fmpDEffq7iwieEzRqm9MGXF5t1u1EU19IyPCM3XeCUBcFUaxQf16NfmfjFQGs9GHOPwJjDGtk4EgU73bBUTFO13QUaRSP6khxGhHWyJKOp3AWwqDC5FHmvT8wiN4H7VoqmIu6l1y', // Replace with your Sanity API token
});

// Image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source).url();
}

// Define the product interface
interface Product {
  _id: string;
  id?: string;
  name?: string;
  image?: any;
  description?: string;
  price?: number;
  discountPercentage?: number;
  category?: string;
  stockLevel?: number;
  isFeaturedProduct?: boolean;
}

// Fetch products from Sanity
async function fetchProducts(): Promise<Product[]> {
  const products: Product[] = await client.fetch(`*[_type == 'product']{
    _id,
    id,
    name,
    image,
    description,
    price,
    discountPercentage,
    category,
    stockLevel,
    isFeaturedProduct
  }`);
  return products;
}

// React Server Component
export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className='ml-10'>
      <h1>Products</h1>
      {products.length > 0 ? (
        <ul>
          {products.map((product) => (
            <li key={product._id} style={{ marginBottom: '20px', listStyle: 'none' }}>
              <h2>{product.name || 'Unnamed Product'}</h2>
              {product.image ? (
                <img
                  src={urlFor(product.image)}
                  alt={product.name || 'Product Image'}
                  width="200"
                />
              ) : (
                <p>No image available</p>
              )}
              <p>Product id: {product.id || 'No id available.'}</p>

              <p>{product.description || 'No description available.'}</p>
              <p>
                Price: $
                {product.price !== undefined ? product.price.toFixed(2) : 'N/A'}
              </p>
              <p>Discount: {product.discountPercentage || 0}%</p>
              <p>Category: {product.category || 'Uncategorized'}</p>
              <p>Stock Level: {product.stockLevel !== undefined ? product.stockLevel : 'N/A'}</p>
              <p>Featured: {product.isFeaturedProduct ? 'Yes' : 'No'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
}
