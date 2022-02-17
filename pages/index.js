import Hero from '../components/Hero';
import Tout from '../components/Tout';
import Image from 'next/image';
import FeaturedList from '../components/FeaturedList';
import Menu from '../components/Menu';

const Home = ({ products }) => {
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
			<FeaturedList products={products} />
			<Menu products={products} />
		</>
	);
};

export default Home;

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:3000/api/products');
	const products = await res.json();
	const 
	return {
		props: { products },
	};
};
