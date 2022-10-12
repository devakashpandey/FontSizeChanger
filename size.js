
function sizeChanger(size)
{
  return function()
  {
    document.body.style.fontSize = size + "px";
  }
}

document.getElementById("size-10").addEventListener("click", sizeChanger(10));
document.getElementById("size-13").addEventListener("click", sizeChanger(13));
document.getElementById("size-18").addEventListener("click", sizeChanger(18));
document.getElementById("size-22").addEventListener("click", sizeChanger(22));