let doc = document


let menuBtn1 = document.querySelector('.nav-icon6');
let menu = doc.querySelector('.menu')



menuBtn1.addEventListener('click', () => {
    menuBtn1.classList.toggle('open')
    menu.classList.toggle('to')
})





let block3 = doc.querySelector('.l1')
let poc_sec4 = doc.querySelector('.section2')
let block4 = doc.querySelector('.l2')
let poc_sec5 = doc.querySelector('.section4')
let block5 = doc.querySelector('.l3')
let poc_sec6 = doc.querySelector('.section3')
let block6 = doc.querySelector('.l4')
let poc_sec7 = doc.querySelector('.section5')

block3.addEventListener('click', jacor)
let rr = poc_sec4.offsetTop
function jacor(event) {
    event.preventDefault()
    window.scrollTo({
        top: rr,
        left: 0,
        behavior: 'smooth'
    })
}

block4.addEventListener('click', jaco)
let r2 = poc_sec5.offsetTop

function jaco(event) {
    event.preventDefault()
    window.scrollTo({
        top: r2,
        left: 0,
        behavior: 'smooth'
    })
}


block5.addEventListener('click', jac)
let r3 = poc_sec6.offsetTop

function jac(event) {
    event.preventDefault()
    window.scrollTo({
        top: r3,
        left: 0,
        behavior: 'smooth'
    })
}

block6.addEventListener('click', ja)
let r4 = poc_sec7.offsetTop

function ja(event) {
    event.preventDefault()
    window.scrollTo({
        top: r4,
        left: 0,
        behavior: 'smooth'
    })
}


const div = document.querySelector('.futer');
const className = div.className; // 'my-class'



let block33 = doc.querySelector('.l11')
let block44 = doc.querySelector('.l22')
let block55 = doc.querySelector('.l33')
let block66 = doc.querySelector('.l44')


block33.addEventListener('click', jacor)
let rrr = poc_sec4.offsetTop

function jacor(event) {
    event.preventDefault()
    window.scrollTo({
        top: rrr,
        left: 0,
        behavior: 'smooth'
    })
}

block44.addEventListener('click', jaco)
let r22 = poc_sec5.offsetTop

function jaco(event) {
    event.preventDefault()
    window.scrollTo({
        top: r22,
        left: 0,
        behavior: 'smooth'
    })
}


block55.addEventListener('click', jac)
let r33 = poc_sec6.offsetTop

function jac(event) {
    event.preventDefault()
    window.scrollTo({
        top: r33,
        left: 0,
        behavior: 'smooth'
    })
}

block66.addEventListener('click', ja)
let r44 = poc_sec7.offsetTop

function ja(event) {
    event.preventDefault()
    window.scrollTo({
        top: r44,
        left: 0,
        behavior: 'smooth'
    })
}

let bt = doc.querySelectorAll('button')
let rp = bt
let mod = doc.querySelector('.modal')

let gl = doc.querySelector('.gl')

for (let i of bt) {
    i.addEventListener('click', () => {
        mod.style.display = 'flex'
        gl.style.filter = 'blur(100px)'
    })
}

let net = doc.querySelector('.net')

// filter: blur(100px);

net.addEventListener('click', () => {
    mod.style.display = 'none'
    gl.style.filter = 'blur(0px)'
})

let d = doc.querySelector('.b')
let nez1 = doc.querySelector('.nez1')
let nez2 = doc.querySelector('.nez2')
let nez3 = doc.querySelector('.nez3')
let j = doc.querySelectorAll('.j')

d.addEventListener('mousemove', () => {
    nez1.classList.toggle('flex')
})
for (let i of j) {
    i.addEventListener('mousemove', () => {
        nez3.classList.toggle('flex')
    })
}







let form = doc.querySelector('form')
let t1 = doc.querySelector('.t1')
let t2 = doc.querySelector('.t2')
let tok = doc.querySelector('.tok')
form.addEventListener('submit', function (event) {
    event.preventDefault()
    if(t1.value != '' && t2.value != ''){
        
    const formData = new FormData(event.target);
    const dad = Object.fromEntries(formData.entries());
    console.log(dad);
    let top = JSON.stringify(dad)
    console.log(top);
    mod.style.display = 'none'
    gl.style.filter = 'blur(0px)'
    }
    
})


