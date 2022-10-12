const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {

  if (Array.isArray(members) !== true) { 
    return false;
   } 
 
   let teamName = '';
 
   for (let i = 0; i < members.length; i++){
     if (typeof(members[i]) == 'string') {
       for (let j = 0; j < members[i].length; j++) {
         if (members[i][j] !== ' ') {
           teamName += members[i][j];
           break;
         }
       }
     }
   } 
 
   let result =  teamName.split('').sort().join('').toUpperCase();
    return result;
 }
 
 
 
 module.exports = {
   createDreamTeam
 };