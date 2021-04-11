import cors from "cors";
import Express from "express";
import mongoose from "mongoose";
//import router from "./routes/router.js";
import bcrypt from "bcrypt";
import {users} from "./models/users.js";

const url = "mongodb://localhost/PizzaApp";
mongoose.connect(url, {useNewUrlParser: true});
const con = mongoose.connection;

con.on("open", function() {
    console.log("MongoDB connected");
})

const app = Express();
const port = 3200;


app.use(cors());
app.use(Express.json());  
app.use(Express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.send("Home page");
})

app.post("/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new users({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword
        });
        const newUser = await user.save();
        // res.redirect("/login");
        console.log(newUser);
    }
    catch(err) {
        res.send(err)
    }  
})

app.post("/login", async (req, res) => {
    const {email, password} = req.body;
    try {
        let user = await users.findOne({
          email
        });
        if (!user)
          return res.status(400).json({
            message: "User Not Exist"
          });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({
            message: "Incorrect Password !"
        });
        res.redirect("/dashboard");
    }
    catch (err) {
        console.log(err.message);
        res.status(500).send("Error in Saving");
    }
}

app.listen(port, () => {
    console.log("Listening from port ", port);
});