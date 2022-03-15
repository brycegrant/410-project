const request = require('supertest')
const expect = require('chai').expect
const app = require('../server/server')

describe('server', () => {

    describe('accounts', () => {
        it('can not create an account', () => { //creating an account
            return request(app)
                .post('/accounts')
                .send({
                    username: 'bryce21',
                    firstname: 'bryce',
                    lastname: 'grant',
                })
                .expect(400)
        })
        it('can delete an account', () => { //deleting an account
            return request(app)
                .delete('/accounts/accountId')
                .send()
                .expect(204)
        })
        it('can not login to an account', () => { //logging into an account
            return request(app)
                .put('/accounts/accountId/logout')
                .send({
                    username: "useremailstring",
                    password: "userpasswordstring"
                })
                .expect(400)
        })
    })

    describe('reviews', () => { //getting the reviews
        it('can list all reviews', () => {
            return request(app)
                .get('/reviews')
                .send()
                .expect(200)
        })
        it('can delete a review', () => { //deleting a review
            return request(app)
                .delete('/reviews/reviewId')
                .send()
                .expect(204)
        })
        it('can create a new review', () => { //add/create a new review
            return request(app)
                .post('/reviews')
                .send({
                    ReviewId: "003",
                    date: "2022-02-04T00:00:00.000Z",
                    title: "Clean car!",
                    description: "Great service!",
                    files: [
                        "file1",
                        "file2"
                    ]
                })
                .expect(201)
        })

    })

})