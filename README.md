
# Facebook-Add-Hack
A simple one-liner to remove Facebook ads and garbage.
Only tested in Chrome.

I haven't used FB in years and recently started again. I missed most of my friends back home's posts between all the garbage so, I threw this together.
Took me like 5 minutes and it might not work in a few months or a year but, then I'll just change it accordingly.

1. Copy the code from [app.js](app.js)
2. To add specific names to block add them to FBFRIENDS_TO_REMOVE separated with commas. 

	     Example:
			 var  FBFRIENDS_TO_REMOVE = ["Bob Wilson","Sally Brewer","Tim Jones"]; 
			 
4. In Chrome right-click and pick "Inspect".
5. Click the "Console" tab.
6. Ignore the warning ( this isn't going to hurt anything except maybe Zuck's bottom-line ... yeah right :smirk: )
7. Paste the code
8. Enjoy!

 ![Console screenshot](screenshot.png)
 
# Versions

## 📅 March 23, 2025
## ⬆️📅 June 12, 2025

* ## 1.0.0.3
*   🐱 ability to hide specific groups, ads or "friends" *or relatives who are always posting disagreeable content*
* ## 1.0.0.2
*   🐱 hiding Join sections removes more garbage and it appears to be a smoother experience
* ## 1.0.0.1
*   🐞 hiding sections versus killing them produces a better navigation experience 
* ## 1.0.0.0
