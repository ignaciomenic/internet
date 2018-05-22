var users = [
{
    name: 'Camila',
    lastname: 'Bellis',
    age: 24,
    children: ['Pedro' , 'Juan'],
    email: 'belliscamila@gmail.com'
},
{
    name: 'Celina',
    lastname: 'Comugnaro',
    age: 20,
    children: ['Pedro' , 'Juan'],
    email: 'comugnarocelina@gmail.com'
},
{
    name: 'Carlos',
    lastname: 'Britos',
    age: 20,
    children: [],
    email: 'carlosbritos@gmail.com'
},
{
    name: 'Lucas',
    lastname: 'Daniele',
    age: 20,
    children: [],
    email: 'lucasdaniele@gmail.com'
}                
]

/*function filterByAge(age){
    for(var i=0; i < users.length; i++){
        if (age => users[i].age){
            console.log( assamble( users[i] ) );
}
}
}*/

/*function assamble(user){
    return user.lastname 
    + ', ' 
    + user.name 
    + ' tiene ' 
    + user.children.length 
    + ' hijos ';
}*/

var listusers = {
    users: [],
    assamble: function(user){
    return user.lastname 
    + ', ' 
    + user.Name 
    + ' tiene ' 
    
    + ' hijos ';
    },
    iterate: function(){
        for (var i=0; i < listusers.users.length; i++){
            console.log(listusers.assamble(listusers.users[i]));
        }
    },
    setUsers: function (users){
        listusers.users = users;
    }
}

/**
$('clickme').on('click',fuction(){
    if ($('h1').hasClass('active')){
        $('h1')
        .removeClass('active')
        .addClass('disabled');
    }
    else {
        $('h1')
        .removeClass('disabled')
        .addClass('active');
    }
}
 */