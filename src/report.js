/**
 * Created by santosh on 6/23/17.
 */
var pdfMake = require('pdfmake');
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


var docDefinition = {
    pageSize: 'A4',
    content: 'This is an sample PDF printed with pdfMake'
};
printer.createPdfKitDocument(docDefinition).print();
