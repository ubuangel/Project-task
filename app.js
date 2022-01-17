document.getElementById('formTask').addEventListener('submit',savetask)

function savetask(e){
  let title=document.getElementById("title").value
  let descripcion=document.getElementById("description").value;
  console.log(title,descripcion)

    const task={

      title,
      descripcion,
    };


    //utilizando local storage memeoria de lpropio navegador
    //antes de almacenarlo convertir a string
  //  localStorage.setItem('task',JSON.stringify(task));

    //en console los datos son alacenado (desde el javascript)como objetos pero es muho mejor en formato string

    //loq ueharemos es crear un arreglo de js y ir a ctualizandolo mas item y almacenarlo enen local storage
    //metodo que convierte de  string a objeeeeeeeeee
    //JSON.parse(localStorage.getItem('task'))

    if (localStorage.getItem('tasks')===null) {
      let tasks=[];
      tasks.push(task);
      localStorage.setItem('tasks',JSON.stringify(tasks));

    }else {
      //obtener las tareas que tengo almacenado en el local y almcenar lo en una variable
    let tasks =JSON.parse(localStorage.getItem('tasks'));//obntener tareas antiguas
    tasks.push(task);//ingresar dato arreglo ,actulizar
    localStorage.setItem('tasks',JSON.stringify(tasks));

    }

    getTask();
    document.getElementById('formTask').reset();
  e.preventDefault();
}

function getTask(){
  let tasks = JSON.parse(localStorage.getItem('tasks'));

  let taskView=document.getElementById('tasks');

  taskView.innerHTML='';

  for (var i = 0; i < tasks.length; i++) {
    let title=tasks[i].title;
    let descripcion=tasks[i].descripcion;
//guardar edentrod e ltask voew
    taskView.innerHTML +=`<div class="card" mb-3>
      <div class="card-body">
          <p>${title} - ${descripcion}</p>
          <a class="btn btn-danger" onclick="deleteTask('${title}')">
            Eliminar
          </a>
      </div>

    </div>`;
  }

}


function deleteTask(title){

  let tasks=JSON.parse(localStorage.getItem('tasks'));
//recorrer tasks
  for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].title== title) {
          tasks.splice(i,1);//quitar tarea desde el arreglo
      }

  }

  localStorage.setItem('tasks',JSON.stringify(tasks));//almacenar las tarea menos ese item

  //vuelva ejecutar getTask
  getTask();

}
