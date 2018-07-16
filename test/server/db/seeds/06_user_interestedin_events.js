
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_interestedin_events').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_interestedin_events').insert([
        {id: 1, user_id: 1, event_id: 2},
        {id: 2, user_id: 1, event_id: 2},
       
      ]);
    });
};
