# GrooveScribe Branding Guide

This guide explains how to create your own branded version of GrooveScribe for embedding on your website.

## Overview

GrooveScribe now supports customizable branding through a configuration system that allows you to:
- Change the application name and page title
- Use your own logo images
- Apply custom color schemes (CSS themes)
- Customize meta tags for SEO and social sharing

## Quick Start for LRRecords / Easy Funnels

A pre-configured LRRecords branding setup has been created for you. To use it:

1. **Copy the LRRecords configuration file:**
   ```bash
   cp js/branding_config_lrrecords.js js/branding_config.js
   ```

2. **Add your logo files** to the `images/` folder:
   - Main logo (SVG recommended): e.g., `images/easyfunnels_logo_main.svg`
   - Icon logo (SVG recommended): e.g., `images/easyfunnels_logo_icon.svg`
   - Favicon 192x192 (PNG): e.g., `images/easyfunnels-icon-192.png`
   - Favicon 96x96 (PNG): e.g., `images/easyfunnels-icon-96.png`
   - Apple touch icon (PNG): e.g., `images/easyfunnels-apple-touch-icon.png`

3. **Update the colors** in the CSS files to match your exact brand colors:
   - Edit `css/groove_writer_lrrecords.css` (lines 10-18)
   - Edit `css/groove_display_lrrecords.css` (lines 5-13)
   
   Current placeholder colors that need to be replaced:
   ```css
   --lrrecords-blue-primary: #0A2463;      /* YOUR BLUE HERE */
   --lrrecords-orange-primary: #FB6107;    /* YOUR ORANGE HERE */
   ```

4. **Update logo paths** in `js/branding_config.js` to point to your logo files.

5. **Test** by opening `index.html` in a web browser.

## Getting Your Brand Colors

### From Your Logo Image

If you have a logo image (PNG, JPG, SVG):

1. **Online color picker tools:**
   - Upload your logo to https://imagecolorpicker.com/
   - Click on the blue and orange areas to get hex color codes
   - Alternative: https://www.rapidtables.com/web/tools/color-picker.html

