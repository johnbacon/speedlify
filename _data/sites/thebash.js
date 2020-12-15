module.exports = {
	name: "The Bash", // optional, falls back to object key
	description: "TheBash.com pages",
	options: {
		frequency: 60 * 48, // (in minutes), 48 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		"https://www.thebash.com/",
		"https://www.thebash.com/search/39577598",
		"https://www.thebash.com/singer-guitarist/austin-ellis",
		"https://www.thebash.com/requestquote-b?memberId=148880"
	]
};