// Branding configuration for GrooveScribe
// Customize these settings to brand GrooveScribe for your organization
//
// To create a branded version:
// 1. Copy this file and modify the values below
// 2. Update index.html to reference your custom config file
// 3. Replace logo images in the images/ folder with your own
// 4. Optionally create a custom CSS file for colors

var BrandingConfig = {
	// Application name and branding
	appName: "Groove Scribe",
	pageTitle: "Groove Scribe",
	
	// Site information for Open Graph meta tags
	siteName: "GrooveScribe",
	siteURL: "https://example.com",
	
	// Logo images (paths relative to index.html)
	// These should be in the images/ folder
	logoMain: "images/GScribe_Logo_word_stack.svg",      // Top left logo
	logoIcon: "images/GScribe_Logo_lone_g.svg",          // Left sidebar icon
	logoFavicon192: "images/gscribe-icon-192.png",       // 192x192 favicon
	logoFavicon96: "images/gscribe-icon-96.png",         // 96x96 favicon
	logoAppleTouch: "images/apple-touch-icon.png",       // Apple touch icon
	logoOGImage: "",                                      // Open Graph image URL (leave empty to use dynamic image)
	
	// CSS theme files (paths relative to index.html)
	// Set to empty string to use defaults
	cssThemeWriter: "",                                   // Custom theme for groove writer (optional)
	cssThemeDisplay: "",                                  // Custom theme for groove display (optional)
	
	// Meta description
	metaDescription: "Groove Scribe allows drummers to easily create grooves, listen, share, print sheet music, and more. Use the Groove Scribe to create new grooves, figure out the groove to your favorite song, or write down the groove to your latest tune."
};

// Example branded configuration (commented out):
// To create your branded version, uncomment and modify these values:
/*
var BrandingConfig = {
	appName: "Easy Funnels Groove Scribe",
	pageTitle: "Easy Funnels Groove Scribe",
	siteName: "Easy Funnels Groove Scribe at lrrecords.com.au",
	siteURL: "https://lrrecords.com.au",
	logoMain: "images/easyfunnels_logo_main.svg",
	logoIcon: "images/easyfunnels_logo_icon.svg",
	logoFavicon192: "images/easyfunnels-icon-192.png",
	logoFavicon96: "images/easyfunnels-icon-96.png",
	logoAppleTouch: "images/easyfunnels-apple-touch-icon.png",
	logoOGImage: "https://lrrecords.com.au/images/easyfunnels_og_image.png",
	cssThemeWriter: "css/groove_writer_easyfunnels.css",
	cssThemeDisplay: "css/groove_display_easyfunnels.css",
	metaDescription: "Easy Funnels Groove Scribe - Create and share drum grooves with our custom branded groove notation tool."
};
*/
