// Consumo de API com JavaScript - POST, GET, PUT e DELETE
/*
    order:
    1. get all
    2. create
    3. get att created
    4. put
    5. get att
    6. delete
    7. get all att
*/
async function getAllUsers() {
    const users = await fetch("https://api.escuelajs.co/api/v1/users").then(res => res.json())
    console.log(users);
    return users;
}

async function createNewUser() {
    const user = {
        name: "John Doe",
        email: "johndoe@example.com",
        password: "12345678",
        avatar: "https://github.com/matheusdsilva01.png",
    }

    const response = await fetch("https://api.escuelajs.co/api/v1/users/", {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    }).then(res => res.json())

    console.log(response);
    return response;
}

/**
 * @param idUser {number} -  coloque o id do usuário retornado na requisição de criação do mesmo
 */
async function getUserFromId(idUser) {
    const response = await fetch(`https://api.escuelajs.co/api/v1/users/${idUser}`).then(res => res.json());
    console.log(response);
    return response;
}

/**
 * @param idUserToUpdate {number} - novamente coloque o id do usuário retornado na requisição de criação do mesmo
 */
async function updateUser(idUserToUpdate) {
    const newName = "Jane Doe";
    const response = await fetch(`https://api.escuelajs.co/api/v1/users/${idUserToUpdate}`, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name: newName })
    }).then(res => res.json())
    console.log(response);
    return response;
}

/**
 * @param idUserForDelete {number} - coloque o id do usuário retornado na requisição de criação do mesmo
 */
async function deleteUser(idUserForDelete) {
    const response = await fetch(`https://api.escuelajs.co/api/v1/users/${idUserForDelete}`, {
        method: "delete"
    }).then(res => res.json());
    console.log(response);
    return response;
}

async function executeChallenger() {


    // 1. Realize uma requisição GET para obter a lista de usuários.
    await getAllUsers();

    /*
       2. Realize uma requisição POST para criar um novo usuário com os seguintes dados:
        Nome: "John Doe"
        E-mail: "johndoe@example.com"
    */
    const user = await createNewUser();
    // 3. Realize uma requisição GET para obter os detalhes do usuário recém-criado.
    await getUserFromId(user.id);
    // 4.Realize uma requisição PUT para atualizar o nome do usuário recém-criado para "Jane Doe".
    await updateUser(user.id);
    // 5.Realize uma requisição GET para obter os detalhes atualizados do usuário.
    await getUserFromId(user.id);
    // 6. Realize uma requisição DELETE para excluir o usuário criado.
    await deleteUser(user.id);
    // 7. Realize uma requisição GET para obter a lista de usuários atualizada após a exclusão.
    await getAllUsers();
}

executeChallenger()