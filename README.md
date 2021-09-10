# Watcher

watcher is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.

watcher does not require any additional changes to your code or method of development.

## Getting started

```
git clone https://github.com/Soul-Remix/watcher.git
cd watcher
if on linux or mac run this command: chmod +x index.js
npm install
npm link
```

## How to use
```
watcher [filename]
```
or simply 
```
watcher
```
And wathcer will automatically start your index.js file. </br>
If there's no index.js file watcher will exit and show an error.
