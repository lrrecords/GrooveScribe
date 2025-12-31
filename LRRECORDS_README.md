# LRRecords / Easy Funnels Branded GrooveScribe

This is a customizable branded version of GrooveScribe for LRRecords / Easy Funnels.

## Quick Start (3 Simple Steps!)

### Step 1: Activate LRRecords Branding

**On Mac/Linux:**
```bash
./activate_lrrecords_branding.sh
```

**On Windows:**
```
activate_lrrecords_branding.bat
```

**Or manually:**
```bash
cp js/branding_config_lrrecords.js js/branding_config.js
```

### Step 2: Add Your Brand Colors

You need to get the exact blue and orange hex codes from your LRRecords logo.

**Quick Method:**
1. Go to https://imagecolorpicker.com/
2. Upload your LRRecords logo
3. Click on the blue area → copy the hex code (e.g., #0D47A1)
4. Click on the orange area → copy the hex code (e.g., #FF6F00)

**Then update these two files:**

**File 1:** `css/groove_writer_lrrecords.css` (lines 10-18)
```css
--lrrecords-blue-primary: #YOUR_BLUE_HERE;
--lrrecords-orange-primary: #YOUR_ORANGE_HERE;
```

**File 2:** `css/groove_display_lrrecords.css` (lines 5-13)
```css
--lrrecords-blue-primary: #YOUR_BLUE_HERE;
--lrrecords-orange-primary: #YOUR_ORANGE_HERE;
```

📖 **Need detailed help?** See [COLOR_EXTRACTION_GUIDE.md](COLOR_EXTRACTION_GUIDE.md)

### Step 3: Add Your Logos (Optional but Recommended)

1. Create or export your logos in these sizes:
   - Main logo: SVG or PNG (~200px height)
   - Icon logo: SVG or PNG (square, ~70px)
   - Favicon: PNG 192x192
   - Favicon: PNG 96x96
   - Apple touch icon: PNG 180x180

2. Save them in the `images/` folder with descriptive names like:
   - `images/lrrecords_logo_main.svg`
   - `images/lrrecords_logo_icon.svg`
   - `images/lrrecords-icon-192.png`
   - etc.

3. Update the paths in `js/branding_config.js`:
```javascript
logoMain: "images/lrrecords_logo_main.svg",
logoIcon: "images/lrrecords_logo_icon.svg",
logoFavicon192: "images/lrrecords-icon-192.png",
// ... etc
```

## Test Your Branded Version

1. Open `index.html` in your web browser
2. You should see:
   - Blue color scheme in the sidebar and top bar
   - Orange accents on buttons and highlights
   - Your logo (if you added it) or default GrooveScribe logo

**Don't see the changes?** Press `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac) to hard refresh.

## What Colors Should I Use?

The current CSS files have **placeholder colors**:
- Blue: `#0A2463` (Navy Blue)
- Orange: `#FB6107` (Bright Orange)

**You should replace these** with your actual LRRecords brand colors for the best results!

### Popular Blue/Orange Combinations (if you need inspiration):

| Name | Blue | Orange | Preview |
|------|------|--------|---------|
| Navy & Bright | `#0A2463` | `#FB6107` | Classic professional |
| Royal & Coral | `#1E3A8A` | `#FF6B35` | Bold and modern |
| Deep & Vibrant | `#003F88` | `#FF8C00` | Strong contrast |
| Sky & Burnt | `#2484C0` | `#E86A33` | Warm and inviting |

## Deploying to lrrecords.com.au

Once you're happy with your branding:

1. Upload all files to your web server
2. Make sure the file permissions are correct (readable by web server)
3. Navigate to `https://lrrecords.com.au/groovescribe/index.html` (or your chosen path)

### Embedding on Easy Funnels

You can embed GrooveScribe in your Easy Funnels pages using an iframe:

```html
<iframe src="https://lrrecords.com.au/groovescribe/index.html" 
        width="100%" 
        height="800px" 
        frameborder="0"
        style="border: none;">
</iframe>
```

## Files You Need to Customize

| File | What to Change | Priority |
|------|---------------|----------|
| `css/groove_writer_lrrecords.css` | Brand colors (lines 10-18) | **HIGH** |
| `css/groove_display_lrrecords.css` | Brand colors (lines 5-13) | **HIGH** |
| `js/branding_config.js` | Logo paths, site name, description | Medium |
| `images/` folder | Add your logo files | Medium |

## Troubleshooting

**Q: I don't see my colors after changing the CSS**  
A: Clear your browser cache and hard refresh (Ctrl+Shift+R)

**Q: My logos don't appear**  
A: Check that the file paths in `js/branding_config.js` exactly match your logo filenames (case-sensitive!)

**Q: How do I get back to the default branding?**  
A: Delete `js/branding_config.js` and the app will use the default orange theme

**Q: Can I change just the colors without adding logos?**  
A: Yes! Just update the CSS files and leave the logo paths as the defaults

## Full Documentation

- **[BRANDING_GUIDE.md](BRANDING_GUIDE.md)** - Complete branding customization guide
- **[COLOR_EXTRACTION_GUIDE.md](COLOR_EXTRACTION_GUIDE.md)** - How to get your brand colors
- **[README.md](README.md)** - General GrooveScribe information
- **[SOURCE_CODE_README.md](SOURCE_CODE_README.md)** - Developer documentation

## Support

For branding questions:
- Check the guides above first
- File an issue at: https://github.com/lrrecords/GrooveScribe/issues

For general GrooveScribe functionality:
- Visit: http://www.mikeslessons.com/gscribe/
- Original project: https://github.com/montulli/GrooveScribe

## License

This is a fork of GrooveScribe, which is licensed under GPL v2.0. See [LICENSE.txt](LICENSE.txt) for details.

---

**Made for:** LRRecords / Easy Funnels  
**Website:** lrrecords.com.au  
**Colors:** Blue & Orange from LRRecords logo
