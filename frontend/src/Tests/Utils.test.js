import UtilityClass from "../Classes/UtilityClass";

test('handle currency formatter method', () => {
    expect(UtilityClass.currencyFormatter(100)).toBe('100,00 HRK')
})

test('catch error of bad currencyFormatter method input', () => {
    expect(UtilityClass.currencyFormatter('as$ad')).toBe('NaN HRK')
})

test('handle clean date method', () => {
    expect(UtilityClass.cleanDate('2021-02-01T16:30:15.000+00:00')).toBe('1. veljače 2021.')
})

test('catch error of bad cleanDate method input', () => {
    expect(UtilityClass.cleanDate(21323)).toBe('1. siječnja 1970.')
    expect(UtilityClass.cleanDate('qwoei$%')).toBe('Invalid Date')
})

test('get user token', async () => {
    jest.setTimeout(10000)
    let userToken = await UtilityClass.fetchUserToken('vedrannovak1@gmail.com', 'X7Wbod-IA!7Q')
    expect(userToken.scope).toBe('read')
})

test('handle user token error', async () => {
    jest.setTimeout(10000)
    let error = await UtilityClass.fetchUserToken('vedrannovak1@gmail.com', '')
    expect(error.error).toBe('invalid_grant')
    expect(error.error_description).toBe('Bad credentials')
})