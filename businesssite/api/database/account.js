const bcrypt = require('bcryptjs')
const uuid = require('uuid').v4

exports.createAccount = async function (client, username, firstname, lastname, password) {
    const accountId = uuid()
    const salt = await bcrypt.genSalt(10)
    const { rowCount } = await client.query({
        name: 'create-account',
        text: 'INSERT INTO accounts (account_id, username, firstname, lastname, password) VALUES ($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING',
        values: [
            accountId,
            username,
            firstname,
            lastname,
            await bcrypt.hash(password, salt)	
        ]
    })
    return rowCount > 0 ? accountId : undefined
}

exports.getAccountByUsername = async function (client, username) {
    const { rows } = await client.query({
        name: 'get-account-by-username',
        text: 'SELECT * FROM accounts WHERE username=$1',
        values: [username]
    })
    return rows[0]
}

exports.updateAccount = async  function (client, username, data) {
    // create dynamic query based on inputs
    const { firstname, lastname, password } = data
    const values = []
    const sets = []

    // if (username !== undefined) {
    //     values.push(username)
    //     sets.push('username=$' + values.length)
    // }

    // if (firstname !== undefined) {
    //     values.push(firstname)
    //     sets.push('name=$' + values.length)
    // }

    // if (lastname !== undefined) {
    //     values.push(lastname)
    //     sets.push('name=$' + values.length)
    // }

    // if (password !== undefined) {
    //     values.push(password)
    //     sets.push('password=$' + values.length)
    // }

    // if no properties were passed in then there is nothing to update
    //if (values.length === 0) return await exports.getAccount(client, accountId)

    //values.push(accountId)
    const { rows } = await client.query({
        name: 'update-account',
        //text: 'UPDATE accounts SET ' + sets.join(', ') + ' WHERE account_id=$' + (values.length) + ' RETURNING *',
        text: 'UPDATE accounts SET firstname = $2, lastname = $3 WHERE username = $1',
        values: [username, firstname, lastname]
    })
    //console.log('rows', rows)
    return rows[0]

}

exports.deleteAccount = async function (client, username) {
    const { rowCount } = await client.query({
        name: 'delete-account',
        // text: 'DELETE FROM accounts WHERE account_id=$1',
        text: 'DELETE FROM accounts WHERE username=$1',
        values: [username]
    })
    return rowCount > 0
}

// async function encryptPassword (password) {
//     const salt = await bcrypt.genSalt(10)
//     return await bcrypt.hash(password, salt)
// }