class Info{
  // task total and end task
  setTasks(){

    let checkInput = 0;

    // select all tasks
    const allTasks = Array.from(document.querySelectorAll('.nav_3'));

    // set task in correct parent
    allTasks.forEach(element => {

      // get [parent class, child length]
      let info = [element.classList[0],element.children.length];

      // select all input in which has the same parent
      let input = Array.from(document.querySelectorAll(`.${info[0]} input`));

      // iterator on input
      input.forEach(i => {

        // the input checked or not
        if(i.checked == true){

          // count the input checked
          checkInput++;

          i.nextSibling.style.textDecoration = 'line-through black'

        }else{

          i.nextSibling.style.textDecoration = 'none'

        }

        // select dom of end tasks
        const end = document.querySelector(`.${info[0]} div .end`);

        // set the value of tasks end
        end.innerHTML = checkInput;

        })

      // select dom of all tasks
      const taskss = document.querySelector(`.${info[0]} div .tasks`);

      // set the value of all task
      taskss.innerHTML = info[1]-1;

    });
  }

}

export default Info;