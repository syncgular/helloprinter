// use: node printFile.js [filePath printerName]
var printer = require("../lib"),
    filename = "./report.pdf";

console.log('platform:', process.platform);
console.log('try to print file: ' + filename);


if (process.platform != 'win32') {
    printer.printFile({
        filename: filename,
        printer : 'EPSON_LX_300_',
        //printer: process.env[3], // printer name, if missing then will print to default printer,
        options: // supported page sizes may be retrieved using getPrinterDriverOptions, supports CUPS printing options
        {
            'fit-to-page': true
        },
        success: function(jobID) {
            console.log("sent to printer with ID: " + jobID);
        },
        error: function(err) {
            console.log(err);
        }
    });
} else {
    // not yet implemented, use printDirect and text
    var fs = require('fs');
    printer.printDirect({
        data: fs.readFileSync(filename),
        printer: process.env[3], // printer name, if missing then will print to default printer
        success: function(jobID) {
            console.log("sent to printer with ID: " + jobID);
        },
        error: function(err) {
            console.log(err);
        }
    });
}