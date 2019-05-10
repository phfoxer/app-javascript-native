class DateHelper {
    constructor(){
        throw new Error('This class cannot be instantiated')
    }
    /**
     * Transform string to valid date
     * @param {String} text 
     */
    static stringToDate(text) {
        return new Date(...text.split('-').map((value, index) => value - index % 2));
    }

    /**
     * Transform an Date object in a valid string
     * @param {Date} date 
     */
    static dateToLocal(date) {
        return date.toLocaleDateString()
    }

}