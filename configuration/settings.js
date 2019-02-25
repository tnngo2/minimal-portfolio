module.exports = {
  // Basic configuration
  // ----------
  site: {
    url: "", // Domain your site will run on.
    path: "/", // Specify path to the portfolio. Example: "/portfolio".
    shortTitle: "Tuan Ngo", // This will display as heading
    fullTitle: "Tuan Ngo's Personal Site",
    description:
      "A simple personal website",
    language: "en",
  },
  /* Your social media and contact information. Leave "null" if you don't want it to show. */
  // ----------
  information: {
    mail: "tnngo2@gmail.com",
    linkedIn: "https://www.linkedin.com/in/tuan-ngo-6ba2136/",
    twitter: null,
    facebook: null,
    github: "http://github.com/tnngo2",
    blog: "https://medium.com/@tnngo2"
  },
  // Site appearance settings
  // ----------
  appearance: {
    backgroundColor: "#fcfcfc",
    font: {
      headerFontFamily: "Avenir Next",
      bodyFontFamily: "Georgia",
      baseSize: "18px",
      baseLineHeight: 1.5,
      headerWeight: 700,
      bodyWeight: 400,
      boldBodyWeight: 700,
      headerColor: "#303030",
      bodyColor: "#4f4f4f",
    },
  },
}