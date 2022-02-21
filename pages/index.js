import Hero from '../components/Hero';
import Tout from '../components/Tout';
import Image from 'next/image';
import FeaturedList from '../components/FeaturedList';
import Menu from '../components/Menu';
import db from '../Utils/db';

const Home = ({ featuredDrink }) => {
	return (
		<>
			<Hero />
			<Tout />
			<Image
				src='/coffee-banner.jpg'
				layout='responsive'
				width='1440'
				height='627'
				alt='Coffee Banner'
			/>
			<FeaturedList data={featuredDrink} />
			{/* <Menu products={products} /> */}
		</>
	);
};

export default Home;

export const getStaticProps = async () => {
	const { featuredDrink } = await db.request(
		`
		{
			featuredDrink(where: {id: "ckzwyrmegccjb0c2601epvluo"}) {
			  title {
				  html
			  }
			  description
			  drinks {
				title 
				description
				price
				id
				slug
				image {
					alt
					url
				  }
			  }
			}
		  }
		`
	);

	return {
		props: {
			featuredDrink,
		},
	};
};
