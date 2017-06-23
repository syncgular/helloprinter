var PdfPrinter = require('pdfmake/src/printer');
var fs = require('fs');

var fonts = {
    Roboto: {
        normal: './fonts/Roboto-Regular.ttf',
        bold: './fonts/Roboto-Bold.ttf',
        italics: './fonts/Roboto-Italic.ttf',
        bolditalics: './fonts/Roboto-BoldItalic.ttf'
    }
};
var printer = new PdfPrinter(fonts);


var item = "A breif informaton about product details.";
var itemList = [item, item, item, item, item, item, item, item, item];


var dd = {
    header: {
        margin: 10,
        columns: [
            'Left part',
            { text: 'Right part', alignment: 'right' }
        ]
    },



    footer: {
        columns: [
            'Left part',
            { text: 'Right part', alignment: 'right' }
        ]
    },

    pageSize: { width: 400, height: 150 },

    content: itemList
}

var pdfDoc = printer.createPdfKitDocument(dd);
pdfDoc.pipe(fs.createWriteStream('basics.pdf')).on('finish', function() {
    //success
});
pdfDoc.end();