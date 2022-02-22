const Hero = () => {
	return (
		<section className='hero'>
			<img className='hero__logo' src='./hero-logo.svg' />
			<div className='hero__button'>
				<button className='btn btn-primary hero__button'>Menu</button>
				<button className='btn btn-foam hero__button'>Subscribe</button>
			</div>
		</section>
	);
};

export default Hero;
