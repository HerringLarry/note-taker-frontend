import { FormGroup } from '@angular/forms';
export class PieceFormDto {
    name: string;
    description: string;

    constructor( formGroup: FormGroup ) {
        this.name = formGroup.value.title;
        this.description = formGroup.value.description;
    }
}
