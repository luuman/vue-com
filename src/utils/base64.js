export const getBase64Image = (imgurl) => {
  let image = new Image()
  let isLoad = false
  image.crossOrigin = ''
  image.src = imgurl
  image.onload = function () {
    isLoad = true
  }
  if (isLoad) {
    console.log(isLoad)
    return getCanvas(image)
  } else {
    console.log(isLoad)
  }
}

export const getCanvas = (img) => {
  var canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  var ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height)
  var ext = img.src.substring(img.src.lastIndexOf('.') + 1).toLowerCase()
  var dataURL = canvas.toDataURL('image/' + ext)
  return dataURL
}
