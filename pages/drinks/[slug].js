import db from '../../Utils/db';

const FeaturedDrink = ({ drink }) => {
	return (
		<section className='section'>
			<div className='container'>
				<h2>
					{drink.title} - ${drink.price}
				</h2>
				<div>{drink.description}</div>
			</div>
		</section>
	);
};

export default FeaturedDrink;

export const getStaticPaths = async () => {
	const { drinks } = await db.request(
		`
		{
			drinks {
			  title
			  calories
			  slug
			  price
			  description
			}
		  }
		`
	);
	const paths = drinks.map(drink => {
		return { params: { slug: drink.slug } };
	});
	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async ({ params: { slug } }) => {
	const { drink } = await db.request(
		`
	query drink($slug: String){
		drink(where:{slug: $slug}) {
		  title
		  calories
		  slug
		  price
		  description
		}
	  }
	`,
		{ slug }
	);
	return {
		props: { drink },
	};
};
