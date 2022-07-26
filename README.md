# KIB-CRUD REST API with Node.js, Mongoose & TypeScript

Note: This repository includes the [postman collection for the finished API](postman_collection.json) collection has some script to automatically add created user params to other API so you don't need to copy & paste





## App Idea
* basic REST API for creating ,delete and updaet user with hashing user password
    


## Technologies
* Node.js
* MongoDB with Mongoose
* TypeScript
* Express.js & Express.js middleware
* Zod validation

# Deployment

* run command 

```ruby
docker-compose up
```

and should see something like that ruuning on port **8080**

```ruby
app_1      | [2022-07-26T06:03:39+00:00] INFO: App is running at http://localhost:8080
app_1      | [2022-07-26T06:03:39+00:00] INFO: database connected
app_1      | [2022-07-26T06:03:39+00:00] INFO: Swagger docs available at http://localhost:8080/docs
```


![running app](https://i.im.ge/2022/07/26/FUw0F0.png)



## Swagger document
after app is up and running you can check
```ruby
http://localhost:8080/docs
```

should find something like 


![swagger](https://i.im.ge/2022/07/26/FUjj10.png)



# Healt Check API

```ruby
http://localhost:8080/healthcheck
```
