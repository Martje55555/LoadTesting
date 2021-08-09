# svixLoadTest

Perfomance/Load testing using [Apache Bench](http://httpd.apache.org/docs/2.4/programs/ab.html)

### Install Dependencies
`npm install`

### Start Server
`npm start`

starts in port 3000

### Start Load Test
`ab -m POST -n 1000 -c 100 localhost:3000/createMessage`

* `-m` specifies http request
* `n` Indicates how many requests are going to be made.
* `-c` ("Concurrency"). Indicates how many clients (people/users) will be hitting the site at the same time. While ab runs, there will be -c clients hitting the site. This is what actually decides 

### Considerations
* Make sure to create a `config.js` file that hold your `API_KEY` with any other secrets. (I used it to hold my app id and my API key, seen in `/routes/sendMessage.js`)
