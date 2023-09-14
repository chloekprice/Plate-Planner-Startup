SIMON HTML
-4 html pages (just the structure of the code)
-index.html (most browsers look for this default page-- top level, usually login)
	-include a link to the GitHub repository
	-make multiple commits to show my progress
	-all pages (including the index) have the same header and footer
-play.html
-scores.html
-about.html
-README.md shows what you did and what you did not do (look at rubric)
-header: menu items with logo
-footer: author name and link to GitHub
-main: body for each page and their function
-you can hard code the elements as a placeholder until the game is played and rest of code is finished
-on go live server: right-click to debug (inspect)
-edits in the live server extension and debug functions are temporary; real changes must be made in vscode to save
-must deploy to implement changes

HTML:
index:
-<!DOCTYPE html>
-<html lang="en">
-<head>
	-tell browsers not to scale the viewport automatically
	-show title
	-end with <head>
-<body>
	-header, main, and footer elements to give semantic structure
	-<header>
		-navigation elements
		-use old style HTML to give visual formatting
		-end with <header>
	-<main>
		-welcome
		-login stuff
		-end with <main>
	-<footer>
		-author name & GitHib link
		-end with <footer>
	-some code injected by live server ??
	-end with <body>
-end with </html>
play:
-same head, body, header, and footer as index
-placeholders for player name, top scores list, notifications, score, reset button, and visual graphic
scores:same head, body, and footer as index & play
-hard code table with highest scores
about:
-same head, body, header, and footer as index, play, and scores
-random picture, about info, and random quote

my ideas:
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
