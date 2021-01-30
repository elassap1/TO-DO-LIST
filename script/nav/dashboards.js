import CreateElement from '../global/createElement.js'

let newElements = new CreateElement();

class Dashboard {

  // dashboard for add new list
  dashboardList = () =>{

    // dashbord
    newElements.createNewElements('div',1,'',['dashboard'],'','','#contenaire');
    newElements.createNewElements('div',1,'',['dashboard-new-list'],'','','.dashboard');

    // header info
    newElements.createNewElements('span',1,[`Title`],'','','','.dashboard-new-list');
    newElements.createNewElements('input',1,``,'',['placeholder'],['New List Title'],'.dashboard-new-list');
    const input = document.querySelector('.dashboard input');
    input.focus();

    // delete
    newElements.createNewElements('span',1,['X'],['dlt'],'','','.dashboard-new-list');

    // submit
    newElements.createNewElements('button',1,['Submit'],['submit'],'','','.dashboard-new-list');
  }

  // dashboard for add new task
  dashboardTask = (selector) =>{

    this.selector = selector;
    this.globalName = selector[0].toUpperCase() + selector.slice(1);

    // dashbord
    newElements.createNewElements('div',1,'',['dashboard'],'','','#contenaire');
    newElements.createNewElements('div',1,'',['dashboard-contenaire'],'','','.dashboard');

    // header info
    newElements.createNewElements('span',2,[`${this.globalName}`, 'Task Title'],'','','','.dashboard-contenaire');
    newElements.createNewElements('input',1,'','',['placeholder'],['Title'],'.dashboard-contenaire');

    // focus input
    const input = document.querySelector('.dashboard input');
    input.focus();

    // delete
    newElements.createNewElements('span',1,['X'],['dlt'],'','','.dashboard-contenaire');

    // content
    newElements.createNewElements('textarea',1,'',['field'],['rows'],['2'],'.dashboard-contenaire');

    // select place holder and resize textarea
    const area = document.querySelector('.dashboard textarea');
    area.setAttribute('placeholder','Task Note')
    area.setAttribute('cols','38')

    // time
    newElements.createNewElements('input',1,'','',[`type`],[`time`],'.dashboard-contenaire');

    // time
    newElements.createNewElements('input',1,'','',[`type`],[`date`],'.dashboard-contenaire');

    // submit
    newElements.createNewElements('button',1,['Submit'],['submit'],'','','.dashboard-contenaire');

  }

  // dashboard for add new book
  dashboardBook(){
    // dashbord
    newElements.createNewElements('div',1,'',['dashboard'],'','','#contenaire');
    newElements.createNewElements('div',1,'',['dashboard-book'],'','','.dashboard');

    // title
    newElements.createNewElements('span',2,[`Book`, 'Book Title'],'','','','.dashboard-book');
    newElements.createNewElements('input',1,'','',['placeholder'],['Title'],'.dashboard-book');

    // focus input
    const input = document.querySelector('.dashboard input');
    input.focus();

    // author
    newElements.createNewElements('span',1,[ 'Author Name'],'','','','.dashboard-book');
    newElements.createNewElements('input',1,'','',['placeholder'],['Author'],'.dashboard-book');

    // pages
    newElements.createNewElements('span',1,[ 'Book Pages'],'','','','.dashboard-book');
    newElements.createNewElements('input',1,'',['page'],['placeholder'],['Pages'],'.dashboard-book');
    const inputs = document.querySelector('.page');
    inputs.setAttribute('type','number');

    // readabel
    newElements.createNewElements('span',1,[ 'ReadAbility'],'','','','.dashboard-book');
    newElements.createNewElements('span',2,['Yes', 'No'],'','','','.dashboard-book');
    newElements.createNewElements('input',2,'','',['type'],['radio'],'.dashboard-book');

    //set attribute
    let radio = document.querySelectorAll('[type = radio]');
    radio[0].setAttribute('name','read')
    radio[0].checked = true;
    radio[1].setAttribute('name','read')
    // delete
    newElements.createNewElements('span',1,['X'],['dlt'],'','','.dashboard-book');

    // submit
    newElements.createNewElements('button',1,['Submit'],['submit'],'','','.dashboard-book');

  }
}

export default Dashboard;