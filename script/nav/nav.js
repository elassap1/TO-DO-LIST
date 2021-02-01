import MangeElement from './mange.js'
import CreateElement from '../global/createElement.js'
import Events from '../global/events.js'
import Dashboard from './dashboards.js'
import Validation from '../global/validation.js'

let validation = new Validation();
let newElements = new CreateElement();
let mange = new MangeElement();
let event = new Events();
let dashboard = new Dashboard();

const nav = () =>{

  // nav contenaire
  newElements.createNewElements('div',1,'','',['id'],['nav'],'#contenaire');

  // today
  mange.addList('span', 'Today', '../../icon/today.ico');

  // Someday
  mange.addList('span', 'Week', '../../icon/someday.ico');

  // Upcoming
  mange.addList('span', 'Month', '../../icon/upcoming.png');

  // Anytime
  mange.addList('span', 'Anytime', '../../icon/anytime.ico');

  // Logbook
  mange.addList('span', 'Book', '../../icon/logbook.ico');

  // family tasks
  mange.addList('span', 'Family', '../../icon/list.ico');

  // work tasks
  mange.addList('span', 'Work', '../../icon/list.ico');

  // hobbies tasks
  mange.addList('span', 'Hobbies', '../../icon/list.ico');

  // new list
  mange.newList();

  // event
  window.addEventListener('keyup', (e) =>{

    if(e.target.classList[0] == 'field'){

      // ivoked function
      event.autoResize();
    }

//    console.log('keydown');
    validation.valid();

  });

  // check multi event on click
  event.catchEvents();

  // new list dashboard
  const newlist = document.querySelector('#new_list');

  newlist.onclick = () =>{
    dashboard.dashboardList();
  }
}

const display = () => {

  mange.displayListTask('Today')

}
export {nav, display};