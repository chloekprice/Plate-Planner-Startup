# COMMITTING & PULLING
## to save changes from the local machine:
1. git add [file name] (if new file is created)	
2. git commit -am ["commit notes"]
3. git push
4. refresh the browser for GitHub to update
## to save changes from GitHub to the local machine:
1. press commit changes button in GitHub
2. in local machine:
- git fetch
- git status
- git pull

# AWS
- elastic IP address: 50.19.212.48 
- web address: http://50.19.212.48 
- remote login: ssh -i ~/OneDrive/Desktop/'!!'/"official_key.pem" ubuntu@plateplanner.click
- DNS: http://plateplanner.click
- Deploy: ./deployFiles.sh -k ~/OneDrive/Desktop/'!!'/"official_key.pem" -h plateplanner.click -s simon
- Deploy (with Node.js): ./deployService.sh -k ~/OneDrive/Desktop/'!!'/"official_key.pem" -h yourdomain.click -s simon
- Deploy (with React): ./deployReact.sh -k ~/OneDrive/Desktop/'!!'/"official_key.pem" -h plateplanner.click -s simon

# HTML Code
hyperlinks: 
```
<a href="[link]">[text to click on]</a>
```
embedded image:
```
<img src="[filepath/link]" alt="[image name]" width:"[dimension #]" height:"[dimension #]">
```
default input color:
```
<input type="color" name="varColor" id="color" value="[hex code]" />
```
## Handwritten Notes
![HTML Notes 1](https://github.com/chloekprice/startup/blob/main/images/IMG_7604.jpg?raw=true)
![HTML Notes 2](https://github.com/chloekprice/startup/blob/main/images/IMG_7605.jpg?raw=true)
![HTML Notes 3](https://github.com/chloekprice/startup/blob/main/images/IMG_7606.jpg?raw=true)
![HTML Notes 4](https://github.com/chloekprice/startup/blob/main/images/IMG_7607.jpg?raw=true)


# CSS Code
to-do:
- main.css (with potential other files, if needed)
- each HTML file references main.css by:
```
<link rel="stylesheet" href="main.css" />
```
- link bootstrap in each HTML file

notes:
- links go in the head section of the html file
- override bootstrap in order to keep the menu from changing the flex direction to column on small screens
- use @media to hide content when the screen is too small
- use @keyframe for animation
## Handwritten Notes
![HTML Notes 1](https://github.com/chloekprice/startup/blob/main/images/IMG_7608.jpg?raw=true)
![HTML Notes 2](https://github.com/chloekprice/startup/blob/main/images/IMG_7609.jpg?raw=true)
![HTML Notes 3](https://github.com/chloekprice/startup/blob/main/images/IMG_7610.jpg?raw=true)
![HTML Notes 4](https://github.com/chloekprice/startup/blob/main/images/IMG_7611.jpg?raw=true)
![HTML Notes 1](https://github.com/chloekprice/startup/blob/main/images/IMG_7612.jpg?raw=true)
![HTML Notes 2](https://github.com/chloekprice/startup/blob/main/images/IMG_7613.jpg?raw=true)

# JavaScript Code

## Handwritten Notes
![HTML Notes 1](https://github.com/chloekprice/startup/blob/main/images/IMG-7618.jpg?raw=true)
![HTML Notes 2](https://github.com/chloekprice/startup/blob/main/images/IMG-7619.jpg?raw=true)
![HTML Notes 3](https://github.com/chloekprice/startup/blob/main/images/IMG-7620.jpg?raw=true)
![HTML Notes 4](https://github.com/chloekprice/startup/blob/main/images/IMG-7621.jpg?raw=true)
![HTML Notes 1](https://github.com/chloekprice/startup/blob/main/images/IMG-7622.jpg?raw=true)
![HTML Notes 2](https://github.com/chloekprice/startup/blob/main/images/IMG-7623.jpg?raw=true)

# Midterm Notes
![HTML Notes 2](https://github.com/chloekprice/startup/blob/main/images/midterm_notes.jpg?raw=true)

# SIMON HTML NOTES
- 4 html pages (just the structure of the code)
- index.html (most browsers look for this default page-- top level, usually login)
- play.html
- scores.html
- about.html
- README.md shows what you did and what you did not do (look at rubric)
- you can hard code the elements as a placeholder until the game is played and rest of code is finished
- make multiple commits to show my progress
- on go live server: right-click to debug (inspect)
- edits in the live server extension and debug functions are temporary; real changes must be made in vscode to save
- must deploy to implement changes

## typical header/footers/main composition:
- header: menu items with logo
- footer: author name and link to GitHub
- main: body for each page and their function
- all pages (including the index) have the same header and footer

## HTML CODE:
### index:
```
<!DOCTYPE html>
<html lang="en">
<head>
/*tell browsers not to scale the viewport automatically; show title*/
<head>
<body>
/*header, main, and footer elements to give semantic structure*/
	<header>
	/*-navigation elements; use old style HTML to give visual formatting*/
	<header>
	<main>
		/*welcome; login stuff*/
	<main>
	<footer>
		/*author name & GitHib link*/
	<footer>
/*some code injected by live server ??*/
<body>
</html>
```
### play:
- same head, body, header, and footer as index
- placeholders for player name, top scores list, notifications, score, reset button, and visual graphic
### scores:
- same head, body, and footer as index & play
- hard code table with highest scores
### about:
- same head, body, header, and footer as index, play, and scores
- random picture, about info, and random quote

# my ideas:
## login page/index
	- login to account
## calendar page
	- ability to reset
	- plan meals on specific days and see them all planned out
	- one week displayed
## shopping list page
	- list of all ingredients needed to create those meals
	- ability to edit shopping list
	- reset/generate
## about
	- name: plan the plate, plate planner, plans & plates, kitchen catalog
