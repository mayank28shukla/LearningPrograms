var apiLib = require('../../common_utility/API_lib')
var leadData = require('../../common_utility/lead_utility/AddLeadData')
var general = require('../../common_utility/general')
var token

describe('Add Lead Verify', function () {
    this.timeout(5000)
    before(async function () {
        token = await apiLib.getToken()
    })

    it('Should add lead successfully', async function () {
        let addLeadBody = leadData.setMandatoryPropertyValues()
        var response = await apiLib.postAPI(token, '/extlead/add', JSON.parse(addLeadBody))
        apiLib.expectStatus(response, 200)
        general.logMessage("Lead Added Successfully")
        general.logMessage("Lead ID: " + response.body.Response.LeadId)
    })

    it('Should throw a message \'Valid email is required\' with Status Code 400 when Email property is empty',
        async function () {
            let invalidEmailResponse = general.readTextFile('leads_invalidEmail.txt');
            let addLeadBody = leadData.setEmailPropertyValue("-")
            var response = await apiLib.postAPI(token, '/extlead/add', JSON.parse(addLeadBody))
            apiLib.expectStatus(response, 400)
            apiLib.validatePropertyValue(JSON.stringify(response.body), invalidEmailResponse)
            general.logMessage('Invalid Email Response is returned with correct status code')
        })

    it('Should throw a message \'Valid email is required\' with Status Code 400 when Email property is invalid',
        async function () {
            let invalidEmailResponse = general.readTextFile('leads_invalidEmail.txt');
            let addLeadBody = leadData.setEmailPropertyValue("xyzemail")
            var response = await apiLib.postAPI(token, '/extlead/add', JSON.parse(addLeadBody))
            apiLib.expectStatus(response, 400)
            apiLib.validatePropertyValue(JSON.stringify(response.body), invalidEmailResponse)
            general.logMessage('Invalid Email Response is returned with correct status code')
        })

    it('Should throw a message \'FirstName is required\' with Status Code 400 when FirstName property is empty',
        async function () {
            let firstNameRequiredResponse = general.readTextFile('leads_FirstNameRequired.txt');
            let addLeadBody = leadData.emptyFirstNameProperty()
            var response = await apiLib.postAPI(token, '/extlead/add', JSON.parse(addLeadBody))
            apiLib.expectStatus(response, 400)
            apiLib.validatePropertyValue(JSON.stringify(response.body), firstNameRequiredResponse)
            general.logMessage('FirstName required Response is returned with correct status code')
        })
})
