exports.seed = (knex, Promise) => {
  const empty = table => () => knex(table).del()
  return empty('users')()
    .then(empty('user_profiles'))
    .then(empty('user_friends'))
    .then(empty('events'))
    .then(empty('categories'))
    .then(empty('events_categories_junction'))
    .then(empty('user_goingto_events'))
    .then(empty('user_interestedin_events'))
    .then(empty('user_invitedto_events'))
}