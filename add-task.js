document.addEventListener('DOMContentLoaded',()=>{
    const form = document.getElementById('form');
    const save = document.getElementById('save');
    save.addEventListener('click',()=>{
        const title = form.title.value;
        if(title === ''){
            alert('El titulo es requerido');
            return;
        }
        const description = form.description.value;

        const tareasLocales = localStorage.getItem('TAREAS');
        let listadoDeTareas = [];
        let id = 1;

        if(tareasLocales !== null){
            listadoDeTareas = JSON.parse(tareasLocales);
            id = listadoDeTareas[listadoDeTareas.length-1].id+1;
        }

        const tarea = {titulo:title, descripcion:description, id};
        listadoDeTareas.push(tarea);

        localStorage.setItem('TAREAS',JSON.stringify(listadoDeTareas));
        location.href = 'index.html';
    })
})