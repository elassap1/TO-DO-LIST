
class Validation{


  valid(){

    let allInput = document.querySelectorAll('input');

    allInput.forEach(input => {

      if(input == document.activeElement){

        // validation
        if(input.type == 'text'){

          if(input.value.length > 20 || input.value.length < 3){

            if(!input.hasAttribute('invalid')){

              if(input.hasAttribute('valid')){

                input.removeAttribute('valid');

              }

              input.setAttribute('id','invalid');

            }

          }else {

            input.removeAttribute('invalid');

            if(!input.hasAttribute('valid')){

              input.setAttribute('id','valid');

            }

          }

        }

        // validation
        if(input.type == 'time' || input.type == 'date'){

          if(input.value == ''){

            if(!input.hasAttribute('invalid')){

              if(input.hasAttribute('valid')){

                input.removeAttribute('valid');

              }

              input.setAttribute('id','invalid');

            }

          }else {

            input.removeAttribute('invalid');

            if(!input.hasAttribute('valid')){

              input.setAttribute('id','valid');

            }

          }

        }
      }

    });

  }

  unvalid(){

    allInput.forEach(input => {

      console.log(input);

    });

  }

}

export default Validation;