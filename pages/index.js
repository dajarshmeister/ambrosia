import Hero from '../components/Hero';
import Tout from '../components/Tout';
import Image from 'next/image';
import FeaturedList from '../components/FeaturedList';
import Menu from '../components/Menu';

const Home = ({ products, featured }) => {
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
			<FeaturedList products={featured} />
			<Menu products={products} />
		</>
	);
};

export default Home;

export const getStaticProps = async () => {
	const productsRes = await fetch('http://localhost:3000/api/drinks');
	const products = await productsRes.json();
	const featuredRes = await fetch(
		'http://localhost:3000/api/drinks?featured=true'
	);
	const featured = await featuredRes.json();
	return {
		props: { products, featured },
	};
};
