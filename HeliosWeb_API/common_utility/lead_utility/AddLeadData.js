var fs = require('fs')

function setMandatoryPropertyValues() {
    let addLeadBody = JSON.parse(fs.readFileSync('./common_utility/APIJson_lib/leadJson_lib/addlead.json'))
    let email = addLeadBody.Request.Email
    let firstName = addLeadBody.Request.FirstName
    let lastName = addLeadBody.Request.LastName
    let countryId = addLeadBody.Request.Phone.CountryId
    let number = addLeadBody.Request.Phone.Number
    let addr1 = addLeadBody.Request.Address.AddressLine1
    let addr2 = addLeadBody.Request.Address.AddressLine2
    let addr3 = addLeadBody.Request.Address.AddressLine3
    let city = addLeadBody.Request.Address.City
    let state = addLeadBody.Request.Address.State
    let postalCode = addLeadBody.Request.Address.PostalCode
    let country = addLeadBody.Request.Address.Country

    let currentDay = Date.now()
    let fname = "Lead"
    let lname = "User"
    let phn = "9876543210"
    let phnCode = "US"
    let address1 = ""
    let address2 = ""
    let address3 = ""
    let cityN = ""
    let stateN = ""
    let pCode = ""
    let cntry = ""

    addLeadBody = JSON.stringify(addLeadBody)
        .replace(email, fname + currentDay + "@gmail.com")
        .replace(firstName, fname + currentDay)
        .replace(lastName, lname)
        .replace(countryId, phnCode)
        .replace(number, phn)
        .replace(addr1, address1)
        .replace(addr2, address2)
        .replace(addr3, address3)
        .replace(city, cityN)
        .replace(state, stateN)
        .replace(postalCode, pCode)
        .replace(country, cntry)

    return addLeadBody
}

function setEmailPropertyValue(emailVal) {
    let addLeadBody = JSON.parse(fs.readFileSync('./common_utility/APIJson_lib/leadJson_lib/addlead.json'))
    let email = addLeadBody.Request.Email
    let firstName = addLeadBody.Request.FirstName
    let lastName = addLeadBody.Request.LastName
    let countryId = addLeadBody.Request.Phone.CountryId
    let number = addLeadBody.Request.Phone.Number
    let addr1 = addLeadBody.Request.Address.AddressLine1
    let addr2 = addLeadBody.Request.Address.AddressLine2
    let addr3 = addLeadBody.Request.Address.AddressLine3
    let city = addLeadBody.Request.Address.City
    let state = addLeadBody.Request.Address.State
    let postalCode = addLeadBody.Request.Address.PostalCode
    let country = addLeadBody.Request.Address.Country

    let currentDay = Date.now()
    let fname = "Lead"
    let lname = "User"
    let phn = "9876543210"
    let phnCode = "US"
    let emailId = emailVal
    let address1 = ""
    let address2 = ""
    let address3 = ""
    let cityN = ""
    let stateN = ""
    let pCode = ""
    let cntry = ""

    if (emailVal == "-") {
        emailId = "";
    }

    addLeadBody = JSON.stringify(addLeadBody)
        .replace(email, emailId)
        .replace(firstName, fname + currentDay)
        .replace(lastName, lname)
        .replace(countryId, phnCode)
        .replace(number, phn)
        .replace(addr1, address1)
        .replace(addr2, address2)
        .replace(addr3, address3)
        .replace(city, cityN)
        .replace(state, stateN)
        .replace(postalCode, pCode)
        .replace(country, cntry)

    return addLeadBody
}

function emptyFirstNameProperty() {
    let addLeadBody = JSON.parse(fs.readFileSync('./common_utility/APIJson_lib/leadJson_lib/addlead.json'))
    let email = addLeadBody.Request.Email
    let firstName = addLeadBody.Request.FirstName
    let lastName = addLeadBody.Request.LastName
    let countryId = addLeadBody.Request.Phone.CountryId
    let number = addLeadBody.Request.Phone.Number
    let addr1 = addLeadBody.Request.Address.AddressLine1
    let addr2 = addLeadBody.Request.Address.AddressLine2
    let addr3 = addLeadBody.Request.Address.AddressLine3
    let city = addLeadBody.Request.Address.City
    let state = addLeadBody.Request.Address.State
    let postalCode = addLeadBody.Request.Address.PostalCode
    let country = addLeadBody.Request.Address.Country

    let currentDay = Date.now()
    let fname = ""
    let lname = "User"
    let phn = "9876543210"
    let phnCode = "US"
    let address1 = ""
    let address2 = ""
    let address3 = ""
    let cityN = ""
    let stateN = ""
    let pCode = ""
    let cntry = ""

    addLeadBody = JSON.stringify(addLeadBody)
        .replace(email, fname + currentDay + "@gmail.com")
        .replace(firstName, fname)
        .replace(lastName, lname)
        .replace(countryId, phnCode)
        .replace(number, phn)
        .replace(addr1, address1)
        .replace(addr2, address2)
        .replace(addr3, address3)
        .replace(city, cityN)
        .replace(state, stateN)
        .replace(postalCode, pCode)
        .replace(country, cntry)

    return addLeadBody
}

module.exports = {
    setMandatoryPropertyValues,
    setEmailPropertyValue,
    emptyFirstNameProperty
}