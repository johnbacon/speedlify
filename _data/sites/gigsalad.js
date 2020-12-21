module.exports = {
	name: "GigSalad", // optional, falls back to object key
	description: "GigSalad.com pages",
	options: {
		frequency: 60 * 48, // (in minutes), 48 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		// "https://www.gigsalad.com/", // Disabled because it seems to have issues running :(
		"https://www.gigsalad.com/Music-Groups/Mariachi-Band/NY/Brooklyn",
		"https://www.gigsalad.com/austin_ellis_annapolis",
	]
};