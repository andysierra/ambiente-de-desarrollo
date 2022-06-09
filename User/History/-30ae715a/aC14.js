document
  .querySelectorAll('.container > div')
  .forEach(box=>addEventListener('click', e=>console.log('no era error de codepen: '+e.target)));