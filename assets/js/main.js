function relogio () {
    const relogio = document.querySelector('.relogio')
    const iniciar = document.querySelector('.iniciar')
    const pausar = document.querySelector('.pausar')
    const zerar = document.querySelector('.zerar')

    function mostrarHora(segundos) {
        const hora = new Date(segundos * 1000)
        return hora.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    let segundos = 0
    let timer

    function iniciaRelogio() {
        timer = setInterval(function () {
            segundos++
            relogio.innerHTML = mostrarHora(segundos)
        }, 1000)
    }

    iniciar.addEventListener('click', function (event) {
        clearInterval(timer)
        iniciaRelogio()
    })

    pausar.addEventListener('click', function (event) {
        clearInterval(timer)
    })

    zerar.addEventListener('click', function (event) {
        clearInterval(timer)
        relogio.innerHTML = '00:00:00'
        segundos = 0
    })
}
relogio ()
