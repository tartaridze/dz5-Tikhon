const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const euro = document.querySelector('#euro')

// som.addEventListener('input', () => {
//     const request = new XMLHttpRequest()
//     request.open('GET', 'data.json')
//     request.setRequestHeader('Content-type', 'application/json')
//     request.send()
//
//     request.addEventListener('load', () => {
//         const response = JSON.parse(request.response)
//         usd.value = (som.value / response.usd).toFixed(2)
//     })
// })

const convertator = (elem, target, target2, isTrue, isTrue2) => {
    elem.addEventListener('input', () => {
        const request = new XMLHttpRequest()
        request.open('GET', 'data.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send()

        request.addEventListener('load', () => {
            const data = JSON.parse(request.response)
            if(isTrue) {
                target.value = (elem.value / data.usd).toFixed(2)
            }else if (isTrue2) {
                target.value = (elem.value * data.usd).toFixed(2)
            }else {
            target.value = "";
            }
            target2.value = (elem.value / data.euro).toFixed(2)

            if (elem.value === "") {
                target.value = ""
                target2.value = ""
            }
        })
    })
}

convertator(som, usd, euro, true, false)
convertator(usd, som, euro,false, false)
convertator(euro, som, usd, false, true)