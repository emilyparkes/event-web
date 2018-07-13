exports.seed = (knex, Promise) => {
  const empty = table => () => knex(table).del()
  return empty('public_events')()
    .then(empty('local_events'))
    .then(empty('categories'))
    .then(empty('public_events_categories_junction'))
    .then(empty('local_events_categories_junction'))
    .then(empty('users'))
    .then(empty('user_profiles'))
}