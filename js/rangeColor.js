// write by reza afri suhangga hasibuan
// a.k.a rzhasibuan
const sRed = document.querySelector('input[name=sRed]');
const sGreen = document.querySelector('input[name=sGreen]');
const sBlue = document.querySelector('input[name=sBlue]');
const valueRGB = document.querySelector('#value');

valueRGB.innerHTML = "(" + sRed.value + "," + sGreen.value + "," + sBlue.value + ")";
document.body.style.backgroundColor = 'rgb(' + sRed.value + ',' + sGreen.value + ',' + sBlue.value + ')';

function color(tombol, sr, sg, sb) {
    tombol.addEventListener('input', function () {
        const r = sr.value;
        const g = sg.value;
        const b = sb.value;
        document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
        valueRGB.innerHTML = "(" + r + "," + g + "," + b + ")";
    });
}

color(sRed, sRed, sGreen, sBlue);
color(sGreen, sRed, sGreen, sBlue);
color(sBlue, sRed, sGreen, sBlue);