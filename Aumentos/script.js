const precios = {
    "Mozzarella": { redonda: 2700, metro: 3600 },
    "Aceitunas": { redonda: 2900, metro: 4500 },
    "Albahaca": { redonda: 2900, metro: 4500 },
    "Anana": { redonda: 3600, metro: 4950 },
    "Anchoas": { redonda: 3600, metro: 4950 },
    "Berenjenas": { redonda: 3600, metro: 4950 },
    "Calabresa": { redonda: 3900, metro: 5300 },
    "Capresse": { redonda: 3150, metro: 4300 },
    "Champiñones": { redonda: 3600, metro: 5300 },
    "Cheddar": { redonda: 3600, metro: 5300 },
    "Choclo": { redonda: 3150, metro: 4300 },
    "4 Quesos": { redonda: 4050, metro: 6000 },
    "Huevo Duro": { redonda: 3150, metro: 4500 },
    "Huevo frito": { redonda: 3600, metro: 4950 },
    "Jamon": { redonda: 3600, metro: 4950 },
    "Jamon crudo": { redonda: 4300, metro: 6000 },
    "J/C Rucula Parmesano": { redonda: 4950, metro: 6000 },
    "Jamon y anana": { redonda: 4300, metro: 6000 },
    "Jamon y huevo": { redonda: 4100, metro: 5400 },
    "Jamon y morron": { redonda: 4100, metro: 5400 },
    "Morron": { redonda: 3000, metro: 4100 },
    "Napolitana": { redonda: 3150, metro: 4500 },
    "Napolitana c/ Jamon": { redonda: 4100, metro: 5500 },
    "Papas fritas": { redonda: 3150, metro: 4300 },
    "Papas, panceta, cheddar, verdeo, salchica parrillera": { redonda: 4300, metro: 6000 },
    "Palmitos y salsa golf": { redonda: 4050, metro: 5400 },
    "Panceta ahumada": { redonda: 3950, metro: 5300 },
    "Premium (panceta, huevo frito, papas fritas)": { redonda: 4950, metro: 7000 },
    "Provolone": { redonda: 4100, metro: 6400 },
    "Roquefort": { redonda: 4100, metro: 6400 },
    "Rucula Parmesano": { redonda: 3150, metro: 4300 },
    "Salchicha parrillera": { redonda: 3950, metro: 5300 },
    "Tomate": { redonda: 3150, metro: 4300 },
    "Tomate rucula parmesano": { redonda: 3600, metro: 5200 },
    "A lo pablo (aceituna, morron. jamon, tomate, provenzal, huevo duro)": { redonda: 4100, metro: 5400 },
    "Fugazza conmozzarella": { redonda: 3200, metro: 5300 },
    "Fugazzeta": { redonda: 4300, metro: 6000 },
    "Fugazzeta rellena con roquefort": { redonda: 4300, metro: 6000 },
    "fugazzeta rellena con jamon": { redonda: 4300, metro: 6000 },
    "fugazzeta rellena con jamon y morron": { redonda: 4950, metro: 6200 },
    "fugazzeta rellena con capresse": { redonda: 4300, metro: 6000 },
    "fugazzeta rellena con panceta ahumada": { redonda: 4300, metro: 6000 },
    "fugazzeta rellena con Champiñones": { redonda: 4300, metro: 6000 }
  };
  

  const gustos = {
    "Mozzarella": { mitad: 2400, tercio: 3200 },
    "Aceitunas": { mitad: 200, tercio: 400 },
    "Albahaca": { mitad: 200, tercio: 400 },
    "Ananá": { mitad: 400, tercio: 600 },
    "Anchoas": { mitad: 400, tercio: 600 },
    "Berenjenas al Escabeche": { mitad: 400, tercio: 600 },
    "Calabresa": { mitad: 550, tercio: 750 },
    "Capresse": { mitad: 200, tercio: 350 },
    "Champiñones": { mitad: 400, tercio: 700 },
    "Cheddar": { mitad: 400, tercio: 750 },
    "Choclo": { mitad: 200, tercio: 350 },
    "4 Quesos": { mitad: 600, tercio: 1200 },
    "Huevo Duro": { mitad: 200, tercio: 400 },
    "Huevo Frito": { mitad: 400, tercio: 600 },
    "Jamón": { mitad: 400, tercio: 600 },
    "Jamón Crudo": { mitad: 750, tercio: 1100 },
    "Jamón Crudo Rúcula Parmesano": { mitad: 1000, tercio: 1350 },
    "Jamón y Ananá": { mitad: 750, tercio: 1100 },
    "Jamón y Huevo": { mitad: 650, tercio: 800 },
    "Jamón y Morrón": { mitad: 650, tercio: 800 },
    "Morrón": { mitad: 150, tercio: 300 },
    "Napolitana": { mitad: 200, tercio: 400 },
    "Napolitana con Jamón": { mitad: 650, tercio: 850 },
    "Papas Fritas": { mitad: 200, tercio: 350 },
    "Papas fritas, Panceta, Cheddar, Verdeo, Salchicha Parrillera": { mitad: 750, tercio: 1100 },
    "Palmitos y Salsa golf": { mitad: 600, tercio: 800 },
    "Panceta Ahumada": { mitad: 550, tercio: 750 },
    "Premium (Panceta, Huevo frito y Papas fritas)": { mitad: 1000, tercio: 1500 },
    "Provolone": { mitad: 650, tercio: 1250 },
    "Roquefort": { mitad: 650, tercio: 1250 },
    "Rúcula y Parmesano": { mitad: 200, tercio: 350 },
    "Salchicha Parrillera": { mitad: 550, tercio: 750 },
    "Tomate": { mitad: 200, tercio: 350 },
    "Tomate, Hojas de Rúcula, Parmesano": { mitad: 400, tercio: 700 },
    "Especial a lo Pablo (Aceitunas, Morrones, Mozzarella, Jamón, Tomate, Provenzal, Huevo duro)": { mitad: 650, tercio: 800 },
    "Fugazza con Mozzarella": { mitad: 300, tercio: 800 }
  };
  

  const preciosMilanesas = {
    "N°601 MILANESA SOLA PARA 1 O 2 PERSONAS": 2600,
    "N°602 MILANESA SOLA  PARA 3 O 4 PERSONAS": 4700,
    "N°603 LECHUGA, TOMATE, HUEVO DURO, JAMÓN Y QUESO PARA 1 O 2 PESONAS": 3000,
    "N°604 LECHUGA, TOMATE, HUEVO DURO, JAMÓN Y QUESO PARA 3 0 4 PERSONAS": 5650,
    "N°605 MILANESA: JAMÓN, QUESO, 2 HUEVOS FRITOS PARA 1 O 2 PERSONA": 3000,
    "N°606 MILANESA: JAMÓN, QUESO, 4 HUEVOS FRITOS PARA 3 O 4 PERSONAS": 5650,
    "N°607 MILANESA NAPOLITANA, (SALSA, MUZZARELLA, JAMON, TOMATE, HUEVO DURO, PROVENZAL) PARA 1 O 2 PERSONA": 3000,
    "N°608 MILANESA NAPOLITANA, (SALSA, MUZZARELLA, JAMON, TOMATE, HUEVO DURO, PROVENZAL) PARA 3 O 4PERSONAS": 5650,
    "N°609 MILANESA PANCETA Y CHEDDAR PARA 1 O 2PERSONA": 3400,
    "N°610 MILANESA PANCETA Y CHEDDAR PARA 3 O 4 PERSONAS": 6400,
    "N°611 MILANESA A LO PABLO: MORRONES, ACEITUNAS, JAMÓN, QUESO Y 2 HUEVOS FRITOS PARA 1 O 2 PERSONAS": 3400,
    "N°612 MILANESA A LO PABLO: MORRONES, ACEITUNAS, JAMÓN, QUESO Y 4 HUEVOS FRITOS  PARA 3 O 4 PERSONAS": 6400,
    "N°613 MILANESA A LA FUGAZZETA: CEBOLLA Y MUZZA PARA 1 O 2 PERSONAS": 3300,
    "N°614 MILANESA A LA FUGAZZETA: CEBOLLA Y MUZZA PARA 3 O 4 PERSONAS": 6000,
    "N°615 MILANESA A LA FUGAZZETA CON JAMÓN PARA 1 O 2 PERSONAS": 3300,
    "N°616 MILANESA A LA FUGAZZETA CON JAMÓN PARA 3 O 4 PERSONAS": 6000,
    "N°617 MILANESA A LA FUGAZZETA CON JAMÓN Y CHAMPIÑONES PARA 1 O 2 PERSONAS": 3400,
    "N°618 MILANESA A LA FUGAZZETA CON JAMÓN Y CHAMPIÑONES PARA 3 O 4 PERSONAS": 6400,
    "ADICIONAL PARA LA GUARNICIÓN - A+1 ADICIONAL DE 1 ADEREZO": 900,
    "A+2 ADICIONAL DE 2 ADEREZOS": 950,
    "A+3 ADICIONAL DE 3 ADEREZOS": 1000,
    "A+4 ADICIONAL DE 4 ADEREZOS": 1100,
    "A+5 ADICIONAL DE 5 ADEREZOS": 1200,
  };
  

  const preciosMilanesasPollo = {
    "SUPREMA SOLA CON FRITAS PARA 1 O 2 PERSONAS": 2250,
    "SUPREMA SOLA CON FRITAS PARA 3 O 4 PERSONAS": 4050,
    "SUPREMA, LECHUGA, TOMATE, HUEVO DURO, JAMÓN Y QUESO PARA 1 O 2 PERSONAS": 2500,
    "SUPREMA, LECHUGA, TOMATE, HUEVO DURO, JAMÓN Y QUESO PARA 3 O 4 PERSONAS": 4500,
    "SUPREMA JAMÓN QUESO 2 HUEVOS FRITOS PARA 1 O 2 PERSONAS": 2500,
    "SUPREMA JAMÓN QUESO 4 HUEVOS FRITOS PARA 3 O 4 PERSONAS": 4500,
    "SUPREMA, NAPOLITANA, (SALSA, MUZZARELLA, JAMON, TOMATE, HUEVO DURO, PROVENZAL) PARA 1 O 2 PERSONAS": 2500,
    "SUPREMA, NAPOLITANA (SALSA, MUZZARELLA, JAMON, TOMATE, HUEVO DURO, PROVENZAL) PARA 3 O 4 PERSONAS": 4500,
    "SURPEMA CON PANCETA Y CHEDDAR PARA 1 O 2 PERSONAS": 3000,
    "SURPEMA CON PANCETA Y CHEDDAR PARA 3 O 4 PERSONAS": 5450,
    "SUPREMA A LO PABLO: MORRONES, ACEITUNAS, JAMÓN, QUESO Y 2 HUEVOS FRITOS PARA 1 O 2 PERSONAS": 3000,
    "SUPREMA A LO PABLO: MORRONES, ACEITUNAS, JAMÓN, QUESO Y 4 HUEVOS FRITOS PARA 3 O 4 PERSONAS": 5450,
    "SUPREMA A LA FUGAZZETA: CEBOLLA Y MUZZA PARA 1 O 2 PERSONAS": 2500,
    "SUPREMA A LA FUGAZZETA: CEBOLLA Y MUZZA PARA 3 O 4 PERSONAS": 4500,
    "SUPREMA A LA FUGAZZETA CON JAMÓN PARA 1 O 2 PERSONAS": 3000,
    "SUPREMA A LA FUGAZZETA CON JAMÓN PARA 3 O 4 PERSONAS": 5450,
    "SUPREMA A LA FUGAZZETA CON JAMÓN Y CHAMPIÑONES PARA 1 O 2 PERSONAS": 3300,
    "SUPREMA A LA FUGAZZETA CON JAMÓN Y CHAMPIÑONES PARA 3 O 4 PERSONAS": 6200,
  };
  
  const preciosSandwichesMilanesa = {
    "SANDWICH DE MILANESA SOLA": 2500,
    "SANDWICH DE MILANESA CON JAMÓN Y QUESO": 3000,
    "SANDWICH DE MILANESA COMPLETA: LECHUGA TOMATE, HUEVO DURO, JAMÓN Y QUESO": 3150,
    "DOS SANDWICH DE MILANESA SOLA": 4500,
    "DOS SANDWICH DE MILANESA CON JAMÓN Y QUESO": 5300,
    "DOS SANDWICH MILANESA COMPLETA: LECHUGA TOMATE, HUEVO DURO, JAMÓN Y QUESO": 5800,
    "SANDWICH DE SUPREMA SOLA": 2250,
    "SANDWICH DE SUPREMA CON JAMÓN Y QUESO": 2500,
    "SANDWICH DE SUPREMA COMPLETA: LECHUGA TOMATE, HUEVO DURO, JAMÓN Y QUESO": 2700,
    "DOS SANDWICH DE SUPREMA SOLA": 4100,
    "DOS SANDWICH DE SUPREMA CON JAMÓN Y QUESO": 4500,
    "DOS SANDWICH DE SUPREMA COMPLETA: LECHUGA TOMATE, HUEVO DURO, JAMÓN Y QUESO": 4950,
  };

  const preciosPollos = {
    "POLLO FRITO INDIVIDUAL CON PAPAS FRITAS, PANCETA, CHEEDAR Y VERDEO": 2250,
    "POLLO FRITO PARA 2 PERSONAS CON PAPAS FRITAS, PANCETA, CHEEDAR Y VERDEO": 3300,
    "POLLO FRITO PARA 3 PERSONAS CON PAPAS FRITAS, PANCETA, CHEEDAR Y VERDEO": 6300,
    "POLLO FRITO PARA 4 PERSONAS CON PAPAS FRITAS, PANCETA, CHEDDAR Y VEDEO": 11250,
    "ADICIONAL: SALSA BARBACOA": 1150,
  };
  
  const preciosPapasFritas = {
    "PORCIÓN CHICA COMÚN PARA 2 PERSONAS": 1700,
    "PORCIÓN GRANDE COMÚN PARA 4 PERSONAS": 2000,
    "PORCIÓN CHICA PROVENZAL PARA 2 PERSONAS": 2000,
    "PORCIÓN GRANDE PROVENZAL PARA 4 PERSONAS": 2250,
    "PORCIÓN CHICA (1 ADEREZO) PARA 2 PERSONAS": 2000,
    "PORCIÓN GRANDE (1 ADEREZO) PARA 4 PERSONAS": 2800,
    "PORCIÓN CHICA (2 ADEREZOS) PARA 2 PERSONAS": 2250,
    "PORCIÓN GRANDE (2 ADEREZOS) PARA 4 PERSONAS": 3600,
    "PORCIÓN CHICA CON 2 HUEVOS FRITOS PARA 2 PERSONAS": 2800,
    "PORCIÓN GRANDE CON 4 HUEVOS FRITOS PARA 4 PERSONAS": 3800,
    "PORCIÓN CHICA (3 ADEREZOS) PARA 2 PERSONAS": 2800,
    "PORCIÓN GRANDE (3 ADEREZOS) PARA 4 PERSONAS": 3800,
    "PORCIÓN CHICA (4 ADEREZOS) PARA 2 PERSONAS": 3000,
    "PORCIÓN GRANDE (4 ADEREZOS) PARA 4 PERSONAS": 4200,
    "PORCIÓN CHICA (5 ADEREZOS) PARA 2 PERSONAS": 3400,
    "PORCIÓN GRANDE (5 ADEREZOS) PARA 4 PERSONAS": 4500,
  };
  
  const preciosHamburguesas = {
    "SALSA TASTY, JAMÓN, QUESO, TOMATE, LECHUGA, HUEVO FRITO": 3000,
    "SALSA TASTY, TOMATE, CEBOLLA CARAMELIZADA, PANCETA, CHEDDAR": 3000,
    "SALSA CEASER, TOMATE, RUCULA, PEPINOS, MORRONES, PANCETA, CHEDDAR": 3000,
    "SALSA CEASER, TOMATE, CEBOLLA CARAMELIZADA, ROQUEFORT, PANCETA, CHEDDAR": 3000,
    "SALSA TASTY, TOMATE, LECHUGA, ACEITUNAS, CHAMPIÑONES, MORRONES, PANCETA, JAMON, CHEDDAR, HUEVO FRITO": 3000,
    "BARBACOA, CEBOLLA CARAMELIZADA, SALSA TASTY, MORRONES EN AJO, CHEDDAR": 3000,
    "BARBACOA CEBOLLA CARAMELIZADA, KETCHUP, HUEVO FRITO, TORTILLA DE PAPAS ROSTY, PANCETA": 3000,
    "SALSA CESAR, PANCETA, CHEDDAR, CEBOLLA CARAMELIZADA, CEBOLLA DE VERDEO": 3000,
    "ALIOLI, TORTILLA DE PAPAS ROSTI, PANCETA, CHEDDAR": 3000,
    "SALSA TASTY, LECHUGA, TOMATE, HUEVO FRTO, PANCETA, CHEDDAR": 3000,
    "PROMOCION DE DOS HAMBURGUESAS": 5500,
    "PROMOCION DE CUATRO HAMBURGUESAS": 10800,
  };

  const preciosEmpanadas = {
    "14 EMPANADAS CRIOLLAS": 6200,
    "12 EMPANADAS": 6200,
    "8 EMPANADAS": 4300,
    "7 EMPANADAS CRIOLLAS": 3700,
    "6 EMPANADAS": 3700,
    "4 EMPANADAS": 2750,
    "1 EMPANADA (C/U)": 850,
  };

  const preciosBebidas = {
    "COCA COLA 2L": 1350,
    "MANAOS 2L": 800,
  };
  
  const preciosTortillasTartas = {
    "TORTILLA DE PAPAS": 2000,
    "TORTILLA DE PAPAS RELLENA": 2250,
    "TORTILLA DE VERDURAS": 2800,
    "TARTA VERDURAS": 2800,
    "TARTA DE JAMON, QUESO TOMATE, HUEVO DURO": 3300,
  };

