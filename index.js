 console.log('hola');
 
 /*document.addEventListener("DOMContentLoaded",init);
    function init(){
      console.log("hola");
    }*/
   
      /*console.log(list);
      list.append("hola");
      list.append("que tal");*/
      /*const titulo = document.createElement('h3');
      titulo.textContent = 'Second checkbox';
      list.appendChild(titulo);

      const subtitulo = document.createElement('p');
      subtitulo.textContent = 'Descripcion de la tarea';
      list.appendChild(subtitulo);*/

     

      document.addEventListener("DOMContentLoaded",()=>{
        const list= document.getElementById("container_task");

        


        const listadoDeTareas= [];
        
        
        for( let i=0; i<listadoDeTareas.length; i++){
          createTask(listadoDeTareas[i]);
        }
      
        function createTask(task){
          const li = document.createElement('li');
          li.classList.add('list-group-item','body--list','d-flex','justify-content-between','px-3');
          li.setAttribute('id','tarea_'+task.id);

          const div = document.createElement('div');
          div.classList.add('position-relative');

          const input= document.createElement('input');
          input.classList.add('form-check-input','me-1','position-absolute');
          input.setAttribute('type','checkbox');
          div.appendChild(input);

          const divDes = document.createElement('div');
          divDes.classList.add('list--description');
            
          const h6 = document.createElement('h6');
          h6.textContent = task.titulo;
          divDes.appendChild(h6);
          
          const p = document.createElement('p');
          p.textContent = task.subtitulo;
          divDes.appendChild(p);
          div.appendChild(divDes);
          
          const a = document.createElement('a');
          a.classList.add('a--pencil','align-self-center');
          a.addEventListener('click',() => {
            console.log(task.id);
            const elementoActual= document.getElementById('tarea_'+task.id);
            elementoActual.parentNode.removeChild(elementoActual);
          });

          const icon = document.createElement('i');
          icon.classList.add('bi','bi-trash-fill');
          a.appendChild(icon);

          li.appendChild(div);
          li.appendChild(a);
          list.appendChild(li);
        }

        /*const addTask= document.getElementById("add");
        addTask.addEventListener("click", () =>{
          console.log('me diste click aumentar');

          listadoDeTareas.push({
            titulo:`tarea ${listadoDeTareas.length+1}`,
            subtitulo:`descripcion ${listadoDeTareas.length+1}`,
            id:`${listadoDeTareas.length+1}`});

          createTask(listadoDeTareas[listadoDeTareas.length-1]);

       
        });*/
      });
