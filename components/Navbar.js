import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='navbar__container'>
				<Link href='/'>
					<a className='navbar__brand'>
						<Image src='/logo.svg' alt='logo' width='186' height='36' />
					</a>
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
