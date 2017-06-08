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

    pageSize: { width: 700, height: 500 },
    content: [
        {
            columns: [
                {
                    width: 250,
                    text: 'PAY WITH FREEPAY...EARN CASHBACK!!',
                    style: 'subheader'
                },
                {
                    width: 150,
                    text: 'TAX INVOICE ',
                    style: 'subheader',
                },
                {
                    width: 175,
                    text: 'FREEPAY MORE...EARN MORE!! ',
                    style: 'subheader'
                },
                {
                    width: 100,
                    text: 'ORIGINAL ',
                    style: 'subheader'
                }
            ]
        },

        {
            style: 'tableExample1',
            table: {
                widths: [ 250, '*', 150],
                body: [
                    [
                        {text: [
                            { text: 'Unnati Trading Company  \n', italics: true, fontSize: 18,bold: true },
                            { text: 'Distributor for FMCG Product \n', fontSize: 12, bold: true },
                            { text: 'Shop No. 45, Gurunanak Nagar, Nath Pai Marg,  \n', fontSize: 10 },
                            { text: 'Mob.:  8828299466/7675008645' , fontSize: 10,bold: true },
                        ]},
                        {text: 'nothing interesting here', italics: true},
                        {text: [
                            { text: 'BILL NO :   123456\n', fontSize: 12 },
                            { text: 'DATE :        3456786 \n', fontSize: 12 },
                            { text: 'S. MAN :    Sunil Kumar \n', fontSize: 12},
                            { text: 'ROUTE :     Panvel \n', fontSize: 12},
                            { text: 'P.O.NO :     401201\n', fontSize: 12},
                        ]}
                    ]
                ]
            }
        },
        {
            style: 'tableExample2',
            table: {
                widths: [ '*', 50,50,50,50,50,50, 50],
                height: [150],
                headerRows: 1,
                body: [
                    [
                        {text: 'PRODUCT NAME', bold: true},
                        {text: 'M.R.P', bold: true},
                        {text: 'CASS/PCS', bold: true},
                        {text: 'RATE', bold: true},
                        {text: 'SCHEME', bold: true},
                        {text: 'VAT %', bold: true,},
                        {text: 'VAT AMT.', bold: true},
                        {text: 'NET AMT.', bold: true},
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
                    ],
                    [
                        {text: 'Tata Tea\n\n',border: [true, false, false, true]},
                        {text: '100',border: [true, false, false, true]},
                        {text: '5',border: [true, false, false, true]},
                        {text: '100',border: [true, false, false, true]},
                        {text: '5',border: [true, false, false, true]},
                        {text: '15',border: [true, false, false, true]},
                        {text: '71.25',border: [true, false, false, true]},
                        {text: '546.25',border: [true, false, true, true]},
                    ]
                ]
            },

        },
        {
            style: 'tableExample2',
            table: {
                widths: [ '*', 50,50,50,50,50,50, 50],
                height: [150],
                headerRows: 1,
                body: [
                    [
                        {text: 'PRODUCT NAME', bold: true},
                        {text: 'M.R.P', bold: true},
                        {text: 'CASS/PCS', bold: true},
                        {text: 'RATE', bold: true},
                        {text: 'SCHEME', bold: true},
                        {text: 'VAT %', bold: true,},
                        {text: 'VAT AMT.', bold: true},
                        {text: 'NET AMT.', bold: true},
                    ],
                    [
                        {text: 'Tata Tea',border: [true, false, false, true]},
                        {text: '100',border: [true, false, false, true]},
                        {text: '5',border: [true, false, false, true]},
                        {text: '100',border: [true, false, false, true]},
                        {text: '5',border: [true, false, false, true]},
                        {text: '15',border: [true, false, false, true]},
                        {text: '71.25',border: [true, false, false, true]},
                        {text: '546.25',border: [true, false, true, true]},
                    ]
                ]
            },

        },


    ],
    styles: {
        header: {
            fontSize: 18,
            bold: true
        },
        subheader: {
            fontSize: 10,
            bold: true
        },
        bigger: {
            fontSize: 15,
            italics: true,
        },
        tableExample1: {
            margin: [0, 5, 0, 0],
            alignment: 'center',
        },
        tableExample2: {
            margin: [0, 0, 0, 0],
            alignment: 'center',
            fontSize: 10,


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