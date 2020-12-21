module.exports = {
	name: "The Knot", // optional, falls back to object key
	description: "TheKnot.com pages",
	options: {
		frequency: 60 * 48, // (in minutes), 48 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		"https://www.theknot.com/marketplace/live-wedding-bands-brooklyn-ny?sort=featured",
		"https://www.theknot.com/marketplace/mod-society-brooklyn-ny-628581"
	]
};