import React from 'react';
import confirmIcon from '../../../Images/confirmIcon.gif';
import starIcon from '../../../Images/starIcon.gif';
import heartIcon from '../../../Images/heartIcon.gif';
import clockIcon from '../../../Images/clockIcon.gif';

const QualitySection = () => {
    const qualities = [
        {
            title: "We Allways Confrm",
            icon: confirmIcon
        },
        {
            title: "We Paint Lives Not Houses",
            icon: starIcon
        },
        {
            title: "We Respect Everyone's Property",
            icon: heartIcon
        },
        {
            title: "We Arrive On Time",
            icon: clockIcon
        }
    ]

    const QualityCard = ({quality}) => {
        const cardStyle={
            width:"18rem",
            backgroundColor:"white"
        }
        return (
            <div style={cardStyle} className="col-md-3 shadow text-center p-3">
                <div className="cardImage">
                    <img style={{height:'50px'}} src={quality.icon} alt=""/>
                </div>
                <div>
                    <h4>{quality.title}</h4>
                </div>
            </div>
        )
    }

    return (
        <section className="row mt-5 p-3">
            {
                qualities.map(quality => <QualityCard quality={quality}></QualityCard>)
            }
        </section>
    );
};

export default QualitySection;