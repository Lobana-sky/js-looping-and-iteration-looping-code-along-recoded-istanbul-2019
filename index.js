// Code your solutions in this file

function writeCards(persons,eventName){
  for (let i = persons.length-1; i >= 0; i--) {
   
    console.log(`Thank you, ${persons[i]}, for the wonderful surprise gift!`);
    persons[i]=`Thank you, ${persons[i]}, for the wonderful surprise gift!`;
    
  }
 
  return persons;
}

const persons = ['Lisa', 'Kaitlin', 'Jan'];
const eventName="surprise";
writeCards(persons, eventName);

















function countDown(num)
{
  console.log()
}
