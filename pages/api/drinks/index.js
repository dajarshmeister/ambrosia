import { drinks } from './drinks.json';

const handler = (req, res) => {
	if (req.query.hasOwnProperty('featured')) {
		const featured = req.query.featured;
		const featuredDrinks = drinks.filter(drink => drink.featured === featured);
		res.status(200).json(featuredDrinks);
	} else {
		res.status(200).json(drinks);
	}
};

export default handler;
