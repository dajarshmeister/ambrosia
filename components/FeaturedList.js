import FeaturedDrink from './FeaturedDrink';

const FeaturedList = ({ drinks }) => {
	return (
		<div className='section'>
			<div className='container'>
				<div className='grid-md-12'>
					<div className='col-start-md-3 col-end-md-11'>
						<h2 className='text-center'>
							Our <i>Featured</i> Drinks
						</h2>
						<div className='lead text-center'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
							imperdiet id porttitor malesuada est risus, sed nec sit.
						</div>
					</div>
				</div>
				<div className='grid-md-4'>
					{drinks.map(drink => {
						return <FeaturedDrink key={drink.id} drink={drink} />;
					})}
				</div>
			</div>
		</div>
	);
};

export default FeaturedList;
