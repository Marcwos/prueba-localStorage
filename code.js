const tareaInput = document.getElementById("tareaInput");
const tareaList = document.getElementById("tareaList");


window.onload = function () {
    const guardarTareas = JSON.parse(localStorage.getItem("tareas")) || [];
    guardarTareas.forEach(tarea => mostrarTarea(tarea.text));
};


function mostrarTarea(text) {
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${text}</span>
        <div class="actions">
          <button onclick="eliminarTarea(this)">Eliminar</button>
        </div>
      `;

   tareaList.appendChild(li);
}

function agregarTarea() {
    const text = tareaInput.value.trim();
    if (text === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    mostrarTarea(text);
    tareaInput.value = "";
    guardarTarea();
}

function guardarTarea() {
    const tareas = [];
    tareaList.querySelectorAll("li").forEach(li => {
        tareas.push({
            text: li.querySelector("span").textContent,
        });
    });
    
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function eliminarTarea(button) {
    const li = button.parentElement.parentElement;
    li.remove();
    guardarTarea();
}
