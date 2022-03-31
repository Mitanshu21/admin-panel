require("dotenv").config();
const express = require("express");

const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_API,
  {
    dbName: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => (err ? console.log(err) : console.log("Connected to database"))
);

// Schema for users of app
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  mobileno: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  education: [
    {
      institute: {
        type: String,
        required: true,
      },
      percentage: {
        type: Number,
        required: true,
      },
      course: {
        type: String,
        required: true,
      },
      startDate: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
        required: true,
      },
    },
  ],
});
const User = mongoose.model("users", UserSchema);
User.createIndexes();

// For backend and express
// const express = require("express");
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("App is Working");
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) {
    return res.status(422).json({ emailerror: "Email already existed!" });
  } else {
    try {
      const user = new User(req.body);
      let result = await user.save();
      result = result.toObject();
      res.send(result);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
});

app.post("/login", async (req, res) => {
  console.log(req.body);
  const emailExists = await User.findOne({ email: req.body.email });

  if (!emailExists) {
    return res.status(422).json({ emailerror: "Email dose not exist." });
  } else {
    try {
      const passwordCheck = await User.findOne({
        $and: [{ email: req.body.email }, { password: req.body.password }],
      });
      if (passwordCheck) {
        const result = {
          firstname: passwordCheck.firstname,
          lastname: passwordCheck.lastname,
          email: passwordCheck.email,
        };
        res.send(result);
      } else {
        res.status(422).json({ emailerror: "Email or Password is wrong" });
      }
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Something went wrong" });
    }
  }
});

app.get("/userdetails", async (req, res) => {
  try {
    let result = await User.find({});
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(5000);
