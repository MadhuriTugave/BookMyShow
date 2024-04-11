const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../index.js");
const expect = chai.expect;
const Schema = require("../schema.js");

chai.use(chaiHttp);

describe("API Tests", () => {
  describe("GET /booking", () => {
    it("it should GET booking data", (done) => {
      chai
        .request(app)
        .get("/api/booking")
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");

          done();
        });
    });
  });
});

describe("API Tests", () => {
  describe("POST /booking", () => {
    it("it should POST booking data", (done) => {
      chai
        .request(app)
        .get("/api/booking")
        .end((err, res) => {
          if (err) return done(err);
          expect(res).to.have.status(200);
          expect(res.body).to.be.an("object");

          done();
        });
    });
  });
});