//Pizzas

  document.getElementById("actualizar").addEventListener("click", function () {
    const inflacionInput = document.getElementById("inflacion");
    const inflacionPorcentaje = parseFloat(inflacionInput.value);
  
    if (!isNaN(inflacionPorcentaje)) {
      const factorAjuste = 1 + (inflacionPorcentaje / 100);
  
      const tablaResultados = document.querySelector("#tabla-resultados tbody");
      tablaResultados.innerHTML = "";
  
      for (const gusto in precios) {
        const precioRedonda = precios[gusto].redonda * factorAjuste;
        const precioMetro = precios[gusto].metro * factorAjuste;
  
        const precioRedondaRedondeado = Math.ceil(precioRedonda / 50) * 50;
        const precioMetroRedondeado = Math.ceil(precioMetro / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${gusto}</td>
          <td>$${precioRedondaRedondeado.toFixed(2)}</td>
          <td>$${precioMetroRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultados.appendChild(fila);
      }
    }
  });


  //Mitades y tercios
  
  document.getElementById("actualizarmitades").addEventListener("click", function () {
    const inflacionInput = document.getElementById("inflacionmitades");
    const inflacionPorcentaje = parseFloat(inflacionInput.value);
  
    if (!isNaN(inflacionPorcentaje)) {
      const factorAjuste = 1 + (inflacionPorcentaje / 100);
  
      const tablaResultadosMitades = document.querySelector("#tabla-resultados-mitades tbody");
      tablaResultadosMitades.innerHTML = "";
  
      for (const gusto in gustos) {
        const precioMitad = gustos[gusto].mitad * factorAjuste;
        const precioTercio = gustos[gusto].tercio * factorAjuste;
  
        const precioMitadRedondeado = Math.ceil(precioMitad / 50) * 50;
        const precioTercioRedondeado = Math.ceil(precioTercio / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${gusto}</td>
          <td>$${precioMitadRedondeado.toFixed(2)}</td>
          <td>$${precioTercioRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultadosMitades.appendChild(fila);
      }
    }
  });

//Milanesas de Carne

  document.getElementById("actualizarmilanesas").addEventListener("click", function () {
    const inflacionInput = document.getElementById("inflacionmilanesas");
    const inflacionPorcentaje = parseFloat(inflacionInput.value);
  
    if (!isNaN(inflacionPorcentaje)) {
      const factorAjuste = 1 + (inflacionPorcentaje / 100);
  
      const tablaResultadosMilanesas = document.querySelector("#tabla-resultados-milanesas tbody");
      tablaResultadosMilanesas.innerHTML = "";
  
      for (const descripcion in preciosMilanesas) {
        const precioActualizado = preciosMilanesas[descripcion] * factorAjuste;
        const precioActualizadoRedondeado = Math.ceil(precioActualizado / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${descripcion}</td>
          <td>$${precioActualizadoRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultadosMilanesas.appendChild(fila);
      }
    }
  });
  
  //Milanesas de pollo//

  document.getElementById("actualizarmilanesaspollo").addEventListener("click", function () {
    const inflacionInput = document.getElementById("inflacionmilanesaspollo");
    const inflacionPorcentaje = parseFloat(inflacionInput.value);
  
    if (!isNaN(inflacionPorcentaje)) {
      const factorAjuste = 1 + (inflacionPorcentaje / 100);
  
      const resultadosDiv = document.getElementById("resultadosmilanesaspollo");
      resultadosDiv.innerHTML = "";
  
      const tablaResultadosMilanesasPollo = document.createElement("table");
      tablaResultadosMilanesasPollo.id = "tabla-resultados-milanesas-pollo";
      tablaResultadosMilanesasPollo.innerHTML = `
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Precio Actualizado</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      resultadosDiv.appendChild(tablaResultadosMilanesasPollo);
  
      const tablaResultadosMilanesasPolloBody = document.querySelector("#tabla-resultados-milanesas-pollo tbody");
      tablaResultadosMilanesasPolloBody.innerHTML = "";
  
      for (const descripcion in preciosMilanesasPollo) {
        const precioActualizado = preciosMilanesasPollo[descripcion] * factorAjuste;
        const precioActualizadoRedondeado = Math.ceil(precioActualizado / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${descripcion}</td>
          <td>$${precioActualizadoRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultadosMilanesasPolloBody.appendChild(fila);
      }
    }
  });

  //Sandwiches de milanesa 

  document.getElementById("actualizarsandwichesmilanesa").addEventListener("click", function () {
    const inflacionInput = document.getElementById("inflacionsandwichesmilanesa");
    const inflacionPorcentaje = parseFloat(inflacionInput.value);
  
    if (!isNaN(inflacionPorcentaje)) {
      const factorAjuste = 1 + (inflacionPorcentaje / 100);
  
      const resultadosDiv = document.getElementById("resultadossandwichesmilanesa");
      resultadosDiv.innerHTML = "";
  
      const tablaResultadosSandwichesMilanesa = document.createElement("table");
      tablaResultadosSandwichesMilanesa.id = "tabla-resultados-sandwiches-milanesa";
      tablaResultadosSandwichesMilanesa.innerHTML = `
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Precio Actualizado</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      resultadosDiv.appendChild(tablaResultadosSandwichesMilanesa);
  
      const tablaResultadosSandwichesMilanesaBody = document.querySelector("#tabla-resultados-sandwiches-milanesa tbody");
      tablaResultadosSandwichesMilanesaBody.innerHTML = "";
  
      for (const descripcion in preciosSandwichesMilanesa) {
        const precioActualizado = preciosSandwichesMilanesa[descripcion] * factorAjuste;
        const precioActualizadoRedondeado = Math.ceil(precioActualizado / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${descripcion}</td>
          <td>$${precioActualizadoRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultadosSandwichesMilanesaBody.appendChild(fila);
      }
    }
  });

  //Pollos

  document.getElementById("actualizarpollos").addEventListener("click", function () {
    const inflacionInput = document.getElementById("inflacionpollos");
    const inflacionPorcentaje = parseFloat(inflacionInput.value);
  
    if (!isNaN(inflacionPorcentaje)) {
      const factorAjuste = 1 + (inflacionPorcentaje / 100);
  
      const resultadosDiv = document.getElementById("resultadospollos");
      resultadosDiv.innerHTML = "";
  
      const tablaResultadosPollos = document.createElement("table");
      tablaResultadosPollos.id = "tabla-resultados-pollos";
      tablaResultadosPollos.innerHTML = `
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Precio Actualizado</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      resultadosDiv.appendChild(tablaResultadosPollos);
  
      const tablaResultadosPollosBody = document.querySelector("#tabla-resultados-pollos tbody");
      tablaResultadosPollosBody.innerHTML = "";
  
      for (const descripcion in preciosPollos) {
        const precioActualizado = preciosPollos[descripcion] * factorAjuste;
        const precioActualizadoRedondeado = Math.ceil(precioActualizado / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${descripcion}</td>
          <td>$${precioActualizadoRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultadosPollosBody.appendChild(fila);
      }
    }
  });

  //Papas fritas
  
  document.getElementById("actualizarpapasfritas").addEventListener("click", function () {
    const inflacionInput = document.getElementById("inflacionpapasfritas");
    const inflacionPorcentaje = parseFloat(inflacionInput.value);
  
    if (!isNaN(inflacionPorcentaje)) {
      const factorAjuste = 1 + (inflacionPorcentaje / 100);
  
      const resultadosDiv = document.getElementById("resultadospapasfritas");
      resultadosDiv.innerHTML = "";
  
      const tablaResultadosPapasFritas = document.createElement("table");
      tablaResultadosPapasFritas.id = "tabla-resultados-papasfritas";
      tablaResultadosPapasFritas.innerHTML = `
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Precio Actualizado</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      resultadosDiv.appendChild(tablaResultadosPapasFritas);
  
      const tablaResultadosPapasFritasBody = document.querySelector("#tabla-resultados-papasfritas tbody");
      tablaResultadosPapasFritasBody.innerHTML = "";
  
      for (const descripcion in preciosPapasFritas) {
        const precioActualizado = preciosPapasFritas[descripcion] * factorAjuste;
        const precioActualizadoRedondeado = Math.ceil(precioActualizado / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${descripcion}</td>
          <td>$${precioActualizadoRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultadosPapasFritasBody.appendChild(fila);
      }
    }
  });

//Hamburguesas

  document.getElementById("actualizarhamburguesas").addEventListener("click", function () {
    const inflacionInput = document.getElementById("inflacionhamburguesas");
    const inflacionPorcentaje = parseFloat(inflacionInput.value);
  
    if (!isNaN(inflacionPorcentaje)) {
      const factorAjuste = 1 + (inflacionPorcentaje / 100);
  
      const resultadosDiv = document.getElementById("resultadoshamburguesas");
      resultadosDiv.innerHTML = "";
  
      const tablaResultadosHamburguesas = document.createElement("table");
      tablaResultadosHamburguesas.id = "tabla-resultados-hamburguesas";
      tablaResultadosHamburguesas.innerHTML = `
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Precio Actualizado</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      resultadosDiv.appendChild(tablaResultadosHamburguesas);
  
      const tablaResultadosHamburguesasBody = document.querySelector("#tabla-resultados-hamburguesas tbody");
      tablaResultadosHamburguesasBody.innerHTML = "";
  
      for (const descripcion in preciosHamburguesas) {
        const precioActualizado = preciosHamburguesas[descripcion] * factorAjuste;
        const precioActualizadoRedondeado = Math.ceil(precioActualizado / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${descripcion}</td>
          <td>$${precioActualizadoRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultadosHamburguesasBody.appendChild(fila);
      }
    }
  });

  //Empanadas

  document.getElementById("actualizarempanadas").addEventListener("click", function () {
    const inflacionInput = document.getElementById("inflacionempanadas");
    const inflacionPorcentaje = parseFloat(inflacionInput.value);
  
    if (!isNaN(inflacionPorcentaje)) {
      const factorAjuste = 1 + (inflacionPorcentaje / 100);
  
      const resultadosDiv = document.getElementById("resultadosempanadas");
      resultadosDiv.innerHTML = "";
  
      const tablaResultadosEmpanadas = document.createElement("table");
      tablaResultadosEmpanadas.id = "tabla-resultados-empanadas";
      tablaResultadosEmpanadas.innerHTML = `
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Precio Actualizado</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      resultadosDiv.appendChild(tablaResultadosEmpanadas);
  
      const tablaResultadosEmpanadasBody = document.querySelector("#tabla-resultados-empanadas tbody");
      tablaResultadosEmpanadasBody.innerHTML = "";
  
      for (const descripcion in preciosEmpanadas) {
        const precioActualizado = preciosEmpanadas[descripcion] * factorAjuste;
        const precioActualizadoRedondeado = Math.ceil(precioActualizado / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${descripcion}</td>
          <td>$${precioActualizadoRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultadosEmpanadasBody.appendChild(fila);
      }
    }
  });
  
  //Bebidas y tortillas

  document.getElementById("actualizarbebidas").addEventListener("click", function () {
    const inflacionInput = document.getElementById("inflacionbebidas");
    const inflacionPorcentaje = parseFloat(inflacionInput.value);
  
    if (!isNaN(inflacionPorcentaje)) {
      const factorAjuste = 1 + (inflacionPorcentaje / 100);
  
      const resultadosDiv = document.getElementById("resultadosbebidas");
      resultadosDiv.innerHTML = "";
  
      const tablaResultadosBebidas = document.createElement("table");
      tablaResultadosBebidas.id = "tabla-resultados-bebidas";
      tablaResultadosBebidas.innerHTML = `
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Precio Actualizado</th>
          </tr>
        </thead>
        <tbody></tbody>
      `;
      resultadosDiv.appendChild(tablaResultadosBebidas);
  
      const tablaResultadosBebidasBody = document.querySelector("#tabla-resultados-bebidas tbody");
      tablaResultadosBebidasBody.innerHTML = "";
  
      for (const descripcion in preciosBebidas) {
        const precioActualizado = preciosBebidas[descripcion] * factorAjuste;
        const precioActualizadoRedondeado = Math.ceil(precioActualizado / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${descripcion}</td>
          <td>$${precioActualizadoRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultadosBebidasBody.appendChild(fila);
      }
  
      for (const descripcion in preciosTortillasTartas) {
        const precioActualizado = preciosTortillasTartas[descripcion] * factorAjuste;
        const precioActualizadoRedondeado = Math.ceil(precioActualizado / 50) * 50;
  
        const fila = document.createElement("tr");
        fila.innerHTML = `
          <td>${descripcion}</td>
          <td>$${precioActualizadoRedondeado.toFixed(2)}</td>
        `;
  
        tablaResultadosBebidasBody.appendChild(fila);
      }
    }
  });