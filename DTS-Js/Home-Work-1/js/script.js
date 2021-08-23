function convertSuhu() {
    let temp = Number(document.getElementById('temperature').value)
    let from = document.getElementById('from').value
    let to = document.getElementById('to').value
    let hasil

    if (from == 'celcius') {
        if (to == 'celcius') {
            hasil = temp
        } else if (to == 'fahrenheit') {
            hasil = (temp * 9 / 5) + 32
        } else if (to == 'kelvin') {
            hasil = temp + 273.15
        } else if (to == 'reamur') {
            hasil = temp * 4 / 5
        }
    } else if (from == 'fahrenheit') {
        if (to == 'celcius') {
            hasil = (temp - 32) * 5 / 9
        } else if (to == 'fahrenheit') {
            hasil = temp
        } else if (to == 'kelvin') {
            hasil = (temp - 32) * 5 / 9 + 273, 15
        } else if (to == 'reamur') {
            hasil = (temp - 32) * 4 / 9
        }
    } else if (from == 'kelvin') {
        if (to == 'celcius') {
            hasil = temp - 273.15
        } else if (to == 'fahrenheit') {
            hasil = temp - (273.15) * 9 / 5 + 32
        } else if (to == 'kelvin') {
            hasil = temp
        } else if (to == 'reamur') {
            hasil = (temp - 273) * 4 / 5
        }
    } else if (from == 'reamur') {
        if (to == 'celcius') {
            hasil = temp * 5 / 4
        } else if (to == 'fahrenheit') {
            hasil = (temp * 9 / 4) + 32
        } else if (to == 'kelvin') {
            hasil = (temp * 5 / 4) + 273
        } else if (to == 'reamur') {
            hasil = temp
        }
    }

    document.getElementById('resultLabel').removeAttribute('hidden')
    document.getElementById('result').removeAttribute('hidden')
    document.getElementById('result').value = hasil
}