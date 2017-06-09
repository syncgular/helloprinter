/**
 * Created by abc on 08/06/2017.
 */

var BrowserWindow  = require('electron').remote;
var PDFWindow = require('electron-pdf-window');

var win = new BrowserWindow({ width: 800, height: 600 });

PDFWindow.addSupport(win);

win3.loadURL('file://src/sunil/test.html');
