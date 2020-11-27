import React from 'react';
import classes from './Home.module.css';

const Home = () => {
	return (
		<>
			<h1 className={classes.h1}>Ferofly</h1>
			<p className={classes.p}>__Magnify your Journey__</p>
			<div className={classes.div1}></div>
			<div className={classes.div2}>
				<div className={classes.label}>
					<p className={classes.date1}>Check In</p>
					<p className={classes.date1}>Check Out</p>
					<p className={classes.count1}>Adults</p>
					<p className={classes.count1}>Kids</p>
				</div>
				<div className={classes.search}>
					<input className={classes.date} type="date" />
					<input className={classes.date} type="date" />
					<input className={classes.count} type="number" min="0" />
					<input className={classes.count} type="number" min="0" />
					<button className={classes.searchbtn}>Search</button>
				</div>
			</div>
		</>
	);
};

export default Home;
