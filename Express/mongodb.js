const mongoose = require('mongoose');
const user = require('./user.model.js')
mongoose.connect('mongodb://localhost:27017/cse');

const connection = mongoose.connection;

connection.once('open', async () => {
    console.log('Connected to MongoDB');
    console.log('Database Name:', connection.name);
    console.log('Host:', connection.host);
});

async function UserData() {
    // const res = await user.find();
    // console.log(res)
    // console.log("find one method")
    // const fdon = await user.findOne({ name: 'Rahul' })
    // console.log(fdon)
    // const updateone = await user.updateOne({ name: "Rahul" }, { $set: { age: 29 } })
    // console.log(updateone)
    // const resd = await user.find();
    // console.log(resd)
    // const deleteone = await user.deleteOne({ name: "Rahul" })
    // console.log(deleteone)
    const findone = await user.findOne({
        role: {
            $nin: ['Student', 'Admin']
        }
    },
        {
            name: 1
        }
    )
    console.log(findone)
}

UserData();