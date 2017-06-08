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

    pageSize: { width: 1050, height: 500 },
    content: [
        {
            columns: [
                {
                    width: 350,
                    text: 'PAY WITH FREEPAY...EARN CASHBACK!!',
                    style: 'subheader'
                },
                {
                    width: 180,
                    text: 'TAX INVOICE ',
                    style: 'subheader',
                },
                {
                    width: 300,
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
                widths: [ 380, '*', 220],
                body: [
                    [
                        {text: [
                            { text: 'Unnati Trading Company  \n', italics: true, fontSize: 30,bold: true },
                            { text: 'Distributor for FMCG Product \n', fontSize: 20, bold: true },
                            { text: 'Shop No. 45, Gurunanak Nagar, Nath Pai Marg,  \n', fontSize: 17 },
                            { text: 'Mob.:  8828299466/7675008645' , fontSize: 17,bold: true },
                        ]},
                        {text: 'nothing interesting here', italics: true},
                        {text: [
                            { text: 'BILL NO :   123456\n', fontSize: 20 },
                            { text: 'DATE :        3456786 \n', fontSize: 20 },
                            { text: 'S. MAN :    Sunil Kumar \n', fontSize: 20},
                            { text: 'ROUTE :     Panvel \n', fontSize: 20},
                            { text: 'P.O.NO :     401201\n', fontSize: 20},
                        ]}
                    ]
                ]
            }
        },
        {
            style: 'tableExample2',
            table: {
                widths: [ '*', 60,100,50,100,100,100, 100],
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
                widths: [ '*', 60,100,50,100,100,100, 100],
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
            fontSize: 15,
            bold: true
        },
        bigger: {
            fontSize: 15,
            italics: true,
        },
        tableExample1: {
            margin: [0, 5, 0, 0]
        },
        tableExample2: {
            margin: [0, 0, 0, 0],
            alignment: 'center',
            fontSize: 17,


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