const jsonServer = require('json-server');
const { testData } = require('./data');
const { filterOutItemsWithoutName } = require('./functions');

const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(jsonServer.bodyParser);

// Simulate request delay
server.use((req, res, next) => setTimeout(next, 2000));
server.use(middlewares);

server.listen(port, () => {
  console.log('JSON Server is running');
});
server.get('/api/orgUnits', ({ method, query, body }, response) => {
  console.log('method:', method);
  if (method === 'GET') {
    console.log('method:', method);
    console.log('query:', query);
    console.log('body:', body);
    const { items } = testData();
    const filteredItems = filterOutItemsWithoutName(items);
    const res = {
      OrgUnits: filteredItems,
      pagination: {
        currentPage: 1,
        pageSize: 25,
        pageCount: 1,
        itemCount: filteredItems.length,
      },
    };
    console.log('res:', res);
    response.status(200).jsonp(res);
  }
});
