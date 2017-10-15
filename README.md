# basic-okta-express-sample

This is a very basic website built with Node.js and Express.js that uses
[Okta](https://developer.okta.com/) + OpenID Connect for authentication.


## Installation

To install this sample application, run the following commands:

```console
$ git clone https://github.com/oktadeveloper/basic-okta-express-sample.git
$ cd basic-okta-express-sample
$ npm install
```

This will get a copy of the project installed locally, along with all of its
dependencies.


## Setup

Once you've installed the project, you need to perform some setup in order to
get things working.

Start by [creating an Okta developer account](https://developer.okta.com).

Next, log into the Okta console and:

- Click the Applications tab
- Click Add Application
- Click Web and hit Next
- Leave all the default options and click Done
- Copy the Client ID and Client Secret values from the following screen
- Click the Dashboard link at the top of the page
- Copy the Org URL value near the top of the page on the right

You should now have three values: Client ID, Client Secret, and Org URL.

Create a file named `.env` and add the following contents (be sure to substitute
in the correct values where appropriate):

```
export OKTA_ISSUER_URI=https://{{ YOUR_ORG_URL }}/oauth2/default
export OKTA_CLIENT_ID={{ YOUR_CLIENT_ID }}
export OKTA_CLIENT_SECRET={{ YOUR_CLIENT_SECRET }}
export REDIRECT_URI=http://localhost:3000/authorization-code/callback
export SECRET=INSERT_A_LONG_RANDOM_STRING_HERE
```

This file contains a series of environment variables that are specific to your
application. These will be used to provide the required inputs to this website
in order for it to run successfully.


## Run the Site

Now that you've got the setup done, you need to run the site.

First: you'll need to "activate" your environment variables from before. To do
this, run the following command:

```console
$ source .env
```

Next, you'll want to run the actual website locally:

```console
$ npm start
```

Finally, open your browser, visit [http://localhost:3000](http://localhost:3000)
and test out the site!
