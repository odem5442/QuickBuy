var env = process.env.NODE_ENV || 'development'

if ( env === 'development' ) {
    process.env.PORT = 3000;
    process.env.MONGODB_URI = 'mongodb://mongo:27017/QuickBuy';
} else if ( env == 'production' ) {
    //process.env.PORT = xxxx;
    //process.env.MONGODB_URI = 'mongodb://mongodb:27017/xxxxxxx'
}