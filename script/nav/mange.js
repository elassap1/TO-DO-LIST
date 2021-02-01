import CreateElement from '../global/createElement.js'

let newElements = new CreateElement();

// structure of lists
class MangeElement {

  // add item to therd part of nav 'family ...'
  addList(tagName='span',globalName='name', src='',end='0',tasks='0'){
    
  this.globalName = globalName;
  this.className = globalName.toLowerCase();
  this.tagName = tagName;

  if(src != '') 
  this.src = `<img src=${src}>`;
  else this.src = '';

  newElements.createNewElements('div',1,'',[`${this.className} nav_3`],'','','#nav');
  newElements.createNewElements('div',1,'','','','',[`.${this.className}`]);
  newElements.createNewElements(this.tagName,8,[this.src, `${this.globalName}`,'+', 'X',tasks,end,'End','Tasks'],['','','add', 'dlt dlt-list','tasks','end'],'','',[`.${this.className} div`]);

  }

  // new List structure
  newList(){

    newElements.createNewElements('div',1,'','',['id'],['new_list'],'#nav');
    newElements.createNewElements('span',2,['+', 'New List'],'','','','#new_list');

  }

  // add new task
  addTasksToList(parrent, input1, input2, input3, input4){

    this.parrent = parrent;

    const lent = document.querySelector(`.${parrent}`);

    this.child = `${parrent}_${lent.children.length}`

    newElements.createNewElements('div',1,'',[this.child],'','',`.${parrent}`);
    newElements.createNewElements('input',1,'','',[`type`],['checkbox'],`.${this.child}`);
    newElements.createNewElements('span',5,[`${input1}`,'X', `${input2}`, `${input3}`, `${input4}`],['','dlt', '', '', ''],'','',`.${this.child}`);

  }

  // add new book
  addBook(parrent, input1, input2, input3, input4){
    this.parrent = parrent;

    const lent = document.querySelector(`.${parrent}`);

    this.child = `${parrent}_${lent.children.length}`

    newElements.createNewElements('div',1,'',[this.child],'','',`.${parrent}`);
    newElements.createNewElements('input',1,'','',[`type`],['checkbox'],`.${this.child}`);
    newElements.createNewElements('span',5,[input1,'X', input2, input3, input4],['', 'dlt', '', '', ''],'','',`.${this.child}`);

  }

  // display the task and book if interface
  displayListTask(selector){ 

    this.selector = selector[0].toUpperCase()+selector.slice(1);

    newElements.createNewElements('div',1,'','',['id'],['display'],'#contenaire');
    newElements.createNewElements('div',1,'',['display'],'','','#display');
    newElements.createNewElements('div',1,[this.selector],['title'],'','','.display');

    let node;
    if(document.querySelector(`.${selector}`) != null){

      node = Array.from(document.querySelector(`.${selector}`).children);

      node.forEach(element => {

        const select = element.classList[0];

        // display task list not the book
        if(select != undefined && selector != 'book'){

          const content = document.querySelector(`.${select}`).children;

          let setcontent = [
            `<span>Task Finished </span><span>${content[0].checked}</span>`,
            `<span>Task Title </span><span>${content[1].innerHTML}</span>`,
            `<span>Note </span><span>${content[3].innerHTML}</span>`,
            `<span>Time </span><span>${content[4].innerHTML}</span>`,
            `<span>Date </span><span>${content[5].innerHTML}</span>`,
          ];

          newElements.createNewElements('div',1,'',[`${select}_d`],'','','.display');

          newElements.createNewElements('div',1,[setcontent[0]],'','','',`.${select}_d`);
          newElements.createNewElements('div',1,[setcontent[1]],'','','',`.${select}_d`);
          newElements.createNewElements('div',1,[setcontent[2]],'','','',`.${select}_d`);
          newElements.createNewElements('div',1,[setcontent[3]],'','','',`.${select}_d`);
          newElements.createNewElements('div',1,[setcontent[4]],'','','',`.${select}_d`);
          newElements.createNewElements('span',2,['X',`/\\ `],['dlt','hide'],'','',`.${select}_d`);

          document.querySelector('.hide').title = 'hide';

        }

        // display task of book
        if(select != undefined && selector == 'book'){

          const content = document.querySelector(`.${select}`).children;

          let setcontent = [
            `<span>Book Readed </span><span>${content[0].checked}</span>`,
            `<span>Book Title </span><span>${content[1].innerHTML}</span>`,
            `<span>Book Author</span><span>${content[3].innerHTML}</span>`,
            `<span>Book Pages</span><span>${content[4].innerHTML}</span>`,
            `<span>Book ReadAbility</span><span>${content[5].innerHTML}</span>`,
          ];

          newElements.createNewElements('div',1,'',[`${select}_d`],'','','.display');

          newElements.createNewElements('div',1,[setcontent[1]],'','','',`.${select}_d`);
          newElements.createNewElements('div',1,[setcontent[2]],'','','',`.${select}_d`);
          newElements.createNewElements('div',1,[setcontent[3]],'','','',`.${select}_d`);
          newElements.createNewElements('div',1,[setcontent[4]],'','','',`.${select}_d`);
          newElements.createNewElements('div',1,[setcontent[0]],'','','',`.${select}_d`);
          newElements.createNewElements('span',2,['X','/\\'],['dlt','hide'],'','',`.${select}_d`);

          document.querySelector('.hide').title = 'hide';
        }

      });
    }
  }

}

export default MangeElement;