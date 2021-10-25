
import {Component} from '@angular/core';

@Component({

    selector: 'app-body',
    templateUrl:'./body.component.html'

})


export class BodyComponent {

    mostrar = true;
    frase: any = {
        mensaje: 'Un gran poder tiene una gran responsabilidad',
        autor: 'Ben Parker'

    };

    personajes: string[] = ['Super Man','Thor','Ant-Man'];
;
}