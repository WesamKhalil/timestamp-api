//Function that will give us the unix and Gregorian calendar value in UTC/GMT
const timestamp = (date) => {
    //Our key values for the JSON we'll send
    //Unix is the milliseconds from 1970-01-01
    let unix
    let utc

    //Test if the input is a unix or a Gregorian calendar value
    const regex1 = /^\d+$/
    const regex2 = /^\d+-\d\d-\d\d$/

    //Check if date is a unix value
    if(regex1.test(date)) {
        date = parseInt(date)
        unix = date
        const seconds = Math.floor(date / 1000)
        //Modify the Date object buy inputting the default value for the year - minutes
        //then inputting the new seconds value to update it to the requested time
        utc = new Date(Date.UTC(1970, 0, 1, 0, 0, seconds)).toString()
    //Check if date is a Gregorian calendar value
    } else if(regex2.test(date)) {
        date = date.split("-")
        const year = parseInt(date[0])
        const month = parseInt(date[1]) - 1
        const day = parseInt(date[2])
        //Enter new values into Date object to get the unix value
        unix = new Date(Date.UTC(year, month, day)).getTime()
        //Exactly the same  thing I did in the last 'if' statement
        const seconds = Math.floor(unix / 1000)
        utc = new Date(Date.UTC(1970, 0, 1, 0, 0, seconds)).toString()
    //Check if no value is passed down, if true we return the current Date value
    } else if(date === "") {
        utc = new Date().toUTCString()
        unix = new Date().getTime()
    //If we pass all if statments assume an incorrect input and return an error
    } else {
        return {
            "error": "Invalid Date"
        }
    }
    //Return JSON with updated values
    return {
        "unix": unix,
        "utc": utc
    }
}

module.exports = timestamp