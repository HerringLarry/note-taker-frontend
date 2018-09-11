import { UsernameService } from './../../../common/services/username.service';
export class RequestParams {
    username: string;
    constructor() {
        this.username = UsernameService.username;
    }
}