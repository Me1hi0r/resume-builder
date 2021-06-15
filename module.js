alert("hi");
import pdfMake from "./pdfmake.js";
import pdfFonts from "./vfs_fonts.js";
pdfMake.vfs = pdfFonts.pdfMake.vfs;