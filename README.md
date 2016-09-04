# Forum (Question and Answer Message Board)

# App Description
This is a question and answer message board where a user submits a question and users can respond with answers.

#### Specs
* Questions have the content of the question itself, an author and additional notes.
* Answers have the content of the answer and the author.
* Includes a navbar that appears on all pages containing the name of the site and a link to the home page.
* Lists all questions on the homepage, with only the question and the name of the author showing.
* Users can click on a question to view additional information.
* Users can add and edit questions.
* Users can add answers to a question (one to many data relationship, one question to many answers). Answers are added and viewed on the same page as the particular question.

#### Technologies Used:

* JavaScript, HTML, CSS
* Ember (JavaScript framework)
* Bootstrap (styling)
* Firebase (external data storage)
* EmberFire (data adapter for Firebase)
* Liquid Fire (animations)
* Technologies listed below in Prerequisites

# Ember Information

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
