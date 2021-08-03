// const square = (x)=>{
//     return x*x
// }

// console.log(square(4))

const event = {
    name : 'birthday party',
    guestList: ['Ankit','Anurag','Bittu'],
    printGuestList(){
        console.log("here's is the list for "+this.name)
        this.guestList.forEach((guest)=>{
            console.log(guest+" is attending the "+ this.name)
        })
    }
}
event.printGuestList()