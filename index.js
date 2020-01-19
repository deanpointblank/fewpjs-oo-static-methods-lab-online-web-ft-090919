class Formatter {
  //add static methods here
  static capitalize(string){
    let first = string[0].toUpperCase()
    return first + string.slice(1)
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]+/g, '')
  }

  static titleize(string){
    const untouched = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let stringArray = string.split(" ")
    stringArray[0] = this.capitalize(stringArray[0])

    for (const w in stringArray){
      untouched.some((word) => word === stringArray[w]) ? null : stringArray[w] = this.capitalize(stringArray[w])
    }

    return stringArray.join(" ")
    
  }
}