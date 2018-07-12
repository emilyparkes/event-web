exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('userProfiles').del()
    .then(function () {
      // Inserts seed entries
      return knex('userProfiles').insert([
        {id: 1, user_id: 1, firstName: 'emily', preferredName: 'em', surname: 'parkes', profilePic: 'val', phone: '021 555 555', bio: 'I\'m the dev.'},
        {id: 2, user_id: 2, firstName: 'jane', preferredName: 'janie', surname: 'doe', profilePic: 'val', phone: '021 000 000', bio: 'I\'m a mystery.'}
      ])
    })
}
