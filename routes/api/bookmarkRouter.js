const express = require('express')
const router = express.Router()
const bookmarkCtrl = require('../../controllers/api/bookmarkController')
const userCtrl = require('../../controllers/api/userController')

router.get('/',bookmarkCtrl.indexBookmarks,bookmarkCtrl.bookmarks)
router.post('/', userCtrl.auth, bookmarkCtrl.createBookmark,bookmarkCtrl.bookmark)
router.delete('/:id',userCtrl.auth,bookmarkCtrl.deleteBookmark,bookmarkCtrl.bookmark)
router.put('/:id',userCtrl.auth,bookmarkCtrl.updateBookmark,bookmarkCtrl.bookmark)
router.get('/:id',bookmarkCtrl.getBookmark,bookmarkCtrl.bookmark)


module.exports = router