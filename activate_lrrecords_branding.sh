#!/bin/bash
# Script to activate LRRecords branding for GrooveScribe

echo "=========================================="
echo "  LRRecords Branding Activation Script"
echo "=========================================="
echo ""

# Check if branding_config.js already exists
if [ -f "js/branding_config.js" ]; then
    echo "⚠️  Warning: js/branding_config.js already exists!"
    echo "    This will be backed up as js/branding_config.js.backup"
    mv js/branding_config.js js/branding_config.js.backup
    echo "✅ Backup created"
fi

# Copy LRRecords config to active config
cp js/branding_config_lrrecords.js js/branding_config.js
echo "✅ LRRecords branding activated!"

echo ""
echo "=========================================="
echo "  Next Steps:"
echo "=========================================="
echo ""
echo "1. Update your brand colors in these files:"
echo "   - css/groove_writer_lrrecords.css (lines 10-18)"
echo "   - css/groove_display_lrrecords.css (lines 5-13)"
echo ""
echo "2. Add your logo files to the images/ folder:"
echo "   - Main logo (SVG recommended)"
echo "   - Icon logo (SVG recommended)"
echo "   - Favicon files (PNG, 192x192 and 96x96)"
echo ""
echo "3. Update logo paths in js/branding_config.js"
echo ""
echo "4. Test by opening index.html in your browser"
echo ""
echo "📖 See COLOR_EXTRACTION_GUIDE.md for help getting your colors"
echo "📖 See BRANDING_GUIDE.md for complete customization guide"
echo ""
echo "=========================================="
