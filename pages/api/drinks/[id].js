import { drinks } from './drinks.json';

export default function handler(req, res) {
	const { id } = req.query;
	const drink = drinks.filter(drink => drink.id === id);
	res.status(200).json(drink);
}
