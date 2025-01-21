import { client } from "@/sanity/lib/client";

// Define the product type
type Product = {
    name: string;
    imagePath: string;
    price: number;
    description: string;
    discountPercentage: number;
    isFeaturedProduct: boolean;
    stockLevel: number;
    category?: string;
};

// Fetch and migrate data
export const fetchData = async (): Promise<void> => {
    try {
        const res = await fetch("https://template-0-beta.vercel.app/api/product");

        if (!res.ok) {
            throw new Error(`Failed to fetch products: ${res.statusText}`);
        }

        const { products } = await res.json();

        for (const product of products) {
            const {
                name,
                imagePath,
                price,
                description,
                discountPercentage,
                isFeaturedProduct,
                stockLevel,
                category,
            } = product;

            try {
                const imageAsset = await upload(imagePath);

                if (!imageAsset) {
                    console.warn(`Failed to upload image for product: ${name}`);
                    continue;
                }

                await client.create({
                    _type: "Pschema",
                    name,
                    description,
                    price,
                    discountPercentage,
                    imagePath: {
                        _type: "image",
                        asset: {
                            _type: "reference",
                            _ref: imageAsset._id,
                        },
                    },
                    isFeaturedProduct,
                    stockLevel,
                    category,
                });

                console.log("Migrated Product:", name);
            } catch (err) {
                console.error(`Failed to migrate product: ${name}`, err);
            }
        }
    } catch (error) {
        console.error("Error in fetchData:", error);
    }
};

// Upload image function
const upload = async (image: string): Promise<any | null> => {
    try {
        const res = await fetch(image);

        if (!res.ok) {
            console.warn(`Failed to fetch image: ${image}`);
            return null;
        }

        const contentType = res.headers.get("content-type") || "image/jpeg";
        const blob = await res.blob();

        const imageAsset = await client.assets.upload("image", blob, {
            filename: image.split("/").pop() || "image",
            contentType,
        });

        return imageAsset;
    } catch (error) {
        console.error("Error in upload:", error);
        return null;
    }
};

// Execute fetchData
fetchData();
