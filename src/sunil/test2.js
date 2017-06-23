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

    pageSize: { width: 600, height: 300 },
    content: [


        {
            style: 'tableExample1',
            table: {
                widths: [ 200, '*', '*'],
                body: [
                    [
                        {text: [
                            { text: 'Rajdoom ENTERPRISE  \n', italics: true, fontSize: 12,bold: true },
                            { text: '1. Krishna Bhawan, Jivdaya Lane, \n', fontSize: 10, bold: true },
                            { text: 'Ghatkopar(West), Mumbai-400086  \n', fontSize: 8 },
                            { text: 'Tel.:  25166596' , fontSize: 8,bold: true },
                        ]},
                        {text: '\nM/s', italics: true, alignment: 'left',},
                        {text: [
                            { text: 'TAX INVOICE NO :   1234\n', fontSize: 8 },
                            { text: '\nDATE :        3456786 \n', fontSize: 8 },

                        ], alignment: 'left',}
                    ]
                ]
            }
        },
        {
            style: 'tableExample2',
            table: {
                widths: [ 100, '*','*','*','*','*','*', '*','*','*'],
                body: [
                    [
                        {text: 'Item Name', bold: true,border: [true, false, false, true]},
                        {text: 'Qty', bold: true,border: [true, false, false, true]},
                        {text: 'Free', bold: true,border: [true, false, false, true]},
                        {text: 'Batch No.', bold: true,border: [true, false, false, true]},
                        {text: 'Sch %', bold: true,border: [true, false, false, true]},
                        {text: 'Rate', bold: true,border: [true, false, false, true]},
                        {text: 'Exp Date.', bold: true,border: [true, false, false, true]},
                        {text: 'tax %.', bold: true,border: [true, false, true, true]},
                        {text: 'MRP', bold: true,border: [true, false, false, true]},
                        {text: 'Total', bold: true,border: [true, false, true, true]},
                    ],
                    [
                        {text: 'Tata Tea',border: [true, false, false, false]},
                        {text: '100',border: [true, false, false, false]},
                        {text: '5',border: [true, false, false, false]},
                        {text: '100',border: [true, false, false, false]},
                        {text: '5',border: [true, false, false, false]},
                        {text: '15',border: [true, false, false, false]},
                        {text: '71.25',border: [true, false, false, false]},
                        {text: '546.25',border: [true, false, true, false]},
                        {text: '71.25',border: [true, false, false, false]},
                        {text: '546.25',border: [true, false, true, false]},
                    ],
                    [
                        {text: 'Tata Tea',border: [true, false, false, false]},
                        {text: '100',border: [true, false, false, false]},
                        {text: '5',border: [true, false, false, false]},
                        {text: '100',border: [true, false, false, false]},
                        {text: '5',border: [true, false, false, false]},
                        {text: '15',border: [true, false, false, false]},
                        {text: '71.25',border: [true, false, false, false]},
                        {text: '546.25',border: [true, false, true, false]},
                        {text: '71.25',border: [true, false, false, false]},
                        {text: '546.25',border: [true, false, true, false]},
                    ],
                    [
                        {text: 'Tata Tea',border: [true, false, false, false]},
                        {text: '100',border: [true, false, false, false]},
                        {text: '5',border: [true, false, false, false]},
                        {text: '100',border: [true, false, false, false]},
                        {text: '5',border: [true, false, false, false]},
                        {text: '15',border: [true, false, false, false]},
                        {text: '71.25',border: [true, false, false, false]},
                        {text: '546.25',border: [true, false, true, false]},
                        {text: '71.25',border: [true, false, false, false]},
                        {text: '546.25',border: [true, false, true, false]},
                    ],
                    [
                        {text: 'Tata Tea',border: [true, false, false, false]},
                        {text: '100',border: [true, false, false, false]},
                        {text: '5',border: [true, false, false, false]},
                        {text: '100',border: [true, false, false, false]},
                        {text: '5',border: [true, false, false, false]},
                        {text: '15',border: [true, false, false, false]},
                        {text: '71.25',border: [true, false, false, false]},
                        {text: '546.25',border: [true, false, true, false]},
                        {text: '71.25',border: [true, false, false, false]},
                        {text: '546.25',border: [true, false, true, false]},
                    ],
                    [
                        {text: 'Tata Tea\n\n',border: [true, false, false, false]},
                        {text: '100',border: [true, false, false, false]},
                        {text: '5',border: [true, false, false, false]},
                        {text: '100',border: [true, false, false, false]},
                        {text: '5',border: [true, false, false, false]},
                        {text: '15',border: [true, false, false, false]},
                        {text: '71.25',border: [true, false, false, false]},
                        {text: '546.25',border: [true, false, true, false]},
                        {text: '71.25',border: [true, false, false, false]},
                        {text: '546.25',border: [true, false, true, false]},
                    ]
                ]
            },

        },
        {
            style: 'tableExample3',
            table: {
                widths: [ 180, '*','*','*'],

                body: [
                    [
                        {text: [
                            { text: '\nVAT TIN : 27470406168V W.E.F. 01/04/2016 \n', fontSize: 8},
                            { text: 'CST TIN : 27470406168C  W.E.F. 01/04/2016 \n', fontSize: 8},
                            { text: 'D.L TIN : 27470406168V  W.E.F. 01/04/2016\n', fontSize: 8},
                        ]},
                        {text: [
                            { text: '\nVAT TIN : 27470406168V W.E.F. 01/04/2016 \n', fontSize: 8},
                            { text: 'CST TIN : 27470406168C  W.E.F. 01/04/2016 \n', fontSize: 8},
                            { text: 'D.L TIN : 27470406168V  W.E.F. 01/04/2016\n', fontSize: 8},
                        ]},
                        {text: 'Cash Disc :', bold: true},
                        {text: 'DistDisc :', bold: true},
                    ],

                ]
            },

        },


    ],
    styles: {
        header: {
            fontSize: 12,
            bold: true
        },
        subheader: {
            fontSize: 8,
            bold: true
        },
        bigger: {
            fontSize: 10,
            italics: true,
        },
        tableExample1: {
            margin: [0, 0, 0, 0],
            alignment: 'center',
        },
        tableExample2: {
            margin: [0, 0, 0, 0],
            alignment: 'center',
            fontSize: 8,


        },
        tableExample3: {
            margin: [0, 0, 0, 0],
            fontSize: 8,


        }

    },
    defaultStyle: {
        columnGap: 0,
    }
};

var pdfDoc = printer.createPdfKitDocument(dd);
pdfDoc.pipe(fs.createWriteStream('basics.pdf')).on('finish', function() {
    //success failure
});
pdfDoc.end();