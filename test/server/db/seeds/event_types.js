
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('event_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('event_types').insert([
        {id: 1, event_type: 'publicevent'},
        {id: 2, event_type: 'localevent'}
      ]);
    });
};
