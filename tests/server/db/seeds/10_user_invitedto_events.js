
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user_invitedto_events').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_invitedto_events').insert([
        {id: 1, invitee_user_id: 1, event_id: 2, inviter_user_id: 2},
        {id: 2, invitee_user_id: 1, event_id: 3, inviter_user_id: 2},
        {id: 3, invitee_user_id: 1, event_id: 4, inviter_user_id: 2},
        {id: 4, invitee_user_id: 2, event_id: 5, inviter_user_id: 1},
        {id: 5, invitee_user_id: 2, event_id: 6, inviter_user_id: 1},
        {id: 6, invitee_user_id: 2, event_id: 7, inviter_user_id: 1}
      ])
    })
}
