import { User } from "./User.js"
export class Student extends User {
    constructor() {

        this.id = "stu" + (new Date).getTime();
    }
}