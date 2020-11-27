import React from 'react';

import classes from './Navbar.module.css';

const Navigation = () => {
	return (
		<nav className={classes.container}>
			<input type="checkbox" id="check" className={classes.check} />
			<label for="check" className={classes.checkbtn}>
				<i className="fa fa-bars"></i>
			</label>
			<ul className={classes.ul}>
				<li className={classes.li}>
					<a href="#" className={classes.active}>
						HOME
					</a>
				</li>
				<li className={classes.li}>
					<a href="#">ABOUT</a>
				</li>
				<li className={classes.li}>
					<a href="#">ROOMS</a>
				</li>
				<li className={classes.li}>
					<a href="#">SERVICES</a>
				</li>
				<li className={classes.li}>
					<a href="#">GALLERY</a>
				</li>
				<li className={classes.li}>
					<a href="#">SEE & DO</a>
				</li>
				<li className={classes.li}>
					<a href="#">CONTACT</a>
				</li>
				<li className={classes.li}>
					<button className={classes.btn1}>Book A Room</button>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
