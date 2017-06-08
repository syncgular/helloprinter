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

    pageSize: { width: 500, height: 150 },

    content: [{
            text: 'Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World\n' +
                'Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World' +
                "Hello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello WorldHello World",
            margin: [0, 0],
        }, {
            text: "JAI"
        },
        {
            text: "SHREE"
        },
        {
            text: "RAM"
        }

    ]
}

var pdfDoc = printer.createPdfKitDocument(dd);
pdfDoc.pipe(fs.createWriteStream('basics.pdf')).on('finish', function() {
    //success
});
pdfDoc.end();