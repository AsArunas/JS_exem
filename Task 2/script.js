/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

var count = 0;
var btn__element = document.getElementById("btn__element");
var btn__state = document.getElementById("btn__state");

btn__element.onclick = function () {
  count++;
  btn__state.innerHTML = count;
};
