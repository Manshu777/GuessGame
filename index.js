   	
        	let fir = document.getElementById('firs');
        	let gameArea = document.getElementsByClassName('gameArea');
        let inpval2 = document.getElementById("inpT");
           let aud1 = new Audio("faildrum.mp3");
           let aud2 = new Audio("gams.mp3");
           let jeet = new Audio("jeet.mp3");
          let compguess;
        	let userNum=[];
            const init =()=>{
              compguess = Math.floor(Math.random() * 100);
             
              gameArea[0].style.display="none";

            }
            const startNewgame=()=>{
             inpval2.setAttribute("disabled",true);
           
            }
            const newLoadgam=()=>{
            	 aud2.play();
  
            	window.location.reload();
            	
            }
            const chan=()=>{
            	
             let gNum = document.getElementById("numm")
        	       let inpval = Number(document.getElementById("inpT").value);
        	            let empty = document.getElementById("inpT");
                userNum = [...userNum,inpval];
                  console.log(userNum)
                gNum.innerHTML = userNum;
                	let msgbox = document.getElementById("msgBox");
                	  console.log(compguess);
                	  if(userNum.length < maxGuess){
                if (inpval > compguess) {
                   msgbox.innerHTML = ` Your Number Is High 😒 `;
                   aud2.play();
                  empty.value = "";
                } else if(inpval < compguess){
                	msgbox.innerHTML = ` Your Number Is Low 🤦‍♂️`;
                	  console.log(inpval.value);
                	   aud2.play();
                	       empty.value = "";
                }
                else{
                	msgbox.innerHTML = ` Your Number is Correct 👍 `;
                	  msgbox.value=" ";
                	  startNewgame();
                	  jeet.play();
                }
            }else{
                      if (inpval > compguess) {
                   msgbox.innerHTML = ` You Lose!! ${compguess} `;
                   aud1.play();
                   startNewgame();
                } else if(inpval < compguess){
                	msgbox.innerHTML = ` You Lose!!  ${compguess} `;
                	 aud1.play();
                	startNewgame();
                }
                else{
                	msgbox.innerHTML = ` Your Number is Correct 👍 `;
                	 jeet.play();
                	startNewgame();
                }
              }
                document.getElementById("att").innerHTML = userNum.length;
            
            }
            const startGame=()=>{
            	fir.style.display = "none";
            	 gameArea[0].style.display="block";
            }
            const easyGame=()=>{
            	maxGuess = 10;
            	startGame();
            	aud2.play();
            }
            const hardGame=()=>{
            	maxGuess = 5
            	startGame();
            	aud2.play();
            }