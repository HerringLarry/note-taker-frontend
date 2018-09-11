import { FormGroup } from '@angular/forms';
import { UsernameService } from '../../../common/services/username.service';
export class ProfileDto {
    bio: string;
    interests: string;
    username: string;

    constructor( formGroup: FormGroup) {
        this.bio = formGroup.value.bio;
        this.interests = formGroup.value.interests;
        this.username = UsernameService.username;
    }
}
