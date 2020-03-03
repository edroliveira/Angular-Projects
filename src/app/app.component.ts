import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';


export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-ng';

  opened: boolean;

  value = 'Pesquisar';

  searchText;
  
  heroes = [
    { id: 11, name: 'Mr. Nice', country: 'India' },
    { id: 12, name: 'Narco' , country: 'USA'},
    { id: 13, name: 'Bombasto' , country: 'UK'},
    { id: 14, name: 'Celeritas' , country: 'Canada' },
    { id: 15, name: 'Magneta' , country: 'Russia'},
    { id: 16, name: 'RubberMan' , country: 'China'},
    { id: 17, name: 'Dynama' , country: 'Germany'},
    { id: 18, name: 'Dr IQ' , country: 'Hong Kong'},
    { id: 19, name: 'Magma' , country: 'South Africa'},
    { id: 20, name: 'Tornado' , country: 'Sri Lanka'}
  ];

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AppComponentDialog , {
      data: {
        animal: 'panda'
      }
    });
  }
}

@Component({
  selector: 'app-component-dialog',
  templateUrl: 'app.component-dialog.html',
})
export class AppComponentDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
