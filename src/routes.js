const {
  addNotHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNotByHandler,
  deleteNotByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNotHandler,
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNotByHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNotByIdHandler,
  },
];
module.exports = routes;
