import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PassarrayService {

  constructor() {}

  empData() {
    return[
      { id: 100, firstname: 'Angelo', lastname: 'DyReyes', email: 'ardy-reyes@hau.edu,ph' },
      { id: 101, firstname: 'Joseph', lastname: 'Dizon', email: 'jdizon@hau.edu,ph' },
      { id: 102, firstname: 'James', lastname: 'Atienza', email: 'jatienza@hau.edu,ph' },
      { id: 103, firstname: 'John', lastname: 'Cena', email: 'jcena@hau.edu,ph' },
      { id: 104, firstname: 'Robert', lastname: 'Quintana', email: 'rquintana@hau.edu,ph' },
    ]
  }
}
