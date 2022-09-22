import React from "react";

const ImportExport = () => {
    return (
        <p className="main"> My paragraph. </p>
    )
}
const anotherVar = "Another Paragraph"
const anotherVar1 = <div className="section">Another Para with div</div>

const AnotherImportExport = () => {
    return (
        <p className="main1"> My another paragraph. </p>
    )
}

export default ImportExport;
export  {anotherVar, anotherVar1, AnotherImportExport};
