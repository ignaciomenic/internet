var users = [
    {
        name: 'jose',
        lastname: 'perez',
        age: 21,
        children: ['pedro','juan','lola'],
        email: 'jp@mail.com',
    },
    {
        name: 'maria',
        lastname: 'dominguez',
        age: 33,
        children: ['ivan', 'martina'],
        email: 'maria.d@mail.com',
    },
    {
        name: 'juan',
        lastname: 'garcia',
        age: 45,
        children: [],
        email: 'jgarcia@mail.com',
    },
    {
        name: 'Carla',
        lastname: 'gimenez',
        age: 35,
        children: ['guillermo'],
        email: 'carlagimenez@mail.com',
    }
    ]

    for(var i=0; i < users.length; i++){
        console.log(users[i].lastaname + ' , ' + users[i].name + ' tiene ' + users[i].children.length + ' hijos');
     }