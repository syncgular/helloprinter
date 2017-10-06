var printer = require("printer");


String.prototype.toBytes = function() {
    var arr = []
    for (var i = 0; i < this.length; i++) {
        arr.push(this[i].charCodeAt(0))
    }
    return arr;
}

var printData = "1234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890\n".toBytes().concat([0x1b, 0x4d, 0x01]);
console.log(printData);

printer.printDirect({
    data: new Buffer(printData),
    printer: 'EPSON_LX_300_',
    type: 'RAW',
    success: function(jobID) {
        console.log("sent to printer with ID: " + jobID);
    },
    error: function(err) { console.log(err); }
});