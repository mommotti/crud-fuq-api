const express = require('express')

const router = express.Router()

// READ ALL
router.get('/', (req, res, next) => {
    res.status(200).send('READ ALL ✅')
})

// READ ONE
router.get('/:id', (req, res, next) => {
    res.status(200).send('READ ONE ✅')
})

// CREATE ONE
router.post('/', (req, res, next) => {
    res.status(201).send('CREATED ONE ✅')
})

// UPDATED ONE
router.put('/:id', (req, res, next) => {
    res.status(204).send('UPDATED ONE ✅')
})

// DELETE ONE
router.delete('/:id', (req, res, next) => {
    res.status(202).send('DELETED ONE ✅')
})


module.exports = router