# How to Extract Your Brand Colors from Your Logo

This guide will help you get the exact hex color codes from your LRRecords logo to use in GrooveScribe.

## Method 1: Online Color Picker (Easiest)

### Step 1: Get Your Logo Image
1. Go to your GitHub profile: https://github.com/lrrecords
2. Right-click on your profile picture/logo
3. Select "Save image as..." and save it to your computer

### Step 2: Upload to Color Picker
Visit one of these free online color picker tools:
- **ImageColorPicker.com**: https://imagecolorpicker.com/
- **HTML Color Codes**: https://html-color-codes.info/colors-from-image/
- **Canva Color Palette Generator**: https://www.canva.com/colors/color-palette-generator/

### Step 3: Extract Colors
1. Upload your logo image
2. Click on the **blue areas** in your logo - it will show you the hex code (e.g., #1E3A8A)
3. Click on the **orange areas** in your logo - it will show you the hex code (e.g., #FF6B35)
4. Write down both hex codes

### Step 4: Update the CSS Files

Open these two files and replace the placeholder colors:

**File 1: `css/groove_writer_lrrecords.css`**

Find lines 10-18 and replace:
```css
:root {
	/* LRRecords Brand Colors - CUSTOMIZE THESE */
	--lrrecords-blue-primary: #YOUR_BLUE_HERE;      /* Replace with your blue */
	--lrrecords-blue-dark: #DARKER_BLUE;            /* Make this 20% darker */
	--lrrecords-blue-light: #LIGHTER_BLUE;          /* Make this 20% lighter */
	--lrrecords-orange-primary: #YOUR_ORANGE_HERE;  /* Replace with your orange */
	--lrrecords-orange-dark: #DARKER_ORANGE;        /* Make this 20% darker */
	--lrrecords-orange-light: #LIGHTER_ORANGE;      /* Make this 20% lighter */
}
```

**File 2: `css/groove_display_lrrecords.css`**

Find lines 5-13 and update with the SAME colors as above.

## Method 2: Using Your Browser

### If Your Logo is on Your Website

1. **Open your website** (lrrecords.com.au) in Chrome or Firefox
2. **Press F12** to open Developer Tools
3. **Click the "Select Element" tool** (or press Ctrl+Shift+C)
4. **Click on a blue element** on your website
5. In the "Styles" panel on the right, look for `color:` or `background-color:`
6. The color value will be shown (might be in hex, rgb, or other format)
7. If it's in rgb format (e.g., `rgb(30, 58, 138)`), convert it to hex using:
   - https://www.rgbtohex.net/

## Method 3: Using an Image Editing Program

### If You Have Photoshop, GIMP, or Paint.NET

1. **Open your logo** in the program
2. **Select the Eyedropper/Color Picker tool**
3. **Click on the blue area** - the foreground color will change
4. **Look at the color value** in the color panel (usually shows as hex like #1E3A8A)
5. **Click on the orange area** and note that color too

## Creating Lighter and Darker Shades

Once you have your main colors, you need lighter and darker versions:

### Online Tool (Easiest):
Visit: https://maketintsandshades.com/
1. Enter your blue hex code
2. Look at the results - pick a shade that's about 20% darker for `--lrrecords-blue-dark`
3. Pick a tint that's about 20% lighter for `--lrrecords-blue-light`
4. Repeat for orange

### Manual Calculation:
If your blue is `#1E3A8A`:
- **Darker**: Reduce each RGB value by 20% → `#18305A` (approximate)
- **Lighter**: Increase each RGB value by 20% → `#2B4FA8` (approximate)

## Example: Complete Color Update

Let's say you extracted these colors from your logo:
- **Blue**: `#0D47A1`
- **Orange**: `#FF6F00`

You would update the CSS like this:

```css
:root {
	/* LRRecords Brand Colors */
	--lrrecords-blue-primary: #0D47A1;      /* Your extracted blue */
	--lrrecords-blue-dark: #093471;         /* 30% darker */
	--lrrecords-blue-light: #1565C0;        /* 30% lighter */
	--lrrecords-orange-primary: #FF6F00;    /* Your extracted orange */
	--lrrecords-orange-dark: #E65100;       /* 30% darker */
	--lrrecords-orange-light: #FF9100;      /* 30% lighter */
}
```

## Quick Reference: Common Blue/Orange Combinations

If you can't extract your exact colors right now, here are some popular blue/orange combinations you can try:

### Option 1: Navy & Bright Orange
```css
--lrrecords-blue-primary: #0A2463;
--lrrecords-orange-primary: #FB6107;
```

### Option 2: Royal Blue & Coral
```css
--lrrecords-blue-primary: #1E3A8A;
--lrrecords-orange-primary: #FF6B35;
```

### Option 3: Deep Blue & Vibrant Orange
```css
--lrrecords-blue-primary: #003F88;
--lrrecords-orange-primary: #FF8C00;
```

### Option 4: Sky Blue & Burnt Orange
```css
--lrrecords-blue-primary: #2484C0;
--lrrecords-orange-primary: #E86A33;
```

## Testing Your Colors

After updating the CSS files:

1. **Open `index.html` in your browser**
2. **Hard refresh** (Ctrl+Shift+R or Cmd+Shift+R) to clear cache
3. **Check the colors** on:
   - Left sidebar (should be blue)
   - Top navigation bar (should be blue)
   - Buttons (should use orange highlights)
   - Bottom buttons (should have orange borders)

## Need Help?

If you can provide your logo image or tell me the exact colors, I can update the CSS files for you directly!

**Option 1**: Upload your logo to an image sharing site and share the link  
**Option 2**: Tell me the hex codes if you already know them  
**Option 3**: Share your website URL and I can try to extract the colors from there

## Next Steps After Getting Colors

1. ✅ Extract your brand colors (you're doing this now!)
2. ⬜ Update both CSS files with your exact colors
3. ⬜ Add your logo files to the `images/` folder
4. ⬜ Copy `js/branding_config_lrrecords.js` to `js/branding_config.js`
5. ⬜ Update the logo paths in `js/branding_config.js`
6. ⬜ Test the branded version
7. ⬜ Deploy to lrrecords.com.au
