import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

const AdmitCard = () => {
    const { id } = useParams();
    const [applicant, setApplicant] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/applicantCollection/${id}`)
            .then(res => res.json())
            .then(data => setApplicant(data));

    }, [id]);
    // console.log(id);
    // console.log(applicant.postName);
    const admitStyle = {
        backgroundColor: '#ddd',
        padding: '80px'
    };

    return (
        <div style={admitStyle}>
            <table style={{ margin: '0 auto', borderCollapse: 'collapse', textAlign: 'left', width: '100%' }} cellSpacing="0" cellPadding="4">
                <tbody>
                    <tr>
                        <td colSpan="4" style={{ textAlign: 'center', fontSize: '20px', fontWeight: 'bold', textDecoration: 'underline', paddingBottom: '20px' }}>Applicant Copy</td>
                    </tr>

                </tbody>
            </table>
            <table style={{ margin: '0 auto', border: '1px solid #fff', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px', width: '100%', }} border="1px solid" cellSpacing="0" cellPadding="2">
                <tbody>
                    <tr>
                        <td>Post Name</td>
                        <td>{applicant.postName}</td>
                        <td rowSpan="5" style={{ textAlign: 'center', width: '100px' }}>
                            {
                                <QRCodeSVG
                                    value={"ID: " + applicant._id + ", Name: "
                                        + applicant.applicantName + ", Post: " + applicant.postName}
                                    size={80}
                                    bgColor={"#ffffff"}
                                    fgColor={"#000000"}
                                    includeMargin={false}
                                />
                            }
                        </td>
                    </tr>
                    <tr>
                        <td>Applicant's Name </td>
                        <td>{applicant.applicantName}</td>
                    </tr>
                    <tr>
                        <td>Father's Name</td>
                        <td>{applicant.fname}</td>
                    </tr>
                    <tr>
                        <td>Mother's Name</td>
                        <td>{applicant.mname}</td>
                    </tr>
                    <tr>
                        <td>Date of Birth</td>
                        <td>{applicant.b_day} / {applicant.b_month} / {applicant.b_year}</td>
                    </tr>
                    <tr>
                        <td>Contact Mobile</td>
                        <td>{applicant.p_number}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{applicant.email}</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>{applicant.gender}</td>
                    </tr>
                    <tr>
                        <td>Marital Status</td>
                        <td>{applicant.m_status}</td>
                    </tr>
                    <tr>
                        <td>Nationality / NID</td>
                        <td>{applicant.nationality + " / " + applicant.NID}</td>
                    </tr>
                    <tr>
                        <td>Religion</td>
                        <td>{applicant.religion}</td>
                    </tr>
                    <tr>
                        <td>Quota</td>
                        <td>{applicant.quota}</td>
                    </tr>
                    <tr>
                        <td>Home District</td>
                        <td>{applicant.P_District}</td>
                    </tr>
                </tbody>
            </table>
            <table style={{ marginTop: '10px', border: '1px solid #fff', borderCollapse: 'collapse', textAlign: 'left', fontSize: '12px', width: '100%', }} border="1px solid" cellSpacing="0" cellPadding="2">
                <tbody>
                    <tr>
                        <td style={{ width: '50%' }}><b>Present Address</b></td>
                        <td><b>Permanent Addres</b></td>
                    </tr>
                    <tr>
                        <td>
                            Care Of: {applicant.M_CareOf} <br />
                            Village/Town: {applicant.M_Village} <br />
                            Post Office: {applicant.M_POffice} <br />
                            Post Code: {applicant.M_PCode}<br />
                            Upzilla: {applicant.M_Upzilla} <br />
                            District: {applicant.M_District}
                        </td>
                        <td>
                            Care Of: {applicant.P_CareOf} <br />
                            Village/Town: {applicant.P_Village} <br />
                            Post Office: {applicant.P_POffice} <br />
                            Post Code: {applicant.P_PCode}<br />
                            Upzilla: {applicant.P_Upzilla} <br />
                            District: {applicant.P_District}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default AdmitCard;