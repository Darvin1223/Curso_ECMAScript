
/* WithOut es6 */
function newUser(name,age,country){
    var name = name || 'Darvin';
    var age = age || 26;
    var country = country || 'Dominican Republic';
    console.log(name,age,country);
}

newUser();
newUser("Emil",22,"USA");


/* With es6 */

function newAdmin(name = 'Darvin', age = 26, country = 'DOM'){
    console.log(name,age,country);
}

newAdmin();
newAdmin('Brenda',30,'ES');