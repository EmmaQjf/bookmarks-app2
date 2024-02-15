const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarkController')

router.get('/',bookmarkCtrl.indexBookmarks,bookmarkCtrl.bookmarks)
router.post('/',bookmarkCtrl.createBookmark,bookmarkCtrl.bookmark)
router.delete('/:id',bookmarkCtrl.deleteBookmark,bookmarkCtrl.bookmark)
router.put('/:id',bookmarkCtrl.updateBookmark,bookmarkCtrl.bookmark)


module.exports = router