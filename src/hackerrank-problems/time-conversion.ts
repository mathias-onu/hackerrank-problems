/*
    Problem:
    Given a time in -hour AM/PM format, 
    convert it to military (24-hour) time.
*/

function timeConversion(s: string): string {
    let militaryFormat = s.split(':')

    switch(true) {
        case militaryFormat[0] === '12' && militaryFormat[2].includes('AM'):
            militaryFormat[0] = '00'
            break
            
        case militaryFormat[0] === '12' && militaryFormat[2].includes('PM'):
            break

        case militaryFormat[2].includes('AM'):
            break

        case militaryFormat[2].includes('PM'):
            militaryFormat[0] = (Number(militaryFormat[0]) + 12).toLocaleString()
    }
    
    militaryFormat[2] = militaryFormat[2].slice(0, -2) 

    return militaryFormat.join(':')
}

console.log(timeConversion('07:05:45PM'))