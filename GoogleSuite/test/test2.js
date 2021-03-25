
describe('Google Search Test', () => {

it('should have the right title', (done) => {
browser.url('https://google.com/')
search_box_element = $('[name=\'q\']')
search_box_element.setValue("BrowserStack\n")

expect(browser).toHaveTitle("BrowserStack - Google Search");

//title of the launched webpage is printed in console as output

const pagetitle = browser.getTitle()
console.log()
})

})