var chai = require('chai')
var chaiHttp = require('chai-http')
var expect = require('chai').expect

chai.use(chaiHttp)

async function getToken() {
    var body = 'username=SanityIMA&password=P@ssw0rd&grant_type=password'
    var response = await chai.request('http://heliostestcommand.myrenatus.com')
        .post('/Token')
        .send(body)

    return response.body.access_token
}

async function postAPI(token, context, body) {
    var response = await chai.request('http://heliostestcommand.myrenatus.com')
        .post(context)
        .set('Authorization', 'Bearer ' + token)
        .set('content-type', 'application/json')
        .send(body)

    return response
}

function expectStatus(response, statusCode) {
    expect(response).to.have.status(statusCode)
}

function validatePropertyValue(actualRespBody, expRespBody) {
    expect(actualRespBody).to.equal(expRespBody)
}

module.exports = {
    getToken,
    postAPI,
    expectStatus,
    validatePropertyValue
}

