const inputObject= document.getElementById('inputList');
const addList = document.getElementById('addList');
const do_List = document.getElementById('Do-List');
let count = 0;
let color =['red','blue','violet','pink','orange'];

addList.addEventListener('click', ()=>{
    const to_do_container = document.createElement('div');
    const to_do_object = document.createElement('span');
    const delete_object = document.createElement('i');
    to_do_container.setAttribute('class','to_do_container');
    if(inputObject.value != '' && count != 5){
        to_do_object.innerText = inputObject.value;
        to_do_object.setAttribute('id','to-do-object')
        inputObject.value = ''
        to_do_container.style.backgroundColor = color[count];
        to_do_container.append(to_do_object); 
        
        delete_object.setAttribute('class','fa-solid fa-rectangle-xmark');
        delete_object.setAttribute('id' , 'delete_object');
        to_do_container.append(delete_object);
        ++count;
        do_List.append(to_do_container)
    }else{
        
        inputObject.value = '';
    }
 
})

do_List.addEventListener('click', (e)=>{
    if(e.target.getAttribute('id') =='to-do-object'){
        e.target.style.textDecoration="line-through";
        e.target.style.color="white";
        
    }
    
    if(e.target.getAttribute('id')=='delete_object'){
       e.target.parentElement.remove();
       --count;
   }
})