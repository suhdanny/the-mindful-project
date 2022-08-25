import { Link } from 'react-scroll';

const Menu = () => {
	return (
		<>
			<p>
				<Link to='about' duration={500} spy={true} offset={-100}>
					About Us
				</Link>
			</p>
			<p>
				<a href='#'>What We Do</a>
			</p>
			{/* <p>
				<Link to='blog' duration={500} spy={true} offset={-100}>
					News Letter
				</Link>
			</p> */}
			<p>
				<Link to='team' duration={500} spy={true} offset={-100}>
					Meet The Team
				</Link>
			</p>
			<p>
				<Link to='contact' duration={500} spy={true} offset={-100}>
					Contact Us
				</Link>
			</p>
		</>
	);
};

export default Menu;
