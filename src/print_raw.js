﻿var printer = require("printer");


printer.printDirect({
    data: "Bala is great. Bala is here. Hello Bala thanku.       Hello.", // or simple String: "some text"
    // printer: 'HP_DeskJet_2130_series', // printer name, if missing then will print to default printer
    printer: 'EPSON_LX_300_',
    type: 'RAW', // type: RAW, TEXT, PDF, JPEG, .. depends on platform

    success: function(jobID) {
        console.log("sent to printer with ID: " + jobID);
    },
    error: function(err) { console.log(err); }
});

console.log(printer.printDirect);