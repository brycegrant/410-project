# 410-project

# Semester Project Proposal

For this project I would like to create a website for a small car detailing business. The business itself does not exist but it seems like a fun way to learn the different technologies we will be taught in class. This site will contain these features:
- Home page
- About
- Contact
- Services offered and prices
- A review/testimonial page for customers where they can add photos
- FAQ page
- Be able to manipulate a review they have already created

A user would need an account in order to leave a review, which is where the authentication requirement would be met.

# Domain Driven Design

## Domain Events
- Create account
- Delete account
- Create review
- Delete review
- Submits an edit to a review
- Add photos
- Delete photos
- User logs in
- User logs out

## Domain Commands
- createAccount
- deleteAccount
- updatePassword
- validatePassword (userlogin)
- userLogout
- createReview
- editReview
- updateReview
- deleteReview
- addPhoto
- deletePhoto

## Entities
### User Account
- user id (unique and defined by user)
- name (what the user wants to be called)
- password (encrypted password)
- sessionInfo (info about whether they are logged in)
### User Review
- review id (unique)
- description
- star rating?

## Value Objects
- Photos


# REST Design

## Endpoints

| Description            | URL Fragment                       | HTTP Method | Path Parameters  | Representations |
| ---------------------- | ---------------------------------- | ----------- | ---------------- | --------------- |
| create account         | /account                           | POST        |                  | Create Account  |
| delete account         | /account/{accountId}               | DELETE      | accountid        |                 |
| log in                 | /account/{accountId}/login         | PUT         | accountid        | Account Login   |
| log out                | /account/{accountId}/logout        | PUT         | accountid        |                 |
| get reviews            | /reviews                           | GET         |                  | Get Reviews     |
| add review             | /reviews                           | POST        |                  | Add Review      |
| edit review            | /reviews/{reviewId}                | PUT         | reviewId         | Edit Review     |
| delete review          | /reviews/{reviewId}                | DELETE      | reviewId         |                 |
| upload photo to review | /reviews/{reviewId}/files          | POST        | reviewId         | File            |
| get photo              | /reviews/{reviewId}/files/{fileId} | GET         | reviewId, fileId | File            |


#### Account Login
```json
{
    "email": "useremailstring",
    "password": "userpasswordstring"
}
```

#### Create an Account
```json
{
    "username": "username",
    "firstname": "firstname",
    "lasttname": "lastname",
    "password": "userpasswordstring",
}
```

<!-- #### Get All Reviews
```json
{
    "reviewID": "001",
    "date": "2022-02-01T00:00:00.000Z",
    "title": "Great Experience!",
    "description": "I have never seen my car so clean and it did not take much time at all!",
    "files": [
        "file1",
        "file2",
        "file3"
    ]
}
```

```json
{
    "reviewID": "002",
    "date": "2022-02-04T00:00:00.000Z",
    "title": "Not the best",
    "description": "My friend referred me and I honestly expected a bit more for what I paid",
    "files": [
        "file1",
        "file2"
    ]
}
``` -->

#### Create Review

```json
{
    "reviewID": "003",
    "date": "2022-02-04T00:00:00.000Z",
    "title": "Clean car!",
    "description": "Great service!",
    "files": [
        "file1",
        "file2"
    ]
}
```




