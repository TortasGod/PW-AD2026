function Actividad4() {
  
  let cantidadAlumnos = parseInt(prompt("Cuántos alumnos se registran?"));


  let aprobados = 0;
  let reprobados = 0;
  let resumenEstudiantes = "";


  for (let i = 1; i <= cantidadAlumnos; i++) {
  
    let nombre = prompt(`Ingrese el nombre del alumno ${i}:`);

    let calificaciones = [];
    let calificacionValida;

  
    for (let j = 1; j <= 3; j++) {
      do {
        calificacionValida = parseFloat(prompt(`Ingrese la calificación ${j} (0 a 100) para ${nombre}:`));
        

        if (isNaN(calificacionValida) || calificacionValida < 0 || calificacionValida > 100) {
          alert("Calificación inválida. Debe ser un número entre 0 y 100.");
        }
      } while (isNaN(calificacionValida) || calificacionValida < 0 || calificacionValida > 100);

      calificaciones.push(calificacionValida);
    }


    let suma = calificaciones[0] + calificaciones[1] + calificaciones[2];
    let promedio = suma / 3;

    
    let estado = "";
    if (promedio >= 70) {
      estado = "APROBADO";
      aprobados++;
    } else {
      estado = "REPROBADO";
      reprobados++;
    }

    
    let detalleAlumno = `Alumno: ${nombre}\n` +
                        `Calificaciones: ${calificaciones.join(", ")}\n` +
                        `Promedio: ${promedio.toFixed(2)}\n` +
                        `Resultado: ${estado}\n-------------------------\n`;
    
    console.log(detalleAlumno);
    resumenEstudiantes += detalleAlumno;
  }

  
  let resumenFinal = ` Reporte final \n` +
                     `Total de alumnos registrados: ${cantidadAlumnos}\n` +
                     `Cantidad de alumnos aprobados: ${aprobados}\n` +
                     `Cantidad de alumnos reprobados: ${reprobados}\n`;

  console.log(resumenFinal);
  alert(resumenEstudiantes + "\n" + resumenFinal);
}

Actividad4();