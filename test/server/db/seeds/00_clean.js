exports.seed = (knex, Promise) => {
  const empty = table => () => knex(table).del()
  return empty('events')()
    .then(empty('categories'))
    .then(empty('events_categories_junction'))
    .then(empty('users'))
    .then(empty('user_profiles'))
    .then(empty('user_interestedin_events'))
}