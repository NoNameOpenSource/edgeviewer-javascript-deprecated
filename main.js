const {app, BrowserWindow} = require("electron")

app.on("ready", function() {
	mainWindow = new BrowserWindow({width: 640, height: 480})
	mainWindow.loadFile("index.html")
})

app.on("window-all-closed", function() {
	app.quit()
})