import FeaturedDrink from './FeaturedDrink';

const FeaturedList = ({ data }) => {
	const {
		title: { html: title },
		description,
		drinks,
	} = data;
	return (
		<section className='section bg-white'>
			<div className='container'>
				<div className='grid-md-12'>
					<div className='col-start-md-3 col-end-md-11'>
						<h2
							className='text-center'
							dangerouslySetInnerHTML={{ __html: title }}
						></h2>
						<div className='lead text-center'>{description}</div>
					</div>
				</div>
				<div className='grid-md-4'>
					{drinks.map(drink => {
						return <FeaturedDrink key={drink.id} data={drink} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default FeaturedList;
