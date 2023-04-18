const readXlsxFile = require('read-excel-file/node')
 
// File path.
readXlsxFile("ExcelMain.xlsx").then((rows) => {
    console.log("Hello")
// `rows` is an array of rows
// each row being an array of cells.
})