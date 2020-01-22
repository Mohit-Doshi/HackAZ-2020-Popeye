/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.helloWorld = (req, res) => {
  
  
  var gs = require('github-scraper');
  var url = '/iteles' // a random username
  gs(url, function(err, data) {
    console.log(data); // or what ever you want to do with the data
  })
  
  var url = '{req.name}/followers' // a random username (of someone you should follow!)
  gs(url, function(err, data) {
    console.log(data); // or what ever you want to do with the data
    if(data.next_page) {
      gs(data.next_page, function(err2, data2) {
        console.log(data2); // etc.
      })
    }
  })
  
  var gs = require('github-scraper'); // require the module
  var url = 'stars/iteles';           // starred repos for this user
  gs(url, function(err, data) {
    console.log(data);                // or what ever you want to do with the data
  })var url = 'iteles?tab=repositories';
  gs(url, function(err, data) {
    console.log(data);  // or what ever you want to do with the data
  })
  
  
  

  

  let message = req.query.message || req.body.message || 'Hello World!';
  res.status(200).send(message);
};

