import Hero from '../components/Hero';
import Tout from '../components/Tout';
import Image from 'next/image';
import FeaturedList from '../components/FeaturedList';

const Home = ({ drinks }) => {
	return (
		<>
			<Hero />
			<Tout />
			<Image
				src='/coffee-banner.jpg'
				layout='responsive'
				width='1440'
				height='627'
			/>
			<FeaturedList drinks={drinks} />
		</>
	);
};

export default Home;

export const getStaticProps = async () => {
	const res = await fetch('http://localhost:3000/api/featured-drinks');
	const drinks = await res.json();
	return {
		props: { drinks },
	};
};
