import React, { useEffect, useState } from "react";

const promiseEjercicio = () => {
  return new Promise((resolve, reject) => {
    //Aca deberia ir la consulta a la API
    setTimeout(
      () =>
        resolve([
          { id: 1, destacado: true, nombre: "mango" },
          { id: 2, destacado: true, nombre: "limon" },
          { id: 3, destacado: true, nombre: "pera" },
          { id: 4, destacado: true, nombre: "manzana" },
          { id: 5, destacado: true, nombre: "tomate" },
        ]),
      100
    );
  });
};

export const EjercicioAfter = () => {
  const [productos, setProductos] = useState([]);

  const consultarPromesa = () => {
    promiseEjercicio().then((data) => {
      const dataFiltrada = data.filter((producto) => producto.destacado);
      setProductos(dataFiltrada);
    });
  };

  useEffect(() => {
    consultarPromesa();
  }, []);

  return (
    <>
      {productos.length === 0 ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <ul>
            {productos.map((producto) => (
              <li key={producto.id}>{producto.nombre}</li>
            ))}
          </ul>
          <h1>{productos.length}</h1>
        </>
      )}
    </>
  );
};

//condicion ? (ejecuta si es true) : (ejecuta si es false)

/*
Crea un componente que contenga una promise que se resuelva a 2 segundos (para simular la 
consulta al back end) y que devuelva una lista de productos

-Debe mostrar los productos destacados
-Debe mostrar la cantidad de productos
-Debe mostrar un mensaje mientras se cumplen los dos segundos

*/
/*ItemListContainer ---> resuelve la promesa(o la consulta a la API), para esa data por props a ItemList
 ItemList---> Recibe por props un array de productos y hace uso del map para importar a Item
 Item --> Recibir un objeto por props y lo muestra en pantalla*/
