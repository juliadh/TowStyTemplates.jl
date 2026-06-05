const docid = document.getElementsByTagName("body")[0].id;

function onKonamiCode(cb) {
    var input = '';
    var key = '177183';
    document.addEventListener('keydown', function (e) {
        input += ("" + e.keyCode);
        if (input === key) {
            input = '';
            return cb();
        }
        if (!key.indexOf(input)) return;
        input = ("" + e.keyCode);
    });
}

onKonamiCode(function () {
    window.open('https://stylo.huma-num.fr/article/' + docid, '_blank');
});
