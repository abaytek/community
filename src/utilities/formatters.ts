import moment from "moment"
export class Formatter {
    static fromNow(date: Date){
        return moment(date).fromNow()
    }
}