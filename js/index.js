function you_num() {
    const n = +document.fabinacci_script.num.value;

    var fibonacci = [1, 1];
    for (i = 2; i < n; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    document.getElementById('ansver').innerHTML = 'Ряд Фібоначчі = ' + fibonacci;
}