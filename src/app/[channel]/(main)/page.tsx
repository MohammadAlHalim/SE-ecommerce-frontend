import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";

export const metadata = {
	title: "PCandMore",
	description:
		"PCandMore is a computer hardware retailer. We offer a wide range of products, including laptops, desktops, monitors, and accessories.",
};

export default async function Page({ params }: { params: { channel: string } }) {
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "featured-products",
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!data.collection?.products) {
		return null;
	}

	const products = data.collection?.products.edges.map(({ node: product }) => product);

	return (
		<section className="mx-auto max-w-7xl p-8 pb-16">
			<h2 className="sr-only">Product list</h2>
			<ProductList products={products} />
		</section>
	);
}
