const express = require("express");
const app = express();
const port = process.env.PORT || 5000

function checkHttps(req, res, next){
  if(req.get('X-Forwarded-Proto').indexOf("https")!=-1){
    return next()
} else {
    res.redirect('https://' + req.hostname + req.url);
}
}                                                   // use this if you have a domain
  app.all('*', checkHttps)
  app.use(express.static("public"));                       // use this if you have a domain
 app.get("/", (request, response) => {
   response.sendFile(__dirname + "/src/pages/home.html");
});
 app.get("/css/home", (request, response) => {
   response.sendFile(__dirname + "/src/css/home.css");
});
const listener = app.listen(port, () => {
  console.log(listener.address().port);
});
