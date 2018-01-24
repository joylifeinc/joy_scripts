# joy-scripts
> Scripts for Joy webapps

`joy-scripts` wraps common build configurations and scripts for Joy webapps

## Installation
Download to your project file with npm i --save-dev @withjoy/joy-scripts
Add the scripts to your `package.json`:
```json
{
  "scripts": {
    "start": "joy-scripts dev",
    "build": "joy-scripts build",
    "lint": "joy-scripts lint",
    "format": "joy-scripts format"
  }
}
```

## Project layout:
`joy-scripts` does require some initial set up of your project:
```
tsconfig.json is required in the root folder
src/client.tsx is the file that will be built
src/index.html will be the template for the html file
dist/ is the bundled project output folder
```
## Commands:
```
`joy-scripts lint` : Runs lint with tslint
`joy-scripts format` : Runs prettier
`joy-scripts build` : Builds with webpack
`joy-scripts dev` : Runs webpack dev server
```