@echo off
REM Script to activate LRRecords branding for GrooveScribe

echo ==========================================
echo   LRRecords Branding Activation Script
echo ==========================================
echo.

REM Check if branding_config.js already exists
if exist "js\branding_config.js" (
    echo WARNING: js\branding_config.js already exists!
    echo          This will be backed up as js\branding_config.js.backup
    move /Y "js\branding_config.js" "js\branding_config.js.backup" >nul
    echo DONE: Backup created
)

REM Copy LRRecords config to active config
copy /Y "js\branding_config_lrrecords.js" "js\branding_config.js" >nul
echo DONE: LRRecords branding activated!

echo.
echo ==========================================
echo   Next Steps:
echo ==========================================
echo.
echo 1. Update your brand colors in these files:
echo    - css\groove_writer_lrrecords.css (lines 14-19)
echo    - css\groove_display_lrrecords.css (lines 6-11)
echo.
echo 2. Add your logo files to the images\ folder:
echo    - Main logo (SVG recommended)
echo    - Icon logo (SVG recommended)
echo    - Favicon files (PNG, 192x192 and 96x96)
echo.
echo 3. Update logo paths in js\branding_config.js
echo.
echo 4. Test by opening index.html in your browser
echo.
echo See COLOR_EXTRACTION_GUIDE.md for help getting your colors
echo See BRANDING_GUIDE.md for complete customization guide
echo.
echo ==========================================
echo.
pause
