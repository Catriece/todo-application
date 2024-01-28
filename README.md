# Your Favorite Family Task App

## Introduction

Welcome to Family Task App, a todo application designed to bring organization and collaboration to your family's daily activities. This application is here to simplify your family's routine by providing a centralized platform where everyone can stay connected and contribute to the shared responsibilities that make households run smoothly.

This project is broken up into two folders: `/client` for frontend and `/server` for the backend/api.

## GETTING STARTED:

### Cloning or Forking Repository - Pulling from GitHub

#### To `Clone` the repository:

In the terminal or command prompt, `cd` into your preferred project folder where you want to store the project. Use `git clone [SSH URL]` command to clone project onto your local machine.

SSH Url found in the `Code` dropdown list in GitHub

-or-

#### To `Fork` the repository:

In GitHub, click the `Fork` button and follow the instructions on the screen.

## Client Side

This project was initalized with Vite.

To start the development server:

- [ ] Open the terminal:
- [ ] `cd` to the `/client` folder.
- [ ] Install all dependencies using `npm install`
- [ ] Start the development server with `npm run dev` command
- [ ] Open the application in the web browser. The link to the application will be in the terminal.

> [!TIP]
> Be mindful of what folder you're starting in. You may need to include `cwc-todo-app/` before you `cd` into the `/client` folder
> [!TIP]
> I'm not sure wha it is for Windows but on Mac in order to make the link clickable use the `command` key while you hover over the link.

## Server Side

In a new terminal:

1. Navigate to the `/server` folder
2. Install all dependencies with `npm install`
3. Start the server with `nest run start:dev` command

## FOLDER STRUCTURE

```
|-- `client`
| |-- public
| |-- `src`
| | |-- `assets` (images etc housed here)
| | |-- `components`
| | |-- `pages` (pages (or different sections) where components are rendered)
| |-- `App.tsx` (all pages files rendered here)
| |-- `index.css` (global css file)
| |-- `main.tsx` (App file rendered here. App file wrapped in ChakraProvider)
| |-- & other necessary files

|-- `server`
| |-- `src`
| | |-- `app`
| | | |-- `app.controller.ts` (Top level controllers file)
| | | |-- `app.module.ts` (Top level modules file)
| | | |-- `app.service.ts` (Top level routes file)
| | |-- `entities`
| | | |-- `entity name` (Example: "Users")
| | | | |-- `entity file`
| | | | |-- `entity controllers`
| | | | |-- `entity module`
| | | | |-- `entity routes`
| | |-- test file
| | |-- `main.ts`
| |-- `test`
| |-- .env.copy (Environment Variables set up)
| |-- package.json (dependencies list) & all other necessary files
```
