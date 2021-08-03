 //const validator = require('validator')
//const chalk = require('chalk')
//const { string, require } = require('yargs')
const yargs = require('yargs') 
const notes = require('./notes')
//const getNotes = require('./notes.js')

yargs.version('1.1.0')



yargs.command({
    command : 'add',
    describe :'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demamdOption : true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demamdOption : true,
            type: 'string'
        }

    },
    handler(argv){
        console.log(argv)
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe:'Remove a note', 
    builder:{
        title:{
            describe:'Note title',
            demamdOption : true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command: 'list',
    describe:'list all note', 
    handler(){
        console.log('Listing the notes')
        notes.listNotes()
    }
})
yargs.command({
    command: 'read',
    describe:'Read a note', 
    builder: {
        title:{
            describe:'Note title',
            demamdOption : true,
            type: 'string'
        }
    },
    handler(argv){
        console.log('Reading a note')
        notes.readNotes(argv.title)
    }
})
yargs.parse()

//console.log(validator.isURL('https/mead.io'))


// const add = require('./utils.js')

// const sum = add(4,2)

// console.log(sum)