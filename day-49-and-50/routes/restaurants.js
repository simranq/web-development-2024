const express = require('express');
const uuid = require('uuid');

const resData = require('../util/restaurant-data')

const router = express.Router();

router.get("/restaurants", function (req, res) {
    let order = req.query.order;
    let nextOrder = 'desc';
    if (order !== "asc" && order !== "desc"){
        order = "asc";
    }
    if (order === 'desc'){
        nextOrder = 'asc';
    }

    const storedRestaurants = resData.getStoredRestaurants();
    
    storedRestaurants.sort ( function( resA, resB ) {
        if (order === "asc" && resA.name > resB.name) {
            return 1;
        }
        else if (order === "desc" && resA.name < resB.name) {
            return 1;
        }
        return -1;
    });

    res.render("restaurants", {
      numberOfRestaurants: storedRestaurants.length,
      restaurants: storedRestaurants,
      nextOrder : nextOrder
    });
  });
  
  //dynamic route refer day 51 pt II
  
 router.get("/restaurants/:id", function (req, res) {
    // use of ':' => /restaurants/r1
    const restaurantId = req.params.id;
  
    const storedRestaurants = resData.getStoredRestaurants();
  
    for (const restaurant of storedRestaurants) {
      if (restaurant.id === restaurantId) {
        return res.render("restaurant-detail", { restaurant: restaurant });
      }
    }
    
    res.render("404");
  });
  
router.get("/recommend", function (req, res) {
    res.render("recommend");
  });
  
router.post("/recommend", function (req, res) {
    const restaurant = req.body; 
    restaurant.id = uuid.v4();
    const restaurants = resData.getStoredRestaurants();
    restaurants.push(restaurant);
    storeRestaurants(restaurants);  //refactored code
    res.redirect("/confirm");
  });
  
router.get("/confirm", function (req, res) {
    res.render("confirm");
  });
  
  module.exports = router;  //this was the line which i missed and solved it after 30 mins ig im exagting ofc!!