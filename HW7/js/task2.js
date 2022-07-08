const btn = document.querySelector('button');
function dialogue() {
    const firstAttempt = 100;
    const secondAttempt = 50;
    const thirdAttempt = 25;
    const confirm = window.confirm('Do you want to play a game?');
    if(confirm === true) {
      const random = Math.floor(Math.random() * 9);
      const useInp = prompt('Enter a number from 0 to 8');
     if(useInp === random) {
       const cont = window.confirm(`Congratulations, you won! Your prize is ${firstAttempt}$. Do you want to play again?`);
            if(cont === true) {
const randomIncr = Math.floor(Math.random() * 13);
const inpIncr = prompt('Enter a number from 0 to 12');
                if(randomIncr === inpIncr) {
                alert(`Amazing! This is your 1 attempt. The ball number is ${randomIncr}. Your number is ${inpIncr}. Your prize is ${firstAttempt + 200}$ now.`);
                }
                else {
                    const newInp = prompt(`Sorry. You've got 2 more attempts. The ball number is ${randomIncr}. Input another number.`);
                    if (newInp === randomIncr) {
                        alert(`Great! This is your 2 attempt. The ball number is ${randomIncr}. Your number is ${newInp}. Your prize is ${firstAttempt + 100}$ now.`);
                    }
                    else {
                        const thrInp = prompt(`Sorry. You've got 1 more attempt. The ball number is ${randomIncr}. Input another number.`);
                        if(thrInp === randomIncr) {
                            alert(`Nice job! This was your last attempt. The ball number is ${randomIncr}. Your number is ${newInp}. Your prize is ${firstAttempt + 50}$ now.`);
                        }
                        else {
                            alert(`This was your last attempt. The ball number is ${randomIncr}. Your number is ${thrInp}. You won ${firstAttempt}$`)
                        }
                    }

                }

            }
            else {
                alert(`Thank you for your participation. Your prize is ${firstAttempt}$.`);
            }
      }
      else {
        const secAtt = prompt('Sorry, not right :( So it\'s your second attempt! Enter a number from 0 to 8');
        if(secAtt === random) {
            const contS = window.confirm(`Congratulations, you won! Your prize is ${secondAttempt}$. Do you want to play again?`);
            if(contS === true) {
                const randomIncr = Math.floor(Math.random() * 13);
                const inpIncr = prompt('Enter a number from 0 to 12');
                                if(randomIncr === inpIncr) {
                                alert(`Amazing! This is your 1 attempt of the second round. The ball number is ${randomIncr}. Your number is ${inpIncr}. Your prize is ${secondAttempt + 200}$ now.`);
                                }
                                else {
                                    const newInp = prompt(`Sorry. You've got 2 more attempts. The ball number is ${randomIncr}. Input another number.`);
                                    if (newInp === randomIncr) {
                                        alert(`Great! This is your 2 attempt. The ball number is ${randomIncr}. Your number is ${newInp}. Your prize is ${secondAttempt + 100}$ now.`);
                                    }
                                    else {
                                        const thrInp = prompt(`Sorry. You've got 1 more attempt. The ball number is ${randomIncr}. Input another number.`);
                                        if(thrInp === randomIncr) {
                                            alert(`Nice job! This was your last attempt. The ball number is ${randomIncr}. Your number is ${newInp}. Your prize is ${secondAttempt + 50}$ now.`);
                                        }
                                        else {
                                            alert(`This was your last attempt. The ball number is ${randomIncr}. Your number is ${thrInp}. Your prize is ${secondAttempt}$.`)
                                        }
                                    }
                                }

            }
            else {
                alert(`Thank you for your participation. Your prize is: ${secondAttempt}$.`);
            }
        }
        else {
            const thirAtt = prompt('Very sad:( You haven\'t got it. So it\'s your third attempt! Enter a number from 0 to 8');
            if(thirAtt === random) {
                const contT = window.confirm(`Congratulations, you won! Your prize is ${thirdAttempt}$. Do you want to play again?`);
                if(contT === true) {
    
                        const randomIncr = Math.floor(Math.random() * 13);
                        const inpIncr = prompt('Enter a number from 0 to 12');
                                        if(randomIncr === inpIncr) {
                                        alert(`Amazing! This is your 1 attempt of the third round. The ball number is ${randomIncr}. Your number is ${inpIncr}. Your prize is ${thirdAttempt + 200}$ now.`);
                                        }
                                        else {
                                            const newInp = prompt(`Sorry. You've got 2 more attempts. The ball number is ${randomIncr}. Input another number.`);
                                            if (newInp === randomIncr) {
                                                alert(`Great! This is your 2 attempt. The ball number is ${randomIncr}. Your number is ${newInp}. Your prize is ${thirdAttempt + 100}$ now.`);
                                            }
                                            else {
                                                const thrInp = prompt(`Sorry. You've got 1 more attempt. The ball number is ${randomIncr}. Input another number.`);
                                                if(thrInp === randomIncr) {
                                                    alert(`Nice job! This was your last attempt. The ball number is ${randomIncr}. Your number is ${newInp}. Your prize is ${thirdAttempt + 50}$ now.`);
                                                }
                                                else {
                                                    alert(`This was your last attempt. The ball number is ${randomIncr}. Your number is ${thrInp}. Your prize is ${thirdAttempt}$.`)
                                                }
                                            }
                                        }
        
                    }
    
                }
                else {
                    alert(`Thank you for your participation, but you haven't got the numbers.`);
                }
        }
      }

    }

    else {
        alert('You did not become a billionaire, but can.');
    }

}
btn.addEventListener('click', dialogue);
