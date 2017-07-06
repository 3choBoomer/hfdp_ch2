# hfdp_ch2

```
npm install
node app
```

How to:
Use a rest client like curl or postman to interact with the server:

POST /wx/temp/90
POST /wx/<anyPropName>/<anyPropValue>

Register new observers
POST /obs/avgTemp
POST /wx/temp/70
POST /wx/temp/80

POST /obs/current

POST /wx/humidity/90

POST /obs/avgHumidity

POST /wx/humidity/80
POST /wx/humidity/90

Watch the console to see how the output changes based on the observers currently registered.
