import { featured } from './featured.json';

export default function handler(req, res) {
	const { id } = req.query;
	const drink = featured.filter(drink => drink.id === id);
	res.status(200).json(drink);
}
