module.exports = {
	name: "Thumbtack", // optional, falls back to object key
	description: "Thumbtack.com pages",
	options: {
		frequency: 60 * 48, // (in minutes), 48 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site",
	},
	urls: [
		"https://www.thumbtack.com/k/mariachi-band-for-hire/near-me/",
		"https://www.thumbtack.com/ny/brooklyn/piano-lessons-for-kids/noah-rott-music/service/376620346460028933"
	]
};