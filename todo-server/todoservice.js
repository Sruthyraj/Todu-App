const { Todo } = require("./db");

getTodu = () => {
  return Todo.find({}).then((data) => {
    return data;
  });
};

getToduById = (id) => {
  return Todo.findById({ _id:id }).then((data) => {
    return data;
  });
};

postTodu = (item) => {
  let newtodo = new Todo({
    item:item
  });
  return newtodo.save().then((data) => {
    if (data) {
      return data;
    }
  });
};

putTodu = (req,id) => {
  let newtodo = {
    item: req.body.item,
  };
  return Todo.findByIdAndUpdate({_id:id}, { $set: newtodo },{ new: true })
    .then((data) => {
      return data;
    });
};

deleteTodu = (id) => {
  return Todo.findOneAndRemove({ _id:id }).then((data) => {
    return data;
  });
};
module.exports = {
  getTodu,
  postTodu,
  putTodu,
  deleteTodu,
  getToduById,
};
