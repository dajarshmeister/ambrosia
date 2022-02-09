const { drinks } = require('./drinks.json');

console.log(drinks);

export default function handler(req, res) {
	res.status(200).json(drinks);
}
