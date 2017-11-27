# Welcome to BusMapper
## Requirements
- Map of busses in Vancouver area
- Busses should update when map is moved
- Map should be live and use TransLink api

## Installation
Requires NodeJS v8.2.0 or above
### Frontend
```bash
cd client
npm install
npm start
```
Client will start on localhost:3000

### Backend
```bash
cd service
npm install
npm start
```
Service will start on localhost:5000
Screenshots will be saved in /service/videos/ by default.

## Deployment
Frontend can be built by running `npm run build` then serve `index.html` on your favourite http server.
Backend is a simple express app and can also be hosted on your favourite web server.

