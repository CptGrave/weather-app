const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cbc270ff1fmsh98b406adcae19e6p14e99ejsn34bb571dfa38',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

  // cd04f3396b7bd3246a5b2841b52c9e9b apikey