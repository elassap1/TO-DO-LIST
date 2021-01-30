
class CreateElement {
  constructor(){
    //console.log('start create new element')
  }
  // method to create new elements
  createNewElements(tagName='div', length=1, content='', setClass='', setId='', value='', setParrent=''){

    const parrentNode = document.querySelector(setParrent);

    for (let index = 0; index < length; index++) {

      const element = document.createElement(tagName);

      if(content != '')
      element.innerHTML = `${content[index]}`;

      if(setClass != '')
      element.classList += `${setClass[index]}`;

      if(setId != '')
      element.setAttribute(`${setId}`, `${value}`);

      parrentNode.appendChild(element);

    }

  }

}

export default CreateElement;
/*
let create = new CreateElement('div',2,['df','0'],['dfd','0'],'src','https','body');
// just log the  spcefic parametre
console.log(create.setClass);
// invok to create one or more elements
create.createNewElements();
create.createNewElements();
*/