# YelpTrail – Online Hiking Trails Review Application

YelpTrail is a project completed during [Colt Steele's bootcamp](https://www.udemy.com/the-web-developer-bootcamp/). This version was personalized and tweaked beyond what was learned during the bootcamp. 

## Setting Up

The current version can be used locally or via [Cloud9](https://ide.c9.io/miango/yelp-trail).

### Running The Application

Run the database at the root with this command:

```
./mongod
```

Or, this command if errors with clean exit appears:

```
killall mongod ; cd ; ./mongod --repair ; cd data ; rm -rf mongod.lock ; cd ; ./mongod
```

Then, direct to the v5 folder:

```
cd workspace/YelpTrail/v5/
```

Run the application:
```
node app.js
```

The demo can be viewed by clicking on Preview, then Preview Running Application.

## Deployment

To be updated

## Built With

* [MongoDB](https://www.mongodb.com/) - Database used
* [JavaScript](https://www.javascript.com/) - Web Interface
* [Bootstrap](https://getbootstrap.com/) - Web Interface
* [Node.js](https://nodejs.org/en/) - Application Server
* etc.

## Authors

* **Mia Ngo** - *Implement and Tweak* 
* **Colt Steele** - *Initial Idea & Backbone Code* 

