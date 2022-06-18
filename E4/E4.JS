
const pizzas = [
    {
      nombre: "Muzzarella $600",
      imagen: "/E4/Imagenes/muzzarella.jpg",
    },
    {
      nombre: "JyQ $800",
      imagen: "/E4/Imagenes/JyQ.jpg",
    },
    {  
      nombre: "Especial $1200",
      imagen: "/E4/Imagenes/especial.jpg",
    },
  ];
  
  let NyP = document.getElementById("NyP");
  let contenedor = document.getElementById("contenedor");
  document.getElementById("seleccion-input").addEventListener("input", (e) => {
    const val = e.target.value;
  
    if (!val) return;
  
    try {
      contenedor.src = pizzas[val].imagen;
      NyP.innerHTML = pizzas [val].nombre;
      

    } catch (e) {
      alert("Fuera de rango");
    }
  });

  localStorage.setItem('datos', JSON.stringify(pizzas));

  


 







