# COMMITTING & PULLING
## to save changes from the local machine:
1. git add [file name] (if new file is created)	
2. git commit -am ["commit notes"]
3. git push
4. refresh the browser for GitHub to update
## to save changes from GitHub to the local machine:
1. press commit changes button in GitHub
2. in local machine:
-git fetch
-git status
-git pull

# SIMON HTML NOTES
-4 html pages (just the structure of the code)
-index.html (most browsers look for this default page-- top level, usually login)
-play.html
-scores.html
-about.html
-README.md shows what you did and what you did not do (look at rubric)
-you can hard code the elements as a placeholder until the game is played and rest of code is finished
-make multiple commits to show my progress
-on go live server: right-click to debug (inspect)
-edits in the live server extension and debug functions are temporary; real changes must be made in vscode to save
-must deploy to implement changes

## typical header/footers/main composition:
-header: menu items with logo
-footer: author name and link to GitHub
-main: body for each page and their function
-all pages (including the index) have the same header and footer

## HTML CODE:
### index:
```
<!DOCTYPE html>
<html lang="en">
<head>
/*tell browsers not to scale the viewport automatically
show title*/
<head>
<body>
/*header, main, and footer elements to give semantic structure*/
	<header>
	/*-navigation elements
	-use old style HTML to give visual formatting*/
	<header>
	<main>
		/*-welcome
		-login stuff*/
	<main>
	<footer>
		/*-author name & GitHib link*/
	<footer>
/*-some code injected by live server ??*/
<body>
</html>
```
### play:
-same head, body, header, and footer as index
-placeholders for player name, top scores list, notifications, score, reset button, and visual graphic
### scores:
-same head, body, and footer as index & play
-hard code table with highest scores
### about:
-same head, body, header, and footer as index, play, and scores
-random picture, about info, and random quote

# my ideas:
-login page/index
	-login to account
-calendar page
	-ability to reset
	-plan meals on specific days and see them all planned out
	-one week displayed
-shopping list page
	-list of all ingredients needed to create those meals
	-ability to edit shopping list
	-reset/generate
-about
-name: plan the plate, plate planner, plans & plates, kitchen catalog
