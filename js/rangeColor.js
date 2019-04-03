const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');


function color(tombol, sr, sg, sb) {
    tombol.addEventListener('input', function () {
        const r = sr.value;
        const g = sg.value;
        const b = sb.value
        document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
    });
}

color(sMerah, sMerah, sHijau, sBiru);
color(sHijau, sMerah, sHijau, sBiru);
color(sBiru, sMerah, sHijau, sBiru);