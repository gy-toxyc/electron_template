/*
**  
**  This is a template of a renderer process of an Electron Project.
**  You are able to delete this file after setting up your project, as EVERY JavaScript file in the project that is not a main process or a preload process.
**
** The renderer process just has access to basic ES5 and the DOM.
**
** The code below is just an example that takes a method from the preload process which also takes information from the main process and prints it (from renderer process).
**
*/

const windowResponse = async () => {
    const response = await window.versions.ping()
    console.log(response) // prints out 'pong'
}

windowResponse();