// // console.log('hello');

// let display = document.getElementById('display');

// //used like an array in here
// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map(button => {
//     //calback function for event listner
//     button.addEventListener('click' , (e) = {
//         //target of Eventlistner
//         switch(e.target.innerText){
//          case 'C':
//          display.innerText = '';    
//          break;
//          default:
//          display.innerText += e.target.innerText;
//   }

//         // console.log('clicked');
//         // console.log(e);
//         // console.log(e.target);
//         // console.log(e.target.innerText);
        
//     });

// });

let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                // allows block code for errors tested
                try{
                    // mathmatical operation evaluated  eval

                display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
                
            case '←':
             
            if (display.innerText){
       display.innerText = display.innerText.slice(0, -1);
          }
           break;
    
        default:
        display.innerText += e.target.innerText;
        
        }
    });
});