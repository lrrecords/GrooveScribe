// LRRecords Branding configuration for GrooveScribe
// This configuration customizes GrooveScribe for LRRecords / Easy Funnels
//
// Brand: LRRecords / Easy Funnels
// Website: lrrecords.com.au
// Colors: Blue and Orange from LRRecords logo

var BrandingConfig = {
	// Application name and branding
	appName: "Easy Funnels Groove Scribe",
	pageTitle: "Easy Funnels Groove Scribe - LRRecords",
	
	// Site information for Open Graph meta tags
	siteName: "Easy Funnels Groove Scribe at lrrecords.com.au",
	siteURL: "https://lrrecords.com.au",
	
	// Logo images (paths relative to index.html)
	// TODO: Replace these with your custom LRRecords/Easy Funnels logos
	// For now, using the default GrooveScribe logos
	logoMain: "images/GScribe_Logo_word_stack.svg",      // Top left logo - REPLACE WITH YOUR LOGO
	logoIcon: "images/GScribe_Logo_lone_g.svg",          // Left sidebar icon - REPLACE WITH YOUR LOGO
	logoFavicon192: "images/gscribe-icon-192.png",       // 192x192 favicon - REPLACE WITH YOUR ICON
	logoFavicon96: "images/gscribe-icon-96.png",         // 96x96 favicon - REPLACE WITH YOUR ICON
	logoAppleTouch: "images/apple-touch-icon.png",       // Apple touch icon - REPLACE WITH YOUR ICON
	logoOGImage: "",                                      // Open Graph image URL (leave empty to use dynamic image, or set to your hosted logo URL)
	
	// CSS theme files (paths relative to index.html)
	// Using LRRecords blue/orange color scheme
	cssThemeWriter: "css/groove_writer_lrrecords.css",
	cssThemeDisplay: "css/groove_display_lrrecords.css",
	
	// Meta description
	metaDescription: "Easy Funnels Groove Scribe by LRRecords - Create and share drum grooves with our custom branded groove notation tool. Features blue and orange branding from LRRecords."
};

// INSTRUCTIONS FOR CUSTOMIZATION:
// 
// 1. COLORS: Edit the CSS files to match your exact brand colors:
//    - css/groove_writer_lrrecords.css (lines 14-19)
//    - css/groove_display_lrrecords.css (lines 6-11)
//    
//    Current placeholder colors:
//    - Blue Primary: #0A2463 (Navy Blue) - REPLACE WITH YOUR BLUE
//    - Orange Primary: #FB6107 (Bright Orange) - REPLACE WITH YOUR ORANGE
//
// 2. LOGOS: Add your logo files to the images/ folder and update the paths above:
//    - Main logo (SVG recommended for scaling)
//    - Icon logo (SVG recommended)
//    - Favicon 192x192 (PNG)
//    - Favicon 96x96 (PNG)
//    - Apple touch icon (PNG)
//
// 3. To use this configuration, ensure index.html loads this file instead of
//    the default branding_config.js
