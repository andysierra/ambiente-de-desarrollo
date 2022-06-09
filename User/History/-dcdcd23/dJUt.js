document
  .querySelectorAll('.container > div')
  .forEach(box => box.addEventListener(('click'), addRemove)); // every node can add




function addRemove(e) { 
  const container = e.target.parentElement;
  const oldRects  = getRects();
  const nChildren = container.children.length;
  const animation = container.dataset.animation;

  if(e.ctrlKey) {
    animateNode(e.target, animation, false);
    nChildren>1 && container.removeChild(e.target);
  }
  else {
    const newBox = document.createElement('div');
    newBox.addEventListener('click', addRemove);
    newBox.append(document.createTextNode((nChildren+1).toString())); // put a number
    e.target.after(newBox);
    animateNode(newBox, animation, true);
  }

  const newRects = getRects();
  animateNodes(oldRects, newRects);
}




function getRects() {
  return Array
    .from(document.querySelectorAll('.container > div')) // use more specific selectors for better performance
    .map(box => {
      const rect = box.getBoundingClientRect();
      return {
        element: box,
        x: rect.x,
        y: rect.y
      }
    });
}





function getAnimation(animation, isBegin) {
  switch(animation) {
    case 'grow': return [
      {transform: isBegin? 'scale(0)' : 'none'},
      {transform: isBegin? 'none' : 'scale(0)'}
    ];
    case 'fade': return [
      {opacity: isBegin? '0' : '1'},
      {opacity: isBegin? '1' : '0'}
    ];
  }
}




function animateNode(box, animation, isBegin) {
  box.animate(
    getAnimation(animation, isBegin),
    {
      duration: isBegin? 250 : 450,
      easing:   'ease-'+(isBegin? 'out':'in')
    }
  );
  !isBegin && setTimeout(() => {}, 450);
}




function animateNodes(oldRects, newRects) {
  for(const newRect of newRects) {
    const oldRect = oldRects.find(rect => newRect.element === rect.element);

    let moveX, moveY;
    if(oldRect) {
      moveX = oldRect.x - newRect.x;
      moveY = oldRect.y - newRect.y;
    }

    newRect.element.animate([
      {transform: `translate(${moveX}px, ${moveY}px)`},
      {transform: 'none'}
    ], {
      duration: 250,
      easing: 'ease-out'
    });
  }
}