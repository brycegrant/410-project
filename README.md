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
- review id?





