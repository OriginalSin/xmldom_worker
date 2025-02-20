const worker = new Worker('./src/worker.js', {
  type: 'module'
})
const width = 600;
const htmlCanvas = document.createElement('canvas')
htmlCanvas.width = htmlCanvas.height = width;
document.body.appendChild(htmlCanvas);
const offscreen = htmlCanvas.transferControlToOffscreen();

worker.postMessage({
  width,
  height: width,
  offscreen,
  svg: './example1.svg'
}, [offscreen])
