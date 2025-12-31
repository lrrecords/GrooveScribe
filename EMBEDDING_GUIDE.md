# Embedding GrooveScribe on Your Website

This guide provides HTML code and instructions for embedding your branded GrooveScribe on your lrrecords.com.au website or Easy Funnels pages.

## Option 1: Full Editor Embed (Recommended for Main Page)

This embeds the complete GrooveScribe editor with all features.

```html
<!-- Full GrooveScribe Editor -->
<iframe 
    src="https://lrrecords.com.au/groovescribe/index.html" 
    width="100%" 
    height="800px" 
    frameborder="0"
    style="border: none; display: block; max-width: 1600px; margin: 0 auto;"
    title="Easy Funnels Groove Scribe - Drum Pattern Editor">
</iframe>
```

### Responsive Version

For mobile-friendly embedding:

```html
<!-- Responsive Full Editor -->
<div style="position: relative; width: 100%; max-width: 1600px; margin: 0 auto;">
    <iframe 
        src="https://lrrecords.com.au/groovescribe/index.html" 
        width="100%" 
        height="800px" 
        frameborder="0"
        style="border: none; display: block;"
        title="Easy Funnels Groove Scribe">
    </iframe>
</div>
```

## Option 2: Player-Only Embed (Display a Specific Groove)

This is perfect for displaying pre-made grooves with a playback interface.

```html
<!-- Display a Specific Groove (Player Only) -->
<iframe 
    src="https://lrrecords.com.au/groovescribe/GrooveEmbed.html?TimeSig=4/4&Div=16&Tempo=80&Measures=1&H=|xxxxxxxxxxxxxxxx|&S=|----O-------O---|&K=|o-------o-------o|" 
    width="100%" 
    height="400px" 
    frameborder="0"
    style="border: none; display: block;"
    title="Drum Groove Player">
</iframe>
```

### Customize the Groove

To create your own groove for embedding:

1. Open the full editor at `https://lrrecords.com.au/groovescribe/index.html`
2. Create your groove
3. Click the **SHARE** button
4. Copy the URL
5. Replace the domain in the URL with your domain
6. Use this URL in the iframe `src` attribute with `GrooveEmbed.html` instead of `index.html`

**Example transformation:**
- Share URL: `https://lrrecords.com.au/groovescribe/index.html?TimeSig=4/4&Div=16&Tempo=100&Measures=2&H=|xxxxxxxxxxxxxxxx|xxxxxxxxxxxxxxxx|&S=|----O-------O---|----O-------O---|&K=|o-------o-------|o-------o-------|`
- Embed URL: `https://lrrecords.com.au/groovescribe/GrooveEmbed.html?TimeSig=4/4&Div=16&Tempo=100&Measures=2&H=|xxxxxxxxxxxxxxxx|xxxxxxxxxxxxxxxx|&S=|----O-------O---|----O-------O---|&K=|o-------o-------|o-------o-------|`

## Option 3: Multiple Grooves on One Page

Display several different grooves on a single page:

```html
<!-- Multiple Grooves Example -->
<div style="max-width: 1200px; margin: 0 auto; padding: 20px;">
    
    <h2>Basic Rock Beat</h2>
    <iframe 
        src="https://lrrecords.com.au/groovescribe/GrooveEmbed.html?TimeSig=4/4&Div=16&Tempo=90&Measures=1&H=|xxxxxxxxxxxxxxxx|&S=|----O-------O---|&K=|o-------o-------|" 
        width="100%" 
        height="350px" 
        frameborder="0"
        style="border: none; display: block; margin-bottom: 30px;">
    </iframe>
    
    <h2>Funk Groove</h2>
    <iframe 
        src="https://lrrecords.com.au/groovescribe/GrooveEmbed.html?TimeSig=4/4&Div=16&Tempo=100&Measures=1&H=|xxxxxxxxxxxxxxxx|&S=|----O--o----O--o|&K=|o--o----o--o----|" 
        width="100%" 
        height="350px" 
        frameborder="0"
        style="border: none; display: block; margin-bottom: 30px;">
    </iframe>
    
</div>
```

## Option 4: WordPress Embed

If you're using WordPress for your lrrecords.com.au site:

