const express = require("express");
const cors = require("cors");
const todoservice=require('./todoservice')
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);

app.get("/", (req, res) => {
  todoservice.getTodu().then((result) => {
    res.json(result);
  });
});

app.get("/:id", (req, res) => {
  todoservice.getToduById(req.params.id).then((result) => {
    res.json(result);
  });
});

app.post("/", (req, res) => {
  todoservice.postTodu(req.body.item).then((result) => {
    res.json(result);
  });
});



app.put("/:id", (req, res) => {
    todoservice.putTodu(req,req.params.id).then((result) => {
        res.json(result);
      });
});

app.delete("/:id", (req, res) => {
    todoservice.deleteTodu(req.params.id).then((result) => {
        res.json(result);
      });

});

app.listen(3000, () => {
  console.log("App running in port 3000");
});
