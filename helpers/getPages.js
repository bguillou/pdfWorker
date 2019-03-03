const pdfjsLib = require("pdfjs-dist");
const { v4 } = require("uuid");
const getPageToDataUrl = require("./getPageToDataUrl");

require("./domstubs.js").setStubs(global);

const testPath = "http://media.pragprog.com/titles/ktuk/excerpts.pdf";

let oldUrl = testPath;

module.exports = async (res, pdfPath = testPath) => {
  console.time("# Get PDF in");

  const pdf = await pdfjsLib.getDocument({
    url: pdfPath,
    nativeImageDecoderSupport: pdfjsLib.NativeImageDecoding.DISPLAY
  });

  console.log("# PDF loaded");
  console.log("# PDF pages numbers: " + pdf.numPages);

  for (let index = 1; index <= pdf.numPages; index++) {
    res.write(`${await getPageToDataUrl(pdf, index)}`);
  }

  res.end();

  console.timeEnd("# Get PDF in");
  return stream;
};
