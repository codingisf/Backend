const pool = require("../config/db.js");


// Create 
exports.createTodo = async(req,res) =>{
try {
    const {title} = req.body;
    const [result] = await pool.execute("INSERT INTO todos (title) values(?)",[title]);
    res.status(201).json(
        {
            message:"todo Created",
        }
    );
} catch (err) {
    res.status(500).json({error : err.message});
}



}