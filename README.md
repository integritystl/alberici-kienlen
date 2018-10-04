# Alberici Hillsdale Fabricators | Kienlan
WP Site for Alberici company - Hillsdale

[ ![Codeship Status for integritystl/alberici-hillsdale](https://app.codeship.com/projects/685902a0-6c1c-0136-2086-5ef55451d790/status?branch=master)](https://app.codeship.com/projects/298413)

## Team
- Dev Lead: Lindsay Hornsby
- Dev: Laura Kong
- PM: Jamal Mclaughlin

## Links
- Local: [http://albhillsdale.local](http://albhillsdale.local)
- WP Engine Stage: [http://albhillsdale.staging.wpengine.com](http://albhillsdale.staging.wpengine.com)
- WP Engine Prod: [http://albhillsdale.wpengine.com](http://albhillsdale.wpengine.com)
- Live Site: [http://hillsdalefabricators.com](http://hillsdalefabricators.com)
- XD Designs: [https://xd.adobe.com/spec/88fb363a-09a1-45ec-62f3-c2798da6b202-feca/screen/9c6546c3-4eed-4a0d-80b7-f9cbcbaad18f/Kienlen-Homepage/](https://xd.adobe.com/spec/88fb363a-09a1-45ec-62f3-c2798da6b202-feca/screen/9c6546c3-4eed-4a0d-80b7-f9cbcbaad18f/Kienlen-Homepage/)

## Overview

This is a WordPress site for Alberici Hillsdale Fabricators. It's built so that we can use it on more than 1 site. The other site this would be used on is Kienlan.

## :money_with_wings: Working with Code

### Spin up

* [Node](https://nodejs.org/)
* [MAMP Pro](https://www.mamp.info/en/mamp-pro/)
* [Sequel Pro](https://sequelpro.com/)

**If you have the above installed, run these commands in order:**

1. Create directory for a new project using a short name, ie: `albhillsdale.local`
1. Download latest version of Wordpress from [latest.zip](http://wordpress.org/latest.zip)
1. Clone this repo into project directory
1. Create a database in Sequel Pro for the project, named something related to project ie: `albhillsdale`
1. Pull from Migrate DB Pro in the WPAdmin of your local to get the latest Database from Staging
1. Run `npm install` (this will install all node dependencies)
1. When this is done, run `gulp` and it will watch for SASS/JS file changes
1. If you're working on a React component, run `webpack --watch` for compiling those changes.
1. Start coding!


### WorkFlow from LOCAL to STAGING
1. Create a new branch off the `develop` branch.
1. When you are done with this feature, submit a "Pull Request" into develop
1. When the Pull Request is approved and merged into `develop`, the staging site will be updated by CodeShip automagically


## ACF
We're source controlling the fields from ACF. Fields are split into separate PHP files that go into `theme_infrastructure` in the theme directory.

## React
We have some small React-powered sections of the site for filtering of Posts and Custom Posts.
---
### :memo: Resources / Documentation
- [Wireframes](https://drive.google.com/open?id=1ZdQqsbJduhIipOJydXcZeBZRqI3E-m2i)
- [Basecamp](https://basecamp.com/1771322/projects/15334547)
- [Google Drive](https://drive.google.com/drive/folders/167tGb1-gzrTDeE2krt5lSgczEEhsNTtJ)
- [Cost Summary](https://docs.google.com/spreadsheets/d/1OiuAjvElrhwzCJ_entVzQn-115cSZRV92oel30lpIUY/edit#gid=1352354711)
