import { PaperSvg } from "./paparsvg";

const svgs = document.querySelectorAll(".block-bg-paper-svg");

svgs.forEach((el) => {
  const paperSvg = new PaperSvg(el);
});
