const express = require("express");
const axios = require("axios");
const commaNumber = require('comma-number')
const router = express.Router();

router.get("/", function(req, res, next) {
  res.render("login");
});

router.post("/login", function(req, res) {
  axios.get("http://localhost:4001/login/" + req.body.username).then(doc => {
    if (doc.data.status != false) {
      if (doc.data.data.password === req.body.password) {
        var among =
          doc.data.data.salary + doc.data.data.ot + doc.data.data.bonus;
        var total = among - among * 0.05;
        
        res.render("result", {
          name: doc.data.data.name + " " + doc.data.data.surname,
          doctype: doc.data.data.doctype,
          salary: commaNumber(doc.data.data.salary) + " บาท",
          ot: commaNumber(doc.data.data.ot) + " บาท",
          bonus: commaNumber(doc.data.data.bonus) + " บาท",
          total: commaNumber(total) + " บาท"
        });
      } else {
        res.render("error", {
          message: "กรุณาใส่ password ให้ถูกต้อง"
        });
      }
    } else {
      res.render("error", {
        message: "กรุณาใส่ username ให้ถูกต้อง"
      });
    }
  });
});

module.exports = router;
