const pdfjsLib = require("pdfjs-dist");
const svgToDataURL = require("svg-to-dataurl");

module.exports = async (pdf, pageNumber) => {
  const page = await pdf.getPage(pageNumber);
  const operatorList = await page.getOperatorList();
  console.log("## Get page : " + pageNumber);

  let svgGfx = new pdfjsLib.SVGGraphics(page.commonObjs, page.objs);
  svgGfx.embedFonts = true;

  let viewport = page.getViewport({ scale: 1.0 });
  const [, , width, height] = viewport.viewBox;
  viewport = { ...viewport, width, height };
  console.log("## Get viewport : " + pageNumber);

  const svg = await svgGfx.getSVG(operatorList, viewport);
  console.log("## Get SVG : " + pageNumber);
  const dataUrl = svgToDataURL(svg);

  return dataUrl;
};
