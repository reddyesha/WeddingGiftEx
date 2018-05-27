'use strict'

var express  = require('express');
var exp      = express();
var passport = require('passport');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app =  require('../app/routes.js')(exp, passport);
const mongoose = require('mongoose');

const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);


describe('basic express', () => {
    it('get request "/" should return index.ejs file', () => {
        return chai.request(app)
        .get('/')
        .then(function(res) {
            expect(res).to.exist;
        }); 
    });
});

describe('testing the 200 code', function() {
    it('home.html should return a code of 200', function() {
        let res;
        // console.log('tests');
        return chai.request(app)
            .get('/')
            .then(function(_res) {
                res = _res;
                expect(res).to.have.status(200);
            });
    });


    it('register.html should return a code of 200', function() {
        let res;
        // console.log('tests');
        return chai.request(app)
            .get('/register')
            .then(function(_res) {
                res = _res;
                expect(res).to.have.status(200);
            });
    });
});
