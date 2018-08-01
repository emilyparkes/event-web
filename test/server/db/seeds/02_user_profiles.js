exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_profiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_profiles').insert([
        {id: 1, user_id: 1, firstName: 'emily', preferredName: 'em', surname: 'parkes', profilePic: 'val', bio: 'I\'m the dev.', phone: '021 555 555', location: 'Auckland'},
        {id: 2, user_id: 2, firstName: 'jane', preferredName: 'janie', surname: 'doe', profilePic: 'val', bio: 'I\'m a mystery.', phone: '021 000 000', location: 'Wellington'},
        {id: 3, user_id: 3, firstName: 'admin', preferredName: 'ad', surname: 'administrator', profilePic: 'val', bio: 'I\'m the dev.', phone: '021 555 555', location: 'Auckland'},
        {id: 4, user_id: 4, firstName: 'example', preferredName: 'ex', surname: 'examples', profilePic: 'val', bio: 'I\'m a mystery.', phone: '021 000 000', location: 'Wellington'}
      ])
    })
}
