import React from "react";

const Customers = [
    {
        "CustomerId": 1,
        "Name": "John Hammond",
        "Country": "United States"
    },
    {
        "CustomerId": 2,
        "Name": "Mudassar Khan",
        "Country": "India"
    },
    {
        "CustomerId": 3,
        "Name": "Suzanne Mathews",
        "Country": "France"
    },
    {
        "CustomerId": 4,
        "Name": "Robert Schidner",
        "Country": "Russia"
    },
    {
        "CustomerId": 5,
        "Name": "Robert Ram",
        "Country": "India"
    }
];

const ArrayMap = () => {
    // inline style.
    let colors = {
        color: 'red',
        textDecoration: 'underline'
    }

    // const CustInfo = Customers.map((cust) => cust.Name+ " " + cust.Country);
    const CustInfo = (Customers.map((cust) => {
        return (
            <p key={cust.CustomerId} className="p-tag">
                <span> {cust.Name} :</span> {cust.Country}
            </p>
        )
    }));

    return (
        <div className="array-map">
            <strong style={colors}>Array Map Example is below: find name with country</strong>
            {CustInfo}
        </div>
    )
}


export default ArrayMap;