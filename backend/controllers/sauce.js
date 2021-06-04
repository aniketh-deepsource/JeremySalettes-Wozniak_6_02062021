exports.createSauce = (req, res, next) => {
	delete req.body._id;
	const sauce = new Sauce({
		...req.body,
	});
	thing
		.save()
		.then(() => res.status(201).json({ message: 'Objet creer' }))
		.catch((error) => res.status(400).json({ error }));
};
