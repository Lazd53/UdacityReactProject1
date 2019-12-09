# MyReads Project - Alex Love

This is the MyReads app, meant to organize your reading material and keep you moving through your backlog.


## How to get started

To start up your app:
* Clone MyReads from the provided GitHub location
* Install all project dependencies with 'npm install'
* Start the development server with `npm start`
* MyReads will then start up on your computer via localhost on port 3000

## Your home page

The app will start up on your home page. You have three different categories to organize your reading; Currently Reading, In the Queue, and Read.

* To add a book, click on the green button in the lower right hand corner.
* To move a book to a different category, click on the downward arrow button in the lower right hand of the book cover to see the options of where to move the book.
* Click on the book cover to see more information about the book

## Your Search Page

Enter one of the search terms from the SEARCH_TERMS.md file to find more information on that topic. From there you can add the book to your collections by using the same downward arrow button as described for the home page. You can also click on the book for more information.
Please note that you only receive the top 20 queries regarding your search term.

## Built with:

* React v16.6.3
* React-Router-DOM v5.1.2

## Contributions

* Credit for the initial design and CSS of the app go to [Udacity](//www.udacity.com/).
* Backend server support is provided By [Udacity](//www.udacity.com/).
* This project was bootstrapped with the [Create React App](https://github.com/facebookincubator/create-react-app).
* Routing is provided by [React-Router](https://github.com/ReactTraining/react-router)

## For the future

I had set up a <link/> to allow the user to search for more books in the same category as the one they bring up in the book modal, by passing that info directly to the search bar state, but found that most of the categories are not actually in SEARCH_TERMS.md, which would lead the user to an empty screen so removed that feature. 
