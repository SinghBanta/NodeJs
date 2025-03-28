const router=require('express').Router();
const authRoutes=require('../api/Todo.route')
router.use('/auth',authRoutes);

module.exports=router;