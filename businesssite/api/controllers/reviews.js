const e = require('express')
//const { getAccountByUsername } = require('../database/account')
const reviews = require('../database/reviews')

module.exports = function (pool) {
    return {
        async createReview (req, res) {
            //process of creating a review
            console.log(req.user)
            const {date, title, description, file} = req.enforcer.body
            const review = await reviews.createReview(pool, req.user.id, date, title, description)
            if (review) {
                res.set('location', '/api/reviews/' + review.ReviewId) //should it be /review?
                    .enforcer
                    .status(201)
                    .send(review)
            } else {
                res.enforcer.status(400).send() //or should it be 401?
            }
        },

        async getReviews (req, res) { //dont need?
            //grabbing all the reviews and listing them
            const review = await reviews.getReviews(pool) //actually all the reviews
            if (review) {
                res.enforcer.status(200).send(review)
            } else {
                res.enforcer.status(400).send() //or should it be 401?
            }


        },

        //async getReviewByAccountId

        async getReviewByAccountId (req, res) { //dont need?
            //grabbing all the reviews and listing them
            const {accountId} = req.enforcer.params
            const review = await reviews.getReviewByAccountId(pool, accountId) //actually all the reviews
            if (review) {
                res.enforcer.status(200).send(review)
            } else {
                res.enforcer.status(400).send() //or should it be 401?
            }


        },

        
        async updateReview (req, res) {
            //editing a review
            const data = req.enforcer.body
            const {reviewId} = req.enforcer.params //do i put username or reviewID in the brackets?
            const client = await pool.connect()
            try {
                await client.query('BEGIN')
                let review = await reviews.getReviewById(client, reviewId) //do i want to get the reviewid instead?
                if (review === undefined) {
					res.enforcer.status(404).send()
				} else if (review.account_id !== req.user.id) {
					res.enforcer.status(403).send()
				} else {
					//await accounts.updateAccount(client, req.user.id, data)
					await reviews.updateReview(client, reviewId, data)
                    review = await reviews.getReviewById(client, reviewId) //do i want to get the reviewid instead?
					res.enforcer.status(200).send(review)
				}
                await client.query('COMMIT')
            } catch (e) {
                await client.query('ROLLBACK')
                throw e
            } finally {
                client.release()
            }
        },
        
        async deleteReview (req, res) {
            //deleting a review
            //console.log("hello")
            const {reviewId} = req.enforcer.params //what to put in the brackets?
            const client = await pool.connect()
            try {
                await client.query('BEGIN')
                let review = await reviews.getReviewById(client, reviewId) //should it be reviewid?
                if (review === undefined) {
					res.enforcer.status(404).send()
				} else if (review.account_id !== req.user.id) {
					res.enforcer.status(403).send()
				} else {
					//await accounts.updateAccount(client, req.user.id, data)
                    //console.log(reviewId)
					await reviews.deleteReview(client, reviewId)
                    // review = await reviews.getReviewById(client, reviewId) //do i want to get the reviewid instead?
					res.enforcer.status(204).send()
				}
                await client.query('COMMIT')
            }
            catch (e) {
                await client.query('ROLLBACK')
                throw e
            }
            finally {
                client.release()
            }

        },
        









        //section below is for files, maybe wont get to
        async uploadFile (req, res) { //last
            //uploading a file to a review

        },
        
        async downloadFile (req, res) { //last
            //downloading a file from a review

        },
        
        
    }
}