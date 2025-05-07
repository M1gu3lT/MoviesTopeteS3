import { Pipe, PipeTransform } from '@angular/core'; // Importa las clases necesarias de Angular para crear la tubería
import { MoviesModel } from '@core/models/movies.model'; // Importa el modelo de datos de películas (no se usa directamente, pero se espera que las películas sean de este tipo)

@Pipe({
  name: 'orderList' // Define el nombre de la tubería que se usará en las plantillas
})
export class OrderListPipe implements PipeTransform {

  // Método transform que implementa la lógica de ordenamiento
  transform(value: Array<any>, args: string | null = null, sort: string = 'asc'): Array<any> {
    // Si no se proporciona un argumento para ordenar, se devuelve la lista tal cual
    if (args === null) {
      return value;
    } else {
      // Ordenamiento basado en el argumento 'args' (que corresponde a una propiedad de los elementos)
      const tmpList = value.sort((a, b) => {
        // Compara los elementos de la lista basándose en la propiedad indicada por 'args'
        if (a[args] < b[args]) {
          return -1; // Si 'a' es menor que 'b', 'a' va antes
        }
        else if (a[args] === b[args]) {
          return 0; // Si 'a' es igual a 'b', no se cambia el orden
        }
        else if (a[args] > b[args]) {
          return 1; // Si 'a' es mayor que 'b', 'b' va antes
        }
        return 1; // Este caso no debería ocurrir, pero se maneja de todos modos
      });

      // Si el parámetro 'sort' es 'asc' (ascendente), devuelve la lista ordenada normalmente, si es 'desc' (descendente), invierte la lista
      return (sort === 'asc') ? tmpList : tmpList.reverse();
    }
  }
}
