const Bookmark = require('../../models/bookmark')


module.exports = {
    indexBookmarks,
    createBookmark,
    deleteBookmark,
    updateBookmark,
    bookmark,
    bookmarks
}
/*
router.get('/',bookmarkCtrl.indexBookmarks,bookmarkCtrl.bookmarks)
router.post('/',bookmarkCtrl.createBookmark,bookmarkCtrl.bookmark)
router.delete('/:id',bookmarkCtrl.deleteBookmark,bookmarkCtrl.bookmark)
router.put('/:id',bookmarkCtrl.updateBookmark,bookmarkCtrl.bookmark)
*/

function bookmark(req, res) {
    res.json(res.locals.data.bookmark)
}


function bookmarks(req, res) {
    res.json(res.locals.data.bookmarks)
}

async function indexBookmarks(req, res, next) {
    try {
        const foundBookmarks = await Bookmark.find({})
        res.locals.data.bookmarks = foundBookmarks
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


async function createBookmark(req, res, next) {
    try {
        const foundBookmark = await Bookmark.create(req.body)
        res.locals.data.bookmark = foundBookmark
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

async function deleteBookmark(req, res, next) {
    try {
        const foundBookmark = await Bookmark.findOneAndDelete({_id: req.params.id})
        res.locals.data.bookmark = foundBookmark
        next()

    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

async function updateBookmark(req, res, next) {
    try {
        const foundBookmark = await Bookmark.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        res.locals.data.bookmark = foundBookmark
        next()

    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}
