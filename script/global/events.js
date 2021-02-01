import MangeElement from '../nav/mange.js';
import Dashboard from '../nav/dashboards.js'
import Info from './info.js'

let info = new Info();
let dashboard = new Dashboard();
let mange = new MangeElement();

let selected = '';

class Events {

  // event listning
  catchEvents(){

    window.onclick = (e) =>{

      // remove the invalid dashboard part
      const invalid = document.querySelector('.dash_invalid');

      if(invalid != null){

        invalid.remove();

      }

      // click to add task
      if(e.target.classList[0] == 'add'){

        // count dashboard in DOM
        const dash = document.querySelectorAll('.dashboard');
        if(dash.length != 0){

          dash[0].remove()

        }
        // click to add task to book
        if(e.target.parentNode.parentNode.classList[0] == 'book'){

            // select contenaire
            selected = e.target.parentNode.parentNode.classList[0];

            // display the dashboard
            dashboard.dashboardBook()

        // click to add task to lists not book
        }else{

          // select contenaire
          selected = e.target.parentNode.parentNode.classList[0];

          // display the dashboard
          dashboard.dashboardTask(selected);

        }

      }else
      
      // hide the element from the interface
      if(e.target.classList[0] == 'hide'){

        e.target.parentNode.remove();

      }else

      // click delete button
      if(e.target.classList[0] == 'dlt'){

        // delete element from all dom
        if(e.target.parentNode.parentNode.classList[0] == 'display'){

          let dlt = e.target.parentNode.classList[0];

          dlt = dlt.slice(0, dlt.length-2);

          const dltall = document.querySelector(`.${dlt}`).remove();

        }else

        // delete list
        if(e.target.classList[1] == 'dlt-list'){

          e.target.parentNode.parentNode.remove();
        }
        if(e.target.parentNode.classList[0] == 'dashboard-contenaire'){

          // delete dashboard
          document.querySelector('.dashboard').remove();

        }else if(e.target.parentNode.classList[0] != 'dashboard-contenaire' && e.target.classList[1] == undefined){

        // delete task
        e.target.parentNode.remove();

        }

      }else 

      // click on submit
      if(e.target.classList[0] == 'submit'){

        // on submit new task
        if(e.target.parentNode.classList[0] == 'dashboard-contenaire'){

          //select the dashboard elements
          const content = document.querySelector('.dashboard-contenaire').children

          // check the fields is not empty
          if(content[2].value.length > 2 && content[4].value.length > 2 && content[5].value != '' && content[6].value != '' ){

            // add task to parent
            mange.addTasksToList(`${selected}`, content[2].value, content[4].value, content[5].value, content[6].value)

            // remove the dashbord
            document.querySelector('.dashboard').remove();

          }else{

            dashboard.dashboardInvalid();

          }

        } else 

        // on submit new list
        if(e.target.parentNode.classList[0] == 'dashboard-new-list'){

          const list = document.querySelector('.dashboard-new-list input').value;

          // add new list
          if(list.length >= 3){

            mange.addList('span', list, '../../icon/list.ico');

            // remove the dashbord
            document.querySelector('.dashboard').remove();

          }else{

            dashboard.dashboardInvalid();

          }

        }else

        // on submit new book
        if(e.target.parentNode.classList[0] == 'dashboard-book'){

          const list = document.querySelectorAll('.dashboard-book input');

          if(list[0].value.length >= 3 && list[1].value.length >= 3 && list[2].value != '' && (list[4].checked == true || list[3].checked == true )){

            mange.addBook(`${selected}`, list[0].value, list[1].value, list[2].value, list[3].checked)

            
            // remove the dashbord
            document.querySelector('.dashboard').remove();

          }else{

            dashboard.dashboardInvalid();

          }

        }

      }else

      // select list
      if(e.target.parentNode.classList[1] == 'nav_3'){

        const display = document.querySelectorAll('#display');

        const selector = e.target.parentNode.classList[0];

        if(display.length > 0){

          document.querySelector('#display').remove();

        }

        mange.displayListTask(selector)

      }else 

      // select list
      if(e.target.parentNode.parentNode.classList[1] == 'nav_3'){

        const display = document.querySelectorAll('#display');

        const selector = e.target.parentNode.parentNode.classList[0];

        if(display.length > 0){

          document.querySelector('#display').remove();

        }

        mange.displayListTask(selector)

      }

      info.setTasks();

    }

  }

  // resize text area
  autoResize(){

    // select textarea
    const area = document.querySelector('.field');

    // get length
    let lent = area.value.length;

    // calculate the correct rows
    let Yrow = Math.ceil(lent/40)+1;

    // check the length of rows
    if(area.getAttribute('rows') < Yrow){

      area.setAttribute('rows', `${Yrow}`)

    // check the length of rows
    }else if(area.getAttribute('rows') > Yrow && area.getAttribute('rows') > 2){

      area.setAttribute('rows', `${Yrow}`)

    }

  }

}

export default Events;