1. Edit the page or post where you want to embed GrooveScribe
2. Switch to the **HTML/Code editor** (not Visual editor)
3. Paste this code:

```html
<!-- GrooveScribe Embed for WordPress -->
<div class="groovescribe-embed" style="width: 100%; max-width: 1600px; margin: 20px auto;">
    <iframe 
        src="https://lrrecords.com.au/groovescribe/index.html" 
        width="100%" 
        height="800" 
        frameborder="0"
        style="border: none; display: block;"
        allowfullscreen>
    </iframe>
</div>
```

## Option 5: Easy Funnels / Landing Page Builder Embed

For page builders like Easy Funnels, ClickFunnels, or similar:

1. Add an **HTML/Embed** element to your page
2. Paste this code:

```html
<div style="background: #f5f5f5; padding: 30px 20px; border-radius: 10px;">
    <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="text-align: center; color: #0A2463; margin-bottom: 20px;">
            Create Your Drum Grooves
        </h2>
        <iframe 
            src="https://lrrecords.com.au/groovescribe/index.html" 
            width="100%" 
            height="800px" 
            frameborder="0"
            style="border: none; display: block; border-radius: 5px;"
            title="Easy Funnels Groove Scribe">
        </iframe>
    </div>
</div>
```

## Option 6: Popup/Modal Embed

Open GrooveScribe in a popup or modal:

```html
<!-- Button to trigger popup -->
<button onclick="openGrooveScribe()" 
        style="background: #FB6107; color: white; padding: 15px 30px; 
               border: none; border-radius: 5px; font-size: 18px; cursor: pointer;">
    Open Groove Editor
</button>

<!-- Modal/Popup HTML -->
<div id="groovescribe-modal" 
     style="display: none; position: fixed; z-index: 9999; left: 0; top: 0; 
            width: 100%; height: 100%; background-color: rgba(0,0,0,0.8);">
    <div style="position: relative; margin: 2% auto; width: 95%; max-width: 1400px; 
                background: white; padding: 20px; border-radius: 10px; height: 90vh;">
        <button onclick="closeGrooveScribe()" 
                style="position: absolute; right: 10px; top: 10px; background: #0A2463; 
                       color: white; border: none; padding: 10px 20px; cursor: pointer; 
                       border-radius: 5px; z-index: 10000;">
            Close ✕
        </button>
        <iframe id="groovescribe-frame"
            src="https://lrrecords.com.au/groovescribe/index.html" 
            width="100%" 
            height="100%" 
            frameborder="0"
            style="border: none; border-radius: 5px;">
        </iframe>
    </div>
</div>

<!-- JavaScript for popup -->
<script>
function openGrooveScribe() {
    document.getElementById('groovescribe-modal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeGrooveScribe() {
    document.getElementById('groovescribe-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close on outside click
document.getElementById('groovescribe-modal').onclick = function(event) {
    if (event.target === this) {
        closeGrooveScribe();
    }
}
</script>
```

## Custom Styling Options

### Match Your Website Colors

Wrap the iframe in a container with your brand colors:

```html
<div style="background: linear-gradient(135deg, #0A2463 0%, #1E3A8A 100%); 
            padding: 40px 20px; border-radius: 15px;">
    <div style="background: white; padding: 10px; border-radius: 10px; 
                box-shadow: 0 10px 30px rgba(0,0,0,0.3);">
        <iframe 
            src="https://lrrecords.com.au/groovescribe/index.html" 
            width="100%" 
            height="800px" 
            frameborder="0"
            style="border: none; display: block; border-radius: 5px;">
        </iframe>
    </div>
</div>
```

### Add Title and Description

```html
<div style="max-width: 1600px; margin: 40px auto; padding: 0 20px;">
    <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #0A2463; font-size: 36px; margin-bottom: 10px;">
            Easy Funnels Groove Scribe
        </h1>
        <p style="color: #666; font-size: 18px; max-width: 800px; margin: 0 auto;">
            Create, edit, and share professional drum grooves with our interactive editor. 
            Perfect for drummers, producers, and music educators.
        </p>
    </div>
    
    <iframe 
        src="https://lrrecords.com.au/groovescribe/index.html" 
        width="100%" 
        height="800px" 
        frameborder="0"
        style="border: 3px solid #FB6107; display: block; border-radius: 10px; 
               box-shadow: 0 5px 15px rgba(0,0,0,0.2);">
    </iframe>
</div>
```

