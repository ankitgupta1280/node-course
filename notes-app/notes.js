//const { require } = require("yargs")
const chalk = require('chalk')
const fs = require('fs')
//const { require } = require('yargs')
const getNotes = ()=>{
    return 'Your notes...'
}

const removeNote =(title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title!=title)
    if(notesToKeep.length===notes.length){
        console.log(chalk.red.inverse('No note with such title'))    
    }
    else{
        
        console.log(notesToKeep)
        saveNotes(notesToKeep)
        console.log(chalk.green.inverse('Note removed'))
    }
}

const addNote =(title,body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=>note.title==title   )
    
    console.log(duplicateNotes)
    console.log(title)
    if(duplicateNotes.length===0){
        notes.push({
            title: title,
            body: body
    
        })
        saveNotes(notes)
        console.log('New note added')
    }
    else{
        console.log('note title taken')
    }

    
}

const saveNotes =(notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes =()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}
const listNotes=()=>{
    console.log(chalk.inverse('Your Notes'))
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log(note.title)
    })
}
const readNotes=(title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title===title)
    if(!note){
        console.log(chalk.red('Note not found'))
    }else{
        console.log(chalk.green('Note found')+note.title+" is the title and body is "+note.body)
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}