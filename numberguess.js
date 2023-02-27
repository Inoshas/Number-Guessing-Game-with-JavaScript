
 /* Organize---------------*************************

            // additional softwares we need
           // constant variables
           //gloabal variables
           //context between HTML elements and Javascrip variables
           //classes, interfaces and objects
           //function
           // event handler
           //get data from data base and or generate data
           // anycode you need
**********************************************************************************/

        // Linking body to script ************************
            // all para
            const paraintro=document.getElementById("paraintro");
            const para1=document.getElementById("para1");
            const para2=document.getElementById("para2");
            const para_array_print=document.getElementById("para_array_print")
  
            const number_gue= document.getElementById("number_gue");
            const number_gue2= document.getElementById("number_gue2");
            const list1=document.getElementById("list1")
            
  
            
              // All input
            const inputmin = document.getElementById("inputmin");
            const inputmax=document.getElementById("inputmax");
            const input1=document.getElementById("input1");
  
            const button_restart =document.getElementById("button_restart");
            const button_Exit =document.getElementById ("button_Exit");
            const button_easy = document.getElementById("button_easy");
            const button_hard =document.getElementById("button_hard");
            const button_myguess=document.getElementById("button_myguess")
  
          // ***********************************************
         
  
              // Global variables:
              let lower_bound;
              let upper_bound; 
              let correct_num ;
              let entered_num;
              let count=0;
              let state1 =0;
              let array_numbers=[];

              let number_of_times;
  
              let myWindow;
              
      

 
              // *********** This is to close the window when press Exit ***
              function closeMe()
              {
                  window.opener = self;
                  window.close();
              }
              //**********************************************
  
  
              // Functions for my code start here ::::::
              // compare two numbers: and return state 0,1,-1:

    
  
              function compare_two_num(cor_num, ent_num){
                  if (cor_num===ent_num){
                      count++
                      //console.log(count , state) 
                      return state1=4 }
                  else if(cor_num> ent_num){
                      count++
                      //console.log(count , state) 
                      return state1=-2; 
                      }
                  else if (cor_num < ent_num) {
                      count++
                      //console.log(count , state) 
                      return state1=2;
                      } 
                      console.log("checking done", count, state1)
              }
  
  
              function print_state(arg){
                  switch(arg){
                      case 4:
                          //console.log("Congratulations !! You won !! Number of attempts are " + count)
                          return "Congratulations !! You won !! Number of attempts are " + count;
                          break; 
                      case 2:
                          //console.log(" Enter a number less than " + entered_num+ " and your number of attempts so far are "  +  count)
                          return " Enter a number less than " + entered_num+ " and your number of attempts so far are "  +  count;
                          break;   
                      case -2: // case set the value:
                          //console.log(" Enter a number bigger  than "  + entered_num+ " and your number of attempts so far are "  +  count)
                          return " Enter a number bigger  than "  + entered_num+ " and your number of attempts so far are "  +  count ;
                          break;
                      default: // good to have to find errors: 
                          //console.log("Wrong attempt")
                          return "Wrong attempt: Press refresh button to start over"
                          break;
                      }
                   }
               
             
  
  
              function start_game(){
            
              // insert min number and press enter to continue
              inputmin.focus();
              inputmin.addEventListener("change", (event)=>{
                  //console.log("You press enter" + inputmin.value); 
                  lower_bound=Number(inputmin.value);
                  //para1.innerText = "Here we go...!!! Type a number between "+ lower_bound + " and " + upper_bound;
              });
  
              inputmax.addEventListener("change", (event)=>{
                  //console.log("You press enter" + inputmax.value);
                  upper_bound= Number(inputmax.value);

                  
                  let difference= upper_bound-lower_bound;
                  number_of_times = Math.ceil(Math.log2(difference));
                  button_easy.addEventListener("click", (event)=>{
                    number_of_times =number_of_times*2;
                    para1.innerText = "Here we go...!!! You have " +   number_of_times  + " attempts to guess the correct number. Type a number between "+ lower_bound + " and " + upper_bound 
                    })
                  button_hard.addEventListener("click", (event)=>{
                    para1.innerText = "Here we go...!!! You have " +  number_of_times   + " attemps to guess the correct number. Type a number between "+ lower_bound + " and " + upper_bound 
                  })
                  console.log(number_of_times)
                  
                  // Define random number after get both random values:
                  correct_num = Math.floor(Math.random() * (upper_bound - lower_bound)) + lower_bound;
                  // Need this for testing purpose::
                  console.log(correct_num)
              });
  
                  
              // para2.innerText="Press restart button to start a new game or exit button to exit the game"
                  input1.addEventListener("change", (event)=>{ 
                      entered_num=Number(input1.value);
                      array_numbers.push(entered_num)
                      if (isNaN(entered_num)){
                          para2.innerText="This is not a number. Please enter a number between "+ lower_bound + " and " + upper_bound   
                      }
                      else{
                          if (state1 === 4 || count===number_of_times){
                      para2.innerText="Press restart button to start a new game or exit button to exit the game"
                          } 
                      else{
                  
                  let print_val=print_state(compare_two_num(correct_num,entered_num));
                  //console.log(print_val)
                  para2.innerText=print_val; 
                  console.log("Testing start : state :" ,  state1, "count:",count)
                      }
                  }
                  input1.value='';
                  });
                  
                  console.log(array_numbers)

                  button_myguess.addEventListener("click", (event)=>{
                    para_array_print.innerText="Your guesses were " + array_numbers;
                    console.log(array_numbers)
                    
                    ///document.write("The number you entered" + array_numbers)
                   });
  
              }
  
  
          //:  Ending functions from this point::::::::::::::::::::::
  
              // MAIN CODE GOES HERE---------------
  
              start_game();
  
              // This is for restart button
              button_restart.addEventListener("click", function () {
                  location.reload();
                  //return false;
              start_game();
              });
         