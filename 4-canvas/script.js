// Setup canvas
const canvas = document.getElementById('canvas')

// Atur ukuran canvas
canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Context bang
const c = canvas.getContext('2d')

// Manipulate the canvas

// Make rectangle

// Prepare its behavior
//c.fillStyle = 'pink'
//c.strokeStyle = '#333'
//c.lineWidth = '5'

//c.rect(50, 50, 300, 300)

//// put that behavior
//c.fill()
//c.stroke()

//// Make Circle / Arc
//c.fillStyle = 'lightgreen'

//// make the color of the circle different from the rectangle
//c.beginPath()
//c.arc(550, 200, 150, 0, 2 * Math.PI)
//c.fill()
//c.stroke()

//// Make triangle
//c.fillStyle = 'lightblue'
//c.beginPath()
//c.moveTo(900, 50)
//c.lineTo(1050, 350)
//c.lineTo(750, 350)
//c.closePath()
//c.stroke()
//c.fill()

//! Don't forget to call fill() 
//! after making shape to see the result

let x = 300,
    y = 200,
    radius = 150,
    vx = 5,
    vy = 5

function draw() {
    window.requestAnimationFrame(draw)
    console.log('draw!', x, vx)
    // Remove previous drawn shape
    c.clearRect(0, 0, innerWidth, innerHeight)

    // draw the shape again
    c.fillStyle = 'lightgreen'
    c.beginPath()
    c.arc(x, y, radius, 0, 2 * Math.PI)
    c.fill()
    c.stroke()

    if (x + radius > innerWidth || x - radius < 0) vx = -vx

    if (y + radius > innerHeight || y - radius < 0) vy = -vy
    x += vx
    y += vy
}

draw()
