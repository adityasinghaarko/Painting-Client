import React from 'react';

const Footer = () => {
    const columns = [
        {
            title: "Nayapara, Lamabazar, Sylhet , Bangladesh"
        },
        {
            title: "Company",
            descriptions: ["About", "Project", "Our Team", "Terms Conditions", "Submit Listing"]
        },
        {
            title: "Quick Links",
            descriptions: ["Contact", "Our Blogs", "Rentals"]
        }
    ];

    const Column = ({ column }) => {
        return(
            <div className = "col-md-4" >
                <h6>{column.title}</h6>
                { column.descriptions && column.descriptions.map(description => <p>{description}</p>) }            
            </div >
        )
    }

    const footerStyle={
        backgroundColor:"#343a40",
        color:"white",
        width:"100%",
        fontWeight:"bold",
        padding:"30px"
    }

return (
    <section style={footerStyle} className="row">
        {
            columns.map(column => <Column column={column}></Column>)
        }
    </section>
);
};

export default Footer;