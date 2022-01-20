# Okta Express App Example

This tutorial shows you how to build a Node.js website with [Express.js](https://expressjs.com/) and
[OpenID Connect](https://github.com/oktadev/okta-express-basic-crud-app-example/blob/main/blog/2017/07/25/oidc-primer-part-1).

Please read [Use OpenID Connect to Build a Simple Node.js Website](https://developer.okta.com/blog/2017/10/19/use-openid-connect-to-build-a-simple-node-website) to walk through the tutorial.

**Prerequisites**

- Basic knowledge of JavaScript
- [Node.js](https://nodejs.org/en/)
- [Okta CLI](https://cli.okta.com/)

> [Okta](https://developer.okta.com/) has Authentication and User Management APIs that reduce development time with instant-on, scalable user infrastructure. Okta's intuitive API and expert support make it easy for developers to authenticate, manage and secure users and roles in any application.

## Getting Started

To install this example application, run the following commands:
```
git clone https://github.com/oktadev/okta-express-example.git
cd okta-express-example
```

### Create an OIDC Application in Okta

Create a free developer account with the following command using the [Okta CLI](https://cli.okta.com):

```shell
okta register
```

If you already have a developer account, use `okta login` to integrate it with the Okta CLI.

Provide the required information. Once you register, create a client application in Okta with the following command:

```shell
okta apps create
```

You will be prompted to select the following options:
- Type of Application: **1: Web**
- Redirect URI: `http://localhost:3000/authorization-code/callback`
- Logout Redirect URI: `http://localhost:3000/`

Run `cat .okta.env` (or `.okta.env` on Windows) to see the issuer and credentials for your app. Update `server.js` with your Okta settings.

### Install dependencies and run the app

To install the dependencies, run the following command:
```
npm install
```

First: you'll need to activate your environment variables from before. To do
this, run the following command:

```console
source .okta.env
```

Next, you'll want to run the website locally:

```console
npm start
```

Finally, open your browser, visit [http://localhost:3000](http://localhost:3000)
and check out the site!

## Help

Please post any questions as comments on the [blog post][https://developer.okta.com/blog/2017/10/19/use-openid-connect-to-build-a-simple-node-website], or visit our [Okta Developer Forums](https://devforum.okta.com/).

## License

Apache 2.0, see [LICENSE](LICENSE).
