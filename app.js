let greeting_box = document.querySelector('.main-container');
let allButtons = document.getElementById('all-btns');
let displayArea = document.getElementById('display-area');

allButtons.addEventListener('click', e =>{
    if (e.target.matches('button')) {
        let key = e.target;
        let action = key.dataset.action;
        let keyContent = key.textContent
        let displayName = displayArea.textContent;
        let previousBtn =  greeting_box.dataset.previousKeyType
      

        if (!action){
    
            name = key.textContent
            displayArea.textContent = name;
            greeting_box.dataset.previousKeyType = 'sbmit'           
           
        }

        if (action === 'sbmit'){  
            name = getName()
            console.log(name)
            console.log('working sumbit')
            displayArea.textContent = name;
        }

        if (action === 'hello-btn'){ 
            // console.log(previousBtn); 
            displayArea.textContent = 'Hello, ' + name;
            greeting_box.dataset.previousKeyType = 'hello-btn'
            console.log(previousBtn) 
        }
        
          if (action === 'gb-btn'){  
            // console.log('goodbye key!')
            if(document.getElementById('bye').textContent === 'Clear'){
                displayArea.textContent = '';
                document.getElementById('name-holder').value = '';
                
            }
            else if(previousBtn === 'hello-btn'){
                displayArea.textContent = 'Good bye, ' + name;
            }else if(previousBtn === 'gb-btn'){
                document.getElementById('bye').textContent = 'Clear'
            }
            greeting_box.dataset.previousKeyType = 'gb-btn' 
            console.log(previousBtn) 
        }
      

    }

});

function getName(){
     inputValue = document.getElementById('name-holder').value;
      return(inputValue);

}

