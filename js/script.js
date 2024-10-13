let input = document.querySelector('input');

input.addEventListener('copy',function(){
    console.log('copied');
    
})

input.addEventListener('cut',function(){
    console.log('cut is occured');
    
})

input.addEventListener('paste',function(){
    console.log('paste is occured');
    
})
