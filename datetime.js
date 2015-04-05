window.Datetime = function ( date ) {
    if ( this instanceof window.Datetime === false ) return new window.Datetime( date );
    if ( Object.prototype.toString.call( date ) !== "[object Date]" ) return;
    this.date = date;
    this.hour( -( this.date.getTimezoneOffset() / 60 ) );
};
window.Datetime.prototype.getUTC = function () {
    var UTC = [];
    UTC.push( this.date.getUTCFullYear() );
    UTC.push( this.date.getUTCMonth() );
    UTC.push( this.date.getUTCDate() );
    UTC.push( this.date.getUTCHours() );
    UTC.push( this.date.getUTCMinutes() );
    UTC.push( this.date.getUTCSeconds() );
    return UTC;
};
window.Datetime.prototype.day = function ( days ) {
    var UTC = this.getUTC(); days = ( days * 86400000 );
    this.date = new Date( Date.UTC( UTC[0], UTC[1], UTC[2], UTC[3], UTC[4], UTC[5] ) + days );
    return this;
};
window.Datetime.prototype.hour = function ( hours ) {
    var UTC = this.getUTC(); hours = ( hours * 3600000 );
    this.date = new Date( Date.UTC( UTC[0], UTC[1], UTC[2], UTC[3], UTC[4], UTC[5] ) + hours );
    return this;
};
window.Datetime.prototype.minute = function ( minutes ) {
    var UTC = this.getUTC(); minutes = ( minutes * 60000 );
    this.date = new Date( Date.UTC( UTC[0], UTC[1], UTC[2], UTC[3], UTC[4], UTC[5] ) + minutes );
    return this;
};
window.Datetime.prototype.datestamp = function () {
    var UTC = this.getUTC(); ++UTC[1];
    UTC[0] = ( UTC[1] > 12 ) ? ( ++UTC[0] ).toString() : UTC[0].toString();
    UTC[1] = ( UTC[1] > 12 ) ? "01" : ( UTC[1] < 10 ) ? ( "0" + UTC[1].toString() ) : UTC[1].toString();
    UTC[2] = ( UTC[2] < 10 ) ? ( "0" + UTC[2].toString() ) : UTC[2].toString();
    return UTC.slice( 0, 3 ).join( "-" );
};
window.Datetime.prototype.timestamp = function () {
    var UTC = this.getUTC(); ++UTC[1];
    UTC[0] = ( UTC[1] > 12 ) ? ( ++UTC[0] ).toString() : UTC[0].toString();
    UTC[1] = ( UTC[1] > 12 ) ? "01" : ( UTC[1] < 10 ) ? ( "0" + UTC[1].toString() ) : UTC[1].toString();
    UTC[2] = ( UTC[2] < 10 ) ? ( "0" + UTC[2].toString() ) : UTC[2].toString();
    UTC[3] = ( UTC[3] < 10 ) ? ( "0" + UTC[3].toString() ) : UTC[3].toString();
    UTC[4] = ( UTC[4] < 10 ) ? ( "0" + UTC[4].toString() ) : UTC[4].toString();
    UTC[5] = ( UTC[5] < 10 ) ? ( "0" + UTC[5].toString() ) : UTC[5].toString();
    return ( UTC.slice( 0, 3 ).join( "-" ) + " " + UTC.slice( 3 ).join( ":" ) );
};