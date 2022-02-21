import Image from 'next/image';
import Link from 'next/link';

const FeaturedDrink = ({ product }) => {
	const { title, price, snippet, id } = product;
	return (
		<Link href={`/drinks/${id}`}>
			<a className='drink'>
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
			</a>
		</Link>
	);
};

export default FeaturedDrink;
