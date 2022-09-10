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

// const ArrayFilter = Customers.filter((x) => x.Country == "India");
// console.log(ArrayFilter);

const ArrayFilter = () => {
    // inline style.
    let colors = {
        color: 'red',
        textDecoration: 'underline'
    }

    const CustInfo = Customers.filter((customer) => customer.Country == "India").map((cdata) => {
        return (
            <p key={cdata.CustomerId} className="p-tag">
                <span> {cdata.Name} :</span> {cdata.Country}
            </p>
        )
    });

    // Note: JavaScript run line by line left to Right, So that case first array filter the object
//from main array and then map retrive useful data and print.

    return (
        <div className="array-map">
            <strong style={colors}>Array Filter Example is below: find country india.</strong>
            {CustInfo}
        </div>
    )
}

export default ArrayFilter;