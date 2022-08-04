import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const AdmitCard = () => {
    const { id } = useParams();
    const [applicant, setApplicant] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/applicantCollection/${id}`)
            .then(res => res.json())
            .then(data => setApplicant(data));

    }, []);
    // console.log(id);
    // console.log(applicant.postName);
    const admitStyle = {
        backgroundColor: '#ddd',
        padding: '80px'
    };

    return (
        <div style={admitStyle}>
            <p>{applicant.applicantName}</p>
            <p>{applicant.postName}</p>
            <h2>Application form submitted successfully</h2>

        </div>
    );
};

export default AdmitCard;