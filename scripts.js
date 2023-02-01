
// this func will create a new hex color
const getRandomColor = () => {
    const hexChar = ['0','1','2','3','4','5','6','7','8','9','0',  'A','B','C','D','E','F']

    let color = '#';
    for (let i = 0; i < 6; i++){
        // will mult a rand num by the length of the hexChar array
        color += hexChar[Math.floor(Math.random() * hexChar.length)]
    }
    return color
}

const renderRandomColor = () => {
    const currentColor = getRandomColor()
    document.getElementById('refresh').style.background = currentColor
    document.getElementById('renderHex').innerHTML = currentColor
}

renderRandomColor()

// const refreshWebsite = () => {
//     setTimeout(() => {
//         location.reload()
//     },500)
// }