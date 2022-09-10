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

const ArrayReduce = () => {
    // inline style.
    let colors = {
        color: 'red',
        textDecoration: 'underline'
    }

    // const CustInfo = Customers.map((cust) => cust.Name+ " " + cust.Country);
    const CustInfo = Customers.reduce(function (acc, curr) {
        if (acc[curr.Country]) {
            acc[curr.Country] = ++acc[curr.Country];
        } else {
            acc[curr.Country] = 1;
        }
        return acc;
    }, {});
    console.log(CustInfo);
    // Convert object as comma seprated string.
    // const CustData = Object.keys(CustInfo).map(function(k){return CustInfo[k]}).join(",");
    const CustData = Object.keys(CustInfo).join(",");
    // const CustData = Object.values(CustInfo).join(",");
    return (
        <div className="array-map">
            <strong style={colors}>Array Reduce Example is below: similiar member in country</strong>
            <p> {CustData} </p>
        </div>
    )
}


export default ArrayReduce;