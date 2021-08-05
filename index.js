const fontsArr = [
    "Impact,Charcoal,sans-serif",
    "Brush Script MT, cursive",
    "Luminari, fantasy",
    "Comic Sans MS, cursive",
    "American Typewriter, serif"
]
    
const gradientsArr = [

['#F6416C', '#FFF6B7'],
['#623AA2', '#F97794'],
['#3677FF',	'#FFD26F'],
['#3CD500', '#FFF720'],
['#F067B4', '#81FFEF']
]

const weightsArr= [
"400","500","600","700","900"
]

const borderDiv = document.getElementById('border-div');
const beautifyName = document.getElementById('name')
const beautifierBtn = document.querySelector('button')
const nameInput = document.getElementById("bname")



beautifierBtn.addEventListener('click', beautify)

function beautify(){
    if(nameInput.value.length == 0){
        beautifyName.innerText = 'Pumpkin'
        nameInput.value = 'Pumpkin'
    } else{
        beautifyName.innerText = nameInput.value
    }


// generate random number
let randomNumber = Math.floor(Math.random() * 5);
beautifyName.style.fontFamily = fontsArr[randomNumber];
beautifyName.style.fontWeight = weightsArr[randomNumber]
beautifyName.style.color = gradientsArr[randomNumber][0]   
beautifierBtn.style.borderColor = gradientsArr[randomNumber][1]
borderDiv.style.background =  
`linear-gradient(65deg, ${gradientsArr[randomNumber][0]},${gradientsArr[randomNumber][1]})`

beautifyName.classList.remove('pop-name')
void beautifyName.offsetWidth;
beautifyName.classList.add('pop-name')


//  transition
if(beautifyName.classList.contains('trans')){
    beautifyName.classList.remove('trans')
} else{beautifyName.classList.add('trans')}

if(beautifyName.classList.contains('untrans')){
    beautifyName.classList.remove('untrans')
} else{(beautifyName.classList.add('untrans'))
}
}
