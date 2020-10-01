# Alberici Hillsdale Fabricators | Kienlan Constructors

[ ![Codeship Status for integritystl/alberici-hillsdale](https://app.codeship.com/projects/685902a0-6c1c-0136-2086-5ef55451d790/status?branch=master)](https://app.codeship.com/projects/298413)

## Team
- Dev Lead: Julia Cramer
- Devsigner: Jordan Fautley
- Dev: Laura Kong, Drew Newman
- PM: Jamal McLaughlin

## Links
- Local: [http://albhillsdale.local](http://albhillsdale.local)
- WP Engine Stage (Hillsdale): [http://albhillsdale.staging.wpengine.com](http://albhillsdale.staging.wpengine.com)
- WP Engine Prod (Hillsdale): [http://albhillsdale.wpengine.com](http://albhillsdale.wpengine.com)
- Live Site (Hillsdale): [http://hillsdalefabricators.com](http://hillsdalefabricators.com)
- WP Engine Stage (Kienlen): [http://kienlen.staging.wpengine.com](http://kienlen.staging.wpengine.com)
- Live Site (Kienlen): [https://www.kienlenconstructors.com/](https://www.kienlenconstructors.com/)


## Overview

This is a WordPress site for Alberici Hillsdale Fabricators. It's built so that we can use it on more than 1 site. The other site this is built for is Kienlan Constructors.

Because this repo is used on more than 1 site, you'll occasionally need to pull content data from one or the other. Saving a profile in Migrate DB Pro for each site helps speed this up a bit.

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
1. When this is done, run `gulp` and it will watch for SASS/JS file changes. Put your JS files into `js/src` to have them compile into 1 file called `app.js`.
1. If you're working on a React component, run `npm run start` for compiling those changes in Webpack.
1. Start coding!

### Deployment and Site Configuration ###
Because this theme is being used on 2 different sites, there are 4 deployment scripts. You'll find these in the `scripts` directory. The staging scripts will run when code is merged into `develop`; the production ones when code is merged to `master`.

We've set up a configuration to change the site's CSS styles in an ACF Option under `Global Settings` of the WP Admin. However, ***all code changes will push regardless of which site the code change was created for.*** Keep this in mind if changes need to only apply to a specific site.

### WorkFlow from LOCAL to STAGING
1. Create a new branch off the `develop` branch.
1. When you are done with this feature, submit a Pull Request into `develop`
1. When the Pull Request is approved and merged into `develop`, the staging site will be updated by CodeShip automagically

### WorkFlow from DEVELOP to MASTER
1. When the `develop` branch is in a solid state, make a Pull Request to `master`.
1. Once the Pull Request is merged to `master`, Codeship tasks will run to push the changes.
1. When the Pull Request is approved and merged into `master`, the staging site will be updated by CodeShip automagically

## ACF
We're source controlling the fields from ACF. Fields are split into separate PHP files that go into `theme_infrastructure` in the theme directory.

We're using the `ACF to Rest API` plugin to get ACF data on the React components. Make sure you have this plugin enabled so you get all data.

## React
We have some small React-powered sections of the site for filtering of Posts and Project Custom Post Types. These files live in `themes/alberici-hillsdale/js/react_src` and are compiled using Webpack inside the `webpack.config.js` file in the root directory.

To compile the changes made to the React files, run `npm run start` in your Terminal.

---
### :memo: Resources / Documentation
- [Wireframes](https://drive.google.com/open?id=1ZdQqsbJduhIipOJydXcZeBZRqI3E-m2i)
- [XD Designs](https://xd.adobe.com/spec/88fb363a-09a1-45ec-62f3-c2798da6b202-feca/screen/9c6546c3-4eed-4a0d-80b7-f9cbcbaad18f/Kienlen-Homepage/)
- [Ticket Board](https://www.pivotaltracker.com/n/projects/2225349)
- [Basecamp](https://basecamp.com/1771322/projects/15334547)
- [Google Drive](https://drive.google.com/drive/folders/167tGb1-gzrTDeE2krt5lSgczEEhsNTtJ)
- [Cost Summary](https://docs.google.com/spreadsheets/d/1OiuAjvElrhwzCJ_entVzQn-115cSZRV92oel30lpIUY/edit#gid=1352354711)
