const FeaturedDrink = ({ drink }) => {
	return (
		<section className='section'>
			<div className='container'>
				<h2>
					{drink.title} - ${drink.price}
				</h2>
			</div>
		</section>
	);
};

export default FeaturedDrink;

export const getStaticPaths = async () => {
	const response = await fetch('http://localhost:3000/api/featured');
	const data = await response.json();
	const paths = data.map(item => {
		return { params: { id: item.id.toString() } };
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params: { id } }) => {
	const response = await fetch(`http://localhost:3000/api/featured/${id}`);
	const data = await response.json();
	return {
		props: {
			drink: data[0],
		},
	};
};
