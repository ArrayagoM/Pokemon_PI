const { Router } = require('express');
const { addFavorite, favorites, deleteFavorite } =  require('../controller/favorites');
const router = Router();

router.post('/:id', async(req, res) => {
try {
    const { id } = req.params;
    const favorite = await addFavorite(id);
    res.status(200).json(favorite);
} catch (error) {
    res.status(404).send({error:error.message})
}
})

router.delete('/:id', async(req, res)=> {
    try {
        const { id } = req.params;
        const deleteFav = await deleteFavorite(id);
        res.status(200).json(deleteFav)
    } catch (error) {
        res.status(404).send({error:error.message});
    }
})


router.get('/', async(req, res) => {
    
    try {
        const fav = await favorites();
        res.status(200).json(fav);
    } catch (error) {
        res.status(404).send({error:error.message})
    }
})


module.exports = router;