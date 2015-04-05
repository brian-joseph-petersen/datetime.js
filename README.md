Datetime.js
-----------
Extends the JavaScript `Date` Object

```javascript
var datetime = Datetime( new Date( 21600000 ) );
// creates new Datetime Object

datetime.date;
// Thu Jan 01 1970 00:00:00 GMT

datetime.getUTC();
// [ 1970, 0, 1, 0, 0, 0 ]

datetime.day( +1 ).hour( -12 ).minute( +0.5 );
// Thu Jan 01 1970 12:00:30 GMT

datetime.datestamp();
// "1970-01-01"

datetime.timestamp();
// "1970-01-01 12:00:30"
```