import Image from 'next/image';

const FeaturedDrink = ({ drink }) => {
	const { title, price, snippet } = drink;
	return (
		<div className='drink'>
			<div className='drink__thumb'>
				<Image
					src='https://via.placeholder.com/400x264?text=Placeholder'
					height='204'
					width='264'
					layout='responsive'
					alt={title}
				/>
			</div>
			<div className='drink__header'>
				<h3 className='drink__title'>{title}</h3>
				<div className='drink__price'>{price}$</div>
			</div>
			<div className='drink__description'>{snippet}</div>
		</div>
	);
};

export default FeaturedDrink;
