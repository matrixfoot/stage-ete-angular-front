import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayRange'
})
export class DisplayRangePipe implements PipeTransform {

  transform(currentPage: number, pageSize: number, totalItems: number): string {
    const start = (currentPage - 1) * pageSize + 1;
    const end = Math.min(currentPage * pageSize, totalItems);
    return `Affichage des données de ${start} à ${end} sur ${totalItems} entrées`;
  }

}
