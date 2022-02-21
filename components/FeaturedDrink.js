import Image from 'next/image';
import Link from 'next/link';

const FeaturedDrink = ({ data }) => {
	const {
		title,
		price,
		description,
		slug,
		image: { alt, url },
	} = data;
	return (
		<Link href={`/drinks/${slug}`}>
			<a className='drink'>
				<div className='drink__thumb'>
					<Image src={url} height='204' width='264' alt={alt} />
				</div>
				<div className='drink__header'>
					<h3 className='drink__title'>{title}</h3>
					<div className='drink__price'>{price}$</div>
				</div>
				<div className='drink__description'>{description}</div>
			</a>
		</Link>
	);
};

export default FeaturedDrink;
