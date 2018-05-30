'use strict'

const chai = require('chai');
const chaiHttp = require('chai-http');
const faker = require('faker');
const mongoose = require('mongoose');

const expect = chai.expect;
const should = chai.should();

const User = require('../app/models/user');

chai.use(chaiHttp);



// ======================================================
// function to seed the data to the test-database========
// ======================================================

function seedUserData() {
    console.log('seeding user info');
    const seedData = [];

    for (let i=1; i<=10; i++) {
        seedData.push(generateUserData());
    }
    
    return User.insertMany(seedData);
}

// =====================================================
// making all the seed data=============================
//======================================================


function generateUserData() {
    return {
        email               : faker.internet.email(),
        password            : faker.internet.password(), 
        firstnamelastname   : faker.name.findName(),
        whereareyoufrom     : faker.address.country(), 
        relationship        : faker.name.jobTitle(),
        giftforex           : faker.commerce.product(),
    }
}