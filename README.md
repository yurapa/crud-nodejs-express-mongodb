# Node.js, Express, MongoDB - a Simple CRUD Application

 - Free Mongo DB service: https://mlab.com
 - MongoDB manual: https://docs.mongodb.com/manual/
 - Exmple for MongoDB driver: https://github.com/mongolab/mongodb-driver-examples/blob/master/nodejs/nodeSimpleExample.js
 - Node.js, Express, MongoDB: API, 30 min: https://habr.com/company/ruvds/blog/321104/
 - Express Routing: http://expressjs.com/ru/guide/routing.html
 - Postman - APP for testing GET/POST/PUT/DELETE queries
 - Video Lessons NodeJS (MonsterLessons): https://monsterlessons.com/project/categories/nodejs

## REST API

| Uniform Resource Locator (URL) | Action |
| ------ | ------ |
| GET /api/songs | View all songs |
| GET /api/song/7 | Get information about a song with ID=7 |
| POST /api/song | Add a new song |
| PUT /api/song/7 | Update information about a song with ID=7 |
| DELETE /api/song/7 | Delete one song with ID=7 |

### Start API project

```sh
$ npm i
$ npm run dev
```

#### How DB is looks like?

| _id | decade | artist | song | weeksAtOne |
| ------ | ------ | ------ | ------ | ------ |
| 5b83d6eaabf19e060c1d52e4 | 1950s | Debby Boone | You Light Up My Life | 10 |
| 5b83d6eaabf19e060c1d52e5 | 1980s | Olivia Newton-John | Physical | 24 |
| 5b83d6eaabf19e060c1d52e6 | 1990s | Mariah Carey ft. Boyz II Men | One Sweet Day | 16 |
| 5b852492f978b62f40638a59 | 1860s | John Doe | Tututu | 15 |