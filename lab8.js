function showDate() {
    let out1 = document.getElementById('current-date1');
    let out2 = document.getElementById('current-date2');
    let out3 = document.getElementById('current-date3');
    let out4 = document.getElementById('current-date4');
    let out5 = document.getElementById('current-date5');
    let today = new Date();
    out1.innerHTML = 'Дата и время для русской локали ' + today.toLocaleString('ru-RU');
    out2.innerHTML = 'Дата и время для Германии ' + today.toLocaleString('de');
    out3.innerHTML = 'Дата и время для Греции ' + today.toLocaleString('el');
    out4.innerHTML = 'Дата и время для США ' + today.toLocaleString('en-US');
    out5.innerHTML = 'Дата и время для Испании ' + today.toLocaleString('es');
}
