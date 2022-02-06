import Link from 'next/link';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar__container'>
				<Link href='/'>
					<img className='navbar__brand' src='./logo.svg' />
				</Link>
				<ul className='navbar__list'>
					<li className='navbar__item'>
						<a href='!#' className='navbar__link'>
							Home
						</a>
					</li>
					<li className='navbar__item'>
						<a href='!#' className='navbar__link'>
							Our Story
						</a>
					</li>
					<li className='navbar__item'>
						<a href='!#' className='navbar__link'>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
