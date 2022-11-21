// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

//Testing isPhoneNumber
test('checks a valid phone number', () => {
    expect(functions.isPhoneNumber('(123)456-7899')).toBe(true);
});
test('checks a valid phone number', () => {
    expect(functions.isPhoneNumber('(000)000-0000')).toBe(true);
});
test('checks a invalid phone number', () => {
    expect(functions.isPhoneNumber('123')).toBe(false);
});
test('checks a invalid phone number', () => {
    expect(functions.isPhoneNumber('0')).toBe(false);
});

//Testing isEmail
test('checks a valid email', () => {
    expect(functions.isEmail('a@gmail.com')).toBe(true);
});
test('checks a valid email', () => {
    expect(functions.isEmail('fdjksfakslfasjfksalfasf@outlook.com')).toBe(true);
});
test('checks a invalid email', () => {
    expect(functions.isEmail('no.com')).toBe(false);
});
test('checks a invalid email', () => {
    expect(functions.isEmail('hi@')).toBe(false);
});

//Testing isStrongPassword
test('checks a valid strong password', () => {
    expect(functions.isStrongPassword('b9afjf2')).toBe(true);
});
test('checks a valid strong password', () => {
    expect(functions.isStrongPassword('a1234')).toBe(true);
});
test('checks a invalid strong password', () => {
    expect(functions.isStrongPassword('@@@@')).toBe(false);
});
test('checks a invalid strong password', () => {
    expect(functions.isStrongPassword('sfsdfdfkasjfklasfjaslfkajflkaj')).toBe(false);
});

//Testing isDate
test('checks a valid date', () => {
    expect(functions.isDate('1/2/1010')).toBe(true);
});
test('checks a valid date', () => {
    expect(functions.isDate('09/12/2000')).toBe(true);
});
test('checks a invalid date', () => {
    expect(functions.isDate('123/10/2000')).toBe(false);
});
test('checks a invalid date', () => {
    expect(functions.isDate('10/10/100')).toBe(false);
});

//Testing isHexColor
test('checks a valid hex color', () => {
    expect(functions.isHexColor('#AAA')).toBe(true);
});
test('checks a valid hex color', () => {
    expect(functions.isHexColor('#000000')).toBe(true);
});
test('checks a invalid hex color', () => {
    expect(functions.isHexColor('#0000')).toBe(false);
});
test('checks a invalid hex color', () => {
    expect(functions.isHexColor('#@!)@#(')).toBe(false);
});