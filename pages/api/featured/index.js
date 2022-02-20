import { featured } from './featured.json';

export default function handler(req, res) {
	res.status(200).json(featured);
}
