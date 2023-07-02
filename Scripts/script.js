// Get the current year for the footer of the page
const currentDate = new Date();
document.querySelector('#year').textContent = currentDate.getFullYear();

// Load user input into variables
const entryNoun = document.getElementById('entry_noun');
const entryPerson = document.getElementById('entry_person');
const entryNoun2 = document.getElementById('entry_noun2');
const entryFood = document.getElementById('entry_food');
const entryAnimal = document.getElementById('entry_animal');
const entryAdj1 = document.getElementById('entry_adj');
const entryVerb = document.getElementById('entry_verb');
const entryAdj2 = document.getElementById('entry_adj2');

// Listen for submit button click to replace information
document.getElementById('submit').addEventListener('click', () => {document.getElementById('noun1').innerHTML = document.getElementById('noun1').innerHTML.replace('(Noun)', entryNoun.value)});
document.getElementById('submit').addEventListener('click', () => {document.getElementById('person').innerHTML = document.getElementById('person').innerHTML.replace('(Person)', entryPerson.value)})
document.getElementById('submit').addEventListener('click', () => {document.getElementById('noun2').innerHTML = document.getElementById('noun2').innerHTML.replace('(Noun)', entryNoun2.value)});
document.getElementById('submit').addEventListener('click', () => {document.getElementById('food').innerHTML = document.getElementById('food').innerHTML.replace('(Food Item)', entryFood.value)});
document.getElementById('submit').addEventListener('click', () => {document.getElementById('animal').innerHTML = document.getElementById('animal').innerHTML.replace('(Animal)', entryAnimal.value)});
document.getElementById('submit').addEventListener('click', () => {document.getElementById('adj').innerHTML = document.getElementById('adj').innerHTML.replace('(Adjective)', entryAdj1.value)});
document.getElementById('submit').addEventListener('click', () => {document.getElementById('verb').innerHTML = document.getElementById('verb').innerHTML.replace('(Verb)', entryVerb.value)});
document.getElementById('submit').addEventListener('click', () => {document.getElementById('adj2').innerHTML = document.getElementById('adj2').innerHTML.replace('(Adjective)', entryAdj2.value)});

// JQuery animation to make story appear on page
$(document).ready(function(){
    $("#submit").click(function(){
        $("#story").fadeIn("slow");
    });
});