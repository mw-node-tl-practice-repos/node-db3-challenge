const db = require('../data/dbConfig.js')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
}

function find() {
    return db('schemes');
}

function findById(id) {
    return db('schemes')
    .where({id})
}

function findSteps(id) {
    return db('steps')
    .join('schemes', 'schemes.id', 'steps.scheme_id')
    .where('steps.scheme_id', id)
    .select('schemes.scheme_name', 'steps.step_number', 'steps.instructions')
}

function add(scheme) {
    return db('schemes')
    .insert(scheme)
    .then(ids => {
        const id = ids[0]
        return db('schemes')
        .where({id})
    })
}

function update(changes, id) {
    return db('schemes')
    .where({id})
    .update(changes)
    .then(() => {
        return db('schemes')
        .where({id})
    })
}

function remove(id) {
    return db('schemes')
    .where({id})
    .delete()
    // don't do .delete({id}), as returning is not supported by sqlite3 and will delete the whole database
}