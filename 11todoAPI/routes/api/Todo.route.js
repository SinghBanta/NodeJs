const router=require('express').Router();
const {getData, addData, updateData, deleteData}=require('../../controllers/auth/todo')

router.get('/getData',getData);
router.post('/addData',addData);
router.put('/:id',updateData);
router.delete('/:id',deleteData);

module.exports=router;