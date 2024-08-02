import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class FieldValidationServices {
  constructor(){}

  /**
   * @param form -
   * @param controlName -
   * @param submitted -
   * @returns
   */
  getValidationClassName(form: FormGroup, controlName: string, submitted: boolean){
    return{
      'is-invalid': submitted && form.controls[controlName].errors,
      'placeholder-red': submitted && form.controls[controlName].hasError('required')
    };
  }

   validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);

  }

  getPlaceholder(form: FormGroup, controlName: string, submitted: boolean): string {
    if (submitted && form.controls[controlName].errors) {
      if (form.controls[controlName].hasError('required')) {
        return `Ingresar ${controlName}`;
      }
    }
    return controlName.charAt(0).toUpperCase() + controlName.slice(1); // Capitaliza el nombre del campo
  }

}
