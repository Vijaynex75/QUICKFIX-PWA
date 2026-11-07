QUICKFIX PWA — ஆரம்ப வழிகாட்டி

இந்த ZIP-ல் உள்ளவை:
- index.html: App திரை மற்றும் Booking Form
- style.css: Design
- app.js: Service selection மற்றும் WhatsApp booking
- manifest.json + service-worker.js: PWA install/offline அடிப்படை
- icon.svg: App icon

முக்கியம்:
1. app.js திறக்கவும்.
2. WHATSAPP_NUMBER = "91XXXXXXXXXX" என்பதை உங்கள் WhatsApp எண்ணாக மாற்றவும்.
   உதாரண வடிவம்: 91 + 10 இலக்க மொபைல் எண். +, இடைவெளி சேர்க்க வேண்டாம்.
3. GitHub-ல் புதிய public repository உருவாக்கவும்.
4. ZIP extract செய்து உள்ள எல்லா கோப்புகளையும் repository-க்கு upload செய்யவும்.
5. Repository Settings > Pages > Deploy from a branch > main > /(root) > Save.
6. GitHub வழங்கும் HTTPS இணைய முகவரியை திறக்கவும்.
7. Android Chrome-ல் menu > Add to Home screen.
8. iPhone Safari-ல் Share > Add to Home Screen.

கவனம்:
- இது ஆரம்ப Demo. இப்போது Booking தகவல் WhatsApp-க்கு அனுப்பப்படும்; Database-ல் சேமிக்கப்படாது.
- உண்மையான Launch-க்கு முன் WhatsApp எண்ணை அமைத்து, Provider verification, privacy policy, terms, complaint process மற்றும் சேவை விலை உறுதிப்படுத்தல் சேர்க்கவும்.
- iPhone/Android-ல் PWA நிறுவும் நடைமுறை browser மற்றும் device version-ஐப் பொறுத்து மாறலாம்.
