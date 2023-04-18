import { readXlsxFile } from "https://unpkg.com/read-excel-file@5.x/bundle/read-excel-file.min.js";
 
// File path.
readXlsxFile("ExcelMain.xlsx").then((rows) => {
    console.log("Hellssso")
// `rows` is an array of rows
// each row being an array of cells.
})