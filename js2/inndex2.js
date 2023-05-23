let doc = document
let arr = [{
    'id': 1,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220829180436207.png',
    'h1': 'H8',
    'p': 'Hemoglobin Analyzer',
},
{
    'id': 2,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/12/20221207184431276.png',
    'h1': 'H100',
    'p': 'Hemoglobin Analyzer',
},
{
    'id': 3,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220824172027768.png',
    'h1': 'H9',
    'p': 'Hemoglobin Analyzer',
}, {
    'id': 4,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220824143321392.png',
    'h1': 'ECL8000',
    'p': 'Automated ECL Immunoassay Analyzer',
}, {
    'id': 5,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/2022082415159603.png',
    'h1': 'AC610',
    'p': '5-part Hematology Analyzer',
}, {
    'id': 6,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220811192030382.png',
    'h1': 'FA-160',
    'p': 'Immunofluorescence Analyzer',
}, {
    'id': 7,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220829112640675.png',
    'h1': 'T60A',
    'p': 'Fiber Laser Hair Removal',
}, {
    'id': 8,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/2022082612049834.png',
    'h1': 'LC-320',
    'p': 'Electromagnetic Shockwave',
}, {
    'id': 9,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220826125047265.png',
    'h1': 'LC-560',
    'p': 'ESWT (Extracorporeal shock wave therapy)',
}, {
    'id': 10,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/2022082616243848.png',
    'h1': 'SmarteScope VL',
    'p': 'Video Laryngoscope',
}, {
    'id': 11,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220829180436207.png',
    'h1': 'H8',
    'p': 'Hemoglobin Analyzer',
}, {
    'id': 12,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220829180436207.png',
    'h1': 'H8',
    'p': 'Hemoglobin Analyzer',
}, {
    'id': 13,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220829180436207.png',
    'h1': 'H8',
    'p': 'Hemoglobin Analyzer',
}, {
    'id': 14,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220829180436207.png',
    'h1': 'H8',
    'p': 'Hemoglobin Analyzer',
}, {
    'id': 15,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220829180436207.png',
    'h1': 'H8',
    'p': 'Hemoglobin Analyzer',
}, {
    'id': 16,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220829180436207.png',
    'h1': 'H8',
    'p': 'Hemoglobin Analyzer',
}, {
    'id': 17,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220829180436207.png',
    'h1': 'H8',
    'p': 'Hemoglobin Analyzer',
}, {
    'id': 18,
    'mig': 'http://en.lifotronic.com/vancheerfile/Images/2022/8/20220829180436207.png',
    'h1': 'H8',
    'p': 'Hemoglobin Analyzer',
}
]

let slize = doc.querySelector('.m1')
let slize1 = doc.querySelector('.m2')
let slize2 = doc.querySelector('.m3')
let xaxa = doc.querySelector('.xaxa')
for (let i of arr) {
    let top = doc.createElement('div')
    let img = doc.createElement('img')
    img.src = i.mig
    img.classList.add('mig')
    top.appendChild(img)
    let h1 = doc.createElement('h1')
    h1.classList.add('ih1')
    let o = doc.createTextNode(i.h1)
    h1.appendChild(o)
    top.appendChild(h1)
    let p = doc.createElement('p')
    p.classList.add('ip')
    let l = doc.createTextNode(i.p)
    p.appendChild(l)
    top.appendChild(p)
    xaxa.appendChild(top)
    top.classList.add('p')
    if (i.id <= 6) {

        slize.appendChild(top)
    }
    else if (i.id >= 7 && i.id <= 12) {

        slize1.appendChild(top)
    }
    else if (i.id >= 12 && i.id <= 18) {

        slize2.appendChild(top)
    }

}
for (let i of arr) {
    let top = doc.createElement('div')
    let img = doc.createElement('img')
    img.src = i.mig
    img.classList.add('mig')
    top.appendChild(img)
    let h1 = doc.createElement('h1')
    h1.classList.add('ih1')
    let o = doc.createTextNode(i.h1)
    h1.appendChild(o)
    top.appendChild(h1)
    let p = doc.createElement('p')
    p.classList.add('ip')
    let l = doc.createTextNode(i.p)
    p.appendChild(l)
    top.appendChild(p)
    top.classList.add('p')
    xaxa.appendChild(top)

}
let btn = doc.querySelector('.btn')

// btn.onclick = () => {

// }
let r = doc.querySelector('.dad')

let sec = doc.querySelector('section')
btn.addEventListener('click', jacor)
function jacor() {
    r.classList.toggle('none')
    sec.classList.toggle('section')
    xaxa.classList.toggle('block')

}

let menuBtn1 = document.querySelector('.nav-icon6');
let menu = doc.querySelector('.menu')


menuBtn1.addEventListener('click', () => {
    menuBtn1.classList.toggle('open')
    menu.classList.toggle('to')
})


