module.exports = function (pool) {
    return {
        async createReview (req, res) {
            //process of creating a review
            const {ReviewId, date, title, description, file} = req.enforcer.body

        },

        async getReviews (req, res) {
            //grabbing all the reviews and listing them

        },
        
        async updateReview (req, res) {
            //editing a review

        },
        
        async deleteReview (req, res) {
            //deleting a review

        },
        



        //section below is for files
        async uploadFile (req, res) { //last
            //uploading a file to a review

        },
        
        async downloadFile (req, res) { //last
            //downloading a file from a review

        },
        
        
    }
}