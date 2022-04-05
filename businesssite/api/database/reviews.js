//adding review stuff to the database
//const bcrypt = require('bcryptjs') for passwords
const uuid = require('uuid').v4

exports.createReview = async function (client, accountId, date, title, description) {
    const ReviewId = uuid()
    //const salt = await bcrypt.genSalt(10) for passwords
    const { rowCount } = await client.query({
        name: 'create-review',
        text: 'INSERT INTO reviews ("Review_id", account_id, date, title, description) VALUES ($1, $2, $3, $4, $5) ON CONFLICT DO NOTHING',
        values: [
            ReviewId,
            accountId,
            date,
            title,
            description
            //await bcrypt.hash(password, salt) for passwords
        ]
    })
    let review = {ReviewId, accountId, date, title, description}
    console.log(review)
    return rowCount > 0 ? review : undefined
}

exports.getReviews = async function (client) { //do I want to get the reviews by ID?
    const { rows } = await client.query({
        name: 'get-all-reviews',
        text: 'SELECT accounts.username, accounts.firstname, accounts.lastname, reviews."Review_id", reviews.title, reviews.description, reviews.date FROM reviews JOIN accounts ON reviews.account_id=accounts.account_id',
        //values: [username]
        //perform a join to get name
    })
    return rows
}

exports.updateReview = async function (client, reviewId, data) {
    const { description } = data
    // const values = []
    // const sets = []
    const { rows } = await client.query({
        name: 'update-review',
        text: 'UPDATE reviews SET description = $1 WHERE "Review_id" = $2',
        values: [description, reviewId]
    })
    return rows[0]
}

exports.deleteReview = async function (client, ReviewId) { //do I want to delete by username?
    //console.log(ReviewId)
    const { rowCount } = await client.query({
        name: 'delete-review',
        text: 'DELETE FROM reviews WHERE "Review_id"=$1',
        values: [ReviewId] //username?
    })
    return rowCount > 0
}

exports.getReviewById = async function (client, ReviewId) {
    const { rows } = await client.query({
        name: 'get-review-by-id',
        text: 'SELECT * FROM reviews WHERE "Review_id"=$1',
        values: [ReviewId]
    })
    return rows[0]
}

exports.getReviewByAccountId = async function (client, accountId) {
    const { rows } = await client.query({
        name: 'get-review-by-account-id',
        text: 'SELECT * FROM reviews WHERE account_id=$1',
        values: [accountId]
    })
    return rows
}