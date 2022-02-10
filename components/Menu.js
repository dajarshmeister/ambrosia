const Menu = ({ drinks }) => {
	return (
		<section className='section bg-white'>
			<div className='container'>
				<div className='grid-md-12'>
					<div className='col-start-md-3 col-end-md-11'>
						<h2 className='text-center'>Menu Options</h2>
						<div className='lead text-center'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
							imperdiet id porttitor malesuada est risus, sed nec sit. Commodo
							nec eget mi elit eu erat amet.
						</div>
					</div>
				</div>
				<div className='grid-md-2'>
					{drinks.map(drink => {
						return (
							<div className='grid-md-2'>
								<img
									src='https://via.placeholder.com/264x202'
									className='fluid'
								/>
								<div className='mt-1'>
									<h3 className='mb-2'>{drink.title}</h3>
									<div>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit.
										Scelerisque ut libero dignissim enim vitae, ullamcorper quis
										ut.
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Menu;
