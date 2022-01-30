import * as queryString from "querystring";

export default class UtilityClass {
    /**
     * Takes one number and returns croatian currency format in string type
     * @param currency
     * @returns croatian currency format in string type
     */
    static currencyFormatter(currency: number): string {
        let formatter = new Intl.NumberFormat('hr-HR', {
            style: 'currency',
            currency: 'HRK',

            // These options are needed to round to whole numbers if that's what you want.
            //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
            //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
        });

        return formatter.format(currency)
    }

    /**
     * Takes timestamp written in string format and returns croatian date format in string type
     * @param timestamp
     * @returns croatian date format in string type
     */
    static cleanDate(timestamp: string): string {
        let ts = new Date(timestamp);
        let options = {year: 'numeric', month: 'long', day: 'numeric'};
        return ts.toLocaleDateString('hr-HR', options)
    }

    /**
     * Fetches bills data from server side and returns array of bill objects
     * @param access_token
     * @returns array of bill object
     */
    static async fetchBills(access_token: string): Promise<object[]> {
        return await fetch('https://digital-docs-air.herokuapp.com/bills', {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + access_token,
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        }).then(res => {
            return res.json();
        }).then(json => {
            //handle json response
            return json;
        }).catch((error) => {
            console.log('error ' + error);
            return error;
        });
    }

    /**
     * Fetches user token from server side and returns object filled with token data
     * @param username
     * @param password
     * @returns object with data: access_token {string}, token_type {string}, refresh_token {string}, expires_in {number}, scope {string}
     */
    static async fetchUserToken(username: string, password: string): Promise<object> {
        const data = queryString.stringify({
            grant_type: 'password',
            username: username,
            password: password,
            scope: 'read',
        });

        return await fetch('https://digital-docs-air.herokuapp.com/login', {
            method: 'post',
            headers: new Headers({
                'Authorization': 'Basic ' + btoa('digitalDocs_fe:secret'),
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: data
        }).then(res => {
            return res.json();
        }).then(json => {
            //handle json response
            return json;
        }).catch((error) => {
            console.log('error ' + error);
            return error;
        });
    }
}