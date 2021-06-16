const app = require('./config/server');

require ('./app/routes/news.js')(app);

app.listen(app.get ('port'), () => {
   console.log ("Server en puerto: "+ app.get ('port')); 
});