## Important Notes

### URL Setup

Before embedding, ensure GrooveScribe is uploaded to your server:

1. Upload all GrooveScribe files to: `/groovescribe/` folder on lrrecords.com.au
2. Your GrooveScribe will be accessible at: `https://lrrecords.com.au/groovescribe/index.html`
3. Replace `https://lrrecords.com.au/groovescribe/` in all embed codes with your actual URL

### Height Recommendations

- **Full Editor**: 800px minimum (1000px recommended for comfort)
- **Player Only**: 350-400px
- **Mobile**: Use responsive CSS with `min-height: 600px`

### Width Recommendations

- **Desktop**: 100% width with `max-width: 1600px`
- **Mobile**: 100% width, ensure parent has proper padding
- **Sidebar**: Minimum 800px width

### Mobile Optimization

For better mobile experience:

```html
<style>
    .groovescribe-container {
        width: 100%;
        max-width: 1600px;
        margin: 0 auto;
    }
    
    .groovescribe-container iframe {
        width: 100%;
        height: 800px;
        border: none;
        display: block;
    }
    
    @media (max-width: 768px) {
        .groovescribe-container iframe {
            height: 600px;
        }
    }
    
    @media (max-width: 480px) {
        .groovescribe-container iframe {
            height: 500px;
        }
    }
</style>

<div class="groovescribe-container">
    <iframe 
        src="https://lrrecords.com.au/groovescribe/index.html" 
        title="Easy Funnels Groove Scribe">
    </iframe>
</div>
```

## Testing Your Embed

1. **Test locally first**: Save the HTML code to a file and open it in your browser
2. **Check responsiveness**: Resize your browser window to test different screen sizes
3. **Test on mobile**: Use your phone or browser dev tools mobile emulation
4. **Verify colors**: Make sure your branding shows correctly

## Quick Copy-Paste Example

Here's a complete, ready-to-use example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Groove Scribe - Easy Funnels by LRRecords</title>
    <style>
        body {
            font-family: 'Lato', Arial, sans-serif;
            margin: 0;
            padding: 0;
            background: #f5f5f5;
        }
        .header {
            background: linear-gradient(135deg, #0A2463 0%, #1E3A8A 100%);
            color: white;
            padding: 30px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0 0 10px 0;
            font-size: 42px;
        }
        .header p {
            margin: 0;
            font-size: 18px;
            opacity: 0.9;
        }
        .container {
            max-width: 1600px;
            margin: 30px auto;
            padding: 0 20px;
        }
        .embed-wrapper {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        iframe {
            width: 100%;
            height: 800px;
            border: none;
            display: block;
            border-radius: 5px;
        }
        @media (max-width: 768px) {
            iframe { height: 600px; }
            .header h1 { font-size: 32px; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🥁 Easy Funnels Groove Scribe</h1>
        <p>Create and Share Professional Drum Grooves</p>
    </div>
    
    <div class="container">
        <div class="embed-wrapper">
            <iframe 
                src="https://lrrecords.com.au/groovescribe/index.html" 
                title="Easy Funnels Groove Scribe by LRRecords"
                allowfullscreen>
            </iframe>
        </div>
    </div>
</body>
</html>
```

## Need Help?

- **File location**: Upload GrooveScribe files to your web server
- **URL issues**: Make sure the path matches where you uploaded the files
- **Sizing problems**: Adjust the `width` and `height` values in the iframe
- **Mobile issues**: Use the responsive CSS examples above
- **Customization**: Modify the colors in the style sections to match your exact branding

## Summary

**Simplest Option** (just copy & paste):
```html
<iframe src="https://lrrecords.com.au/groovescribe/index.html" 
        width="100%" height="800px" frameborder="0" 
        style="border:none;display:block;max-width:1600px;margin:0 auto;">
</iframe>
```

Replace `https://lrrecords.com.au/groovescribe/` with wherever you upload the files!
