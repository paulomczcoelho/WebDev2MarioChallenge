function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
    
	return !(
        aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
    ); 
      
}

const init = () => {
    //get the avatar
    // const avatar = document.querySelector(".avatar");
    //get the coin
    
    moveCoin();
    window.addEventListener('keyup', function(e){
        if(e.key === 'ArrowDown' || e.key === 'Down'){
            moveVertical(avatar, 50);
        }else if(e.key === 'ArrowUp' || e.key === 'Up'){
            moveVertical(avatar, -50);
        }else if(e.key === 'ArrowRight' || e.key === 'Right'){
            moveHorizon(avatar, 50);
        }else if(e.key === 'ArrowLeft' || e.key === 'Left'){
            moveHorizon(avatar, -50);
        }

        
        if(isTouching(avatar,coin))moveCoin();
        console.log(avatar.y +" y and x " +  avatar.x );
      
    })
    
}
        
const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
    console.log(element.style.top);    
}
const moveHorizon = (element, amount) => {
    const currLeft = extractPos(element.style.left);
    element.style.left = `${currLeft + amount}px`;
}

const extractPos = (position) => {
    if(!position) return 100;
    return parseInt(position.slice(0, -2))
}
const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth)
    const y = Math.floor(Math.random() * window.innerHeight)
    // const y = ?
    coin.style.top = `${x}px`;
    // coin.style.?? = ??
    coin.style.left = `${y}px`;
    // score =+0;
    // console.log(score+=1);
    console.log(coin.style.top + " x moeda y " + coin.style.left);
    
}

init();
