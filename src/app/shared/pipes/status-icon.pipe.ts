import { Pipe, PipeTransform } from '@angular/core';
import { IconDefinition, faCheck, faClock, faQuestion, faTimes } from '@fortawesome/free-solid-svg-icons';

@Pipe({
  name: 'statusIcon',
  standalone: true,
})
export class StatusIconPipe implements PipeTransform {
  transform(status: string): IconDefinition {
    switch (status) {
      case 'pendiente':
        return faClock;
      case 'aceptado':
        return faCheck;
      case 'rechazado':
        return faTimes;
      default:
        return faQuestion;
    }
  }
}