2. **Using image editing software:**
   - Open your logo in Photoshop, GIMP, or similar
   - Use the eyedropper/color picker tool
   - Click on your blue and orange colors
   - Copy the hex color codes (e.g., #0A2463)

3. **Browser developer tools:**
   - Open your logo in a browser
   - Right-click and "Inspect Element"
   - Use the color picker in the developer tools

### From Your Website

If your colors are already on lrrecords.com.au:
1. Open your website in Chrome/Firefox
2. Press F12 to open Developer Tools
3. Click the "Select Element" tool
4. Click on blue/orange elements
5. In the Styles panel, find the color values

## Detailed Configuration

### 1. Branding Configuration File

The main configuration file is `js/branding_config.js`. Key settings:

```javascript
var BrandingConfig = {
    // Application name and branding
    appName: "Your App Name",
    pageTitle: "Your Page Title",
    
    // Site information
    siteName: "Your Site Name",
    siteURL: "https://yoursite.com",
    
    // Logo paths (relative to index.html)
    logoMain: "images/your_logo_main.svg",
    logoIcon: "images/your_logo_icon.svg",
    logoFavicon192: "images/your-icon-192.png",
    logoFavicon96: "images/your-icon-96.png",
    logoAppleTouch: "images/your-apple-touch-icon.png",
    logoOGImage: "https://yoursite.com/og-image.png",
    
    // Custom CSS themes
    cssThemeWriter: "css/groove_writer_yourtheme.css",
    cssThemeDisplay: "css/groove_display_yourtheme.css",
    
    // Meta description for SEO
    metaDescription: "Your description here..."
};
```

### 2. CSS Color Customization

The LRRecords theme files use CSS custom properties (variables) for easy color updates:

**css/groove_writer_lrrecords.css:**
```css
:root {
    /* Primary brand colors */
    --lrrecords-blue-primary: #0A2463;
    --lrrecords-blue-dark: #061741;
    --lrrecords-blue-light: #1E3A8A;
    --lrrecords-orange-primary: #FB6107;
    --lrrecords-orange-dark: #D14F00;
    --lrrecords-orange-light: #FF8C42;
}
```

Update these hex color values to match your exact brand colors.

### 3. Logo Specifications

For best results, create logo files with these specifications:

| File | Size | Format | Usage |
|------|------|--------|-------|
| Main Logo | Variable width, ~200px height | SVG preferred | Top navigation bar |
| Icon Logo | Square, ~70px | SVG preferred | Left sidebar |
| Favicon 192x192 | 192×192px | PNG | Modern browsers, Android |
| Favicon 96x96 | 96×96px | PNG | Desktop browsers |
| Apple Touch Icon | 180×180px | PNG | iOS home screen |
| OG Image | 1200×630px | PNG/JPG | Social media sharing |

## Advanced Customization

### Creating a Custom Color Theme

1. Copy one of the existing theme files:
   ```bash
   cp css/groove_writer_lrrecords.css css/groove_writer_mytheme.css
   cp css/groove_display_lrrecords.css css/groove_display_mytheme.css
   ```

2. Edit the CSS custom properties at the top of each file

3. Update your branding config to use the new theme:
   ```javascript
   cssThemeWriter: "css/groove_writer_mytheme.css",
   cssThemeDisplay: "css/groove_display_mytheme.css",
   ```

### Color Scheme Tips

- **Blue and Orange** are complementary colors that create strong visual contrast
- Use the darker shade for backgrounds and borders
- Use the brighter shade for highlights and interactive elements
- Maintain sufficient contrast for accessibility (WCAG 2.1 AA: 4.5:1 for text)

### Testing Your Branding

1. **Visual Check:**
   - Open `index.html` in multiple browsers (Chrome, Firefox, Safari)
   - Check that all logos display correctly
   - Verify colors match your brand

2. **Mobile Check:**
   - Test on mobile devices or use browser dev tools
   - Ensure touch icons work on iOS/Android

3. **Social Media Preview:**
   - Use https://www.opengraph.xyz/ to preview how your site appears when shared
   - Check that OG image and meta tags are correct

## Embedding on Your Website

Once branded, you can embed GrooveScribe on your website:

### Option 1: Direct Hosting
Upload all files to your web server and link to `index.html`

### Option 2: iframe Embed
```html
<iframe src="https://yoursite.com/groovescribe/index.html" 
        width="100%" 
        height="800px" 
        frameborder="0">
</iframe>
```

### Option 3: Embed Mode
Use `GrooveEmbed.html` for a simplified player view:
```html
<iframe src="https://yoursite.com/groovescribe/GrooveEmbed.html?Mode=view&..." 
        width="100%" 
        height="400px">
</iframe>
```

## Troubleshooting

**Problem:** Colors don't change after updating CSS
- **Solution:** Clear browser cache (Ctrl+Shift+Delete) and refresh

**Problem:** Logos don't appear
- **Solution:** Check file paths are correct relative to index.html
- **Solution:** Check file names match exactly (case-sensitive on some servers)

**Problem:** Page loads without branding
- **Solution:** Ensure `js/branding_config.js` exists and is loaded before other scripts
- **Solution:** Check browser console (F12) for JavaScript errors

## Support

For issues specific to GrooveScribe functionality:
- File issues at: https://github.com/lrrecords/GrooveScribe/issues

For branding customization help:
- Check the example configuration in `js/branding_config_lrrecords.js`
- Review the CSS comments in the theme files

## Files Overview

**Configuration:**
- `js/branding_config.js` - Main branding configuration (you customize this)
- `js/branding_config_lrrecords.js` - LRRecords example configuration

**CSS Themes:**
- `css/groove_writer_lrrecords.css` - LRRecords writer theme with blue/orange colors
- `css/groove_display_lrrecords.css` - LRRecords display theme with blue/orange colors
- `css/groove_writer_orange.css` - Default orange theme (fallback)
- `css/groove_display_orange.css` - Default orange theme (fallback)

**Core Files:**
- `index.html` - Main application file (modified to support branding)
- `images/` - Logo and icon files directory

## Example: Complete LRRecords Setup

1. **Get your brand colors from your logo**
2. **Update CSS files with exact colors**
3. **Add logo files to images/ folder**
4. **Copy LRRecords config:**
   ```bash
   cp js/branding_config_lrrecords.js js/branding_config.js
   ```
5. **Edit js/branding_config.js** with your logo file names
6. **Test locally** by opening index.html
7. **Deploy** to lrrecords.com.au

Your branded GrooveScribe is now ready to embed on Easy Funnels!
