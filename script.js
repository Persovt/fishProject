function nextSlide() {
  setTimeout(() => slider(), 10000);
}
let left = 0;
function slider() {
  const sliderList = document.querySelector(".slider__list");
  const sliderWidth = sliderList.clientWidth;
  const windowWidth = window.innerWidth;
  if (sliderWidth - windowWidth > left) left += windowWidth;
  else left = 0;

  console.log(sliderWidth - windowWidth, left, "Console");
  sliderList.style.left = `-${left}px`;

  nextSlide();
}
nextSlide();
const ciricle = document.querySelectorAll(".ciricle");
const section = document.querySelectorAll("section");
console.log(ciricle);
let path2 = "";
ciricle.forEach((item, index, arr) => {
  if (index != arr.length - 1) {
    console.log(
      item.offsetTop,
      item.offsetLeft,
      ciricle[index + 1].offsetLeft,
      ciricle[index + 1].offsetTop,
      section[index].offsetWidth,
      section[index].offsetHeight
    );
    path2 += `M${Math.trunc(
      item.offsetLeft + item.offsetWidth / 2
    )} ${Math.trunc(item.offsetTop + item.offsetHeight / 2)}Q ${Math.trunc(
      item.offsetLeft * 1.2
    )} ${Math.trunc(item.offsetTop * 1.2)} ${Math.trunc(
      section[index].offsetWidth / 2
    )} ${Math.trunc(
      section[index].offsetTop + section[index].offsetHeight
    )}T${Math.trunc(
      ciricle[index + 1].offsetLeft + ciricle[index + 1].offsetWidth / 2
    )} ${Math.trunc(
      ciricle[index + 1].offsetTop + ciricle[index + 1].offsetHeight / 2
    )}`;
  }
});
//955 2149
//199.769 3416.8
// path2 += `M${item.offsetLeft + item.offsetWidth / 2} ${
// 	item.offsetTop + item.offsetHeight / 2
//   }
// 		Q ${section[index].offsetWidth / 1.25} ${
// 	section[index].offsetHeight * 1.85
//   } ${section[index].offsetWidth / 2} ${
// 	section[index].offsetTop + section[index].offsetHeight
//   }
// 		T${ciricle[index + 1].offsetLeft + ciricle[index + 1].offsetWidth / 2} ${
// 	ciricle[index + 1].offsetTop + ciricle[index + 1].offsetHeight / 2
//   }`;
console.log(path2);

const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
console.log(section[0].offsetWidth, section[0].offsetHeight);
path.setAttributeNS(null, "d", path2);
console.log(
  document.documentElement.scrollHeight,
  document.documentElement.scrollWidth
);
// path.setAttribute("D", "M165 0Q235 37 165 80Q86 114 165 147");
path.setAttributeNS(null, "stroke", "#387298");
path.setAttributeNS(null, "fill", "transparent");
path.setAttributeNS(null, "stroke-linecap", "round");
svg.append(path);
document.body.append(svg);
svg.style = `width: ${document.documentElement.scrollWidth}; height: ${document.documentElement.scrollHeight}; position: absolute; left:0;top:0`;

path.style += `fill-rule:evenodd;
 stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;
 stroke-miterlimit:4;stroke-dasharray:10;stroke-dashoffset:0`;

const mover = document.createElement("img");
mover.src =
  "./img/delivery.png";
mover.className = "mover";
console.log(`offset-path: path("${path2}")`);
//mover.style.cssText += 'offset-path: path("M898 1803Q 1000.8 2086.7999999999997 598.5 2404T299 3005M299 3005Q 282 3529.2 598.5 3606T898 4207")'

mover.style.cssText += `offset-path:path("${path2}")`;
console.log(window.scrollY);
addEventListener("scroll", (e) => {
 
  let maxHeight = 0;
  const startY = ciricle[0].offsetTop+200;
  const endY = ciricle[ciricle.length-1].offsetTop;

  console.log(startY, endY, window.scrollY)
  mover.style.offsetDistance = +((window.scrollY+window.innerHeight/2-startY) / (endY-startY)).toFixed(2)*100 + "%"
});
mover.style.offsetDistance = "20%";
document.body.append(mover);
