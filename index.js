const server = require('./api/servers.js')




server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});
