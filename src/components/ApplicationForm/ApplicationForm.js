import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ApplicationForm.css';

const ApplicationForm = () => {
    const [applicant, setApplicant] = useState({});
    let [id, setId] = useState('');
    const [districtObject, setDistrictObject] = useState({});
    const [dist, setDist] = useState([]);
    const [dist2, setDist2] = useState([]);
    const [upzilla, setUpzilla] = useState();

    let m_dist = [];
    let p_dist = [];
    let m_upzilla = [];
    let p_upzilla = [];
    let union;
    let union1 = [];
    // let union1 = [];
    useEffect(() => {
        fetch('./dist.json')
            .then(res => res.json())
            .then(data => setDistrictObject(data))
    }, []);

    for (let d in districtObject) {
        m_dist.push(d);
        p_dist.push(d);
    }
    for (let u in districtObject[dist]) {
        m_upzilla.push(u);
    }
    for (let up in districtObject[dist2]) {
        p_upzilla.push(up);
    }
    let upz = districtObject[dist];
    for (let y in upz) {
        // console.log(upz[upzilla]);
        union = upz[upzilla];
        // console.log(union);
        for (let un in union) {
            union1.push(union[un]);
        }
    }

    const handleOnblur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newObj = { ...applicant }
        // console.log(newObj);
        // let xx = newObj;
        // console.log(xx);
        newObj[field] = value;

        setApplicant(newObj);

    }
    // console.log(id);

    const handleAddUser = e => {
        fetch('http://localhost:5000/applicantCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(applicant)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert(`${data.insertedId} Your Application Seccessfully Submitted`)
                    setId(data.insertedId);
                    e.target.reset();
                }
            })

        e.preventDefault();
    }
    return (
        <div className='formWrapper'>
            <form onSubmit={handleAddUser}>

                <table cellSpacing="0" cellPadding="5" >
                    <tbody>
                        <tr>
                            <td>Name of the Post</td>
                            <td>:</td>
                            <td>
                                <select className='inputField' style={{ backgroundColor: '#bdbaba', width: '100%', outline: 'none' }} name="postName" id="postName" onBlur={handleOnblur}>
                                    <option value='select post'>Select a Post</option>
                                    <option value='Computer Operator'>Computer Operator</option>
                                    <option value='Steno Typist'>Steno Typist</option>
                                    <option value='LDA Computer Operator'>LDA Computer Operator</option>
                                    <option value='Driver'>Driver</option>
                                    <option value='Cleaner'>Cleaner</option>
                                    <option value='Data Analyst'>Data Analyst</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Applicant's Name</td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " name="applicantName" id="applicantName" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Father's Name</td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " name="fname" id="fname" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Mother's Name</td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " name="mname" id="mname" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px', width: '150px' }} name="gender" id="gender" onBlur={handleOnblur}>
                                    <option value='0'>Select Gender</option>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='Others'>Others</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Date of Birth</td>
                            <td>:</td>
                            <td>
                                <label htmlFor='date'> Day </label>
                                <select style={{ height: '25px', width: '120px', marginRight: '15px', textAlign: 'center' }} id='date' name="b_day" onBlur={handleOnblur}>
                                    <option value="select" defaultValue={"select"}>Select</option>
                                    <option value="01">01</option>
                                    <option value="02">02</option>
                                    <option value="03">03</option>
                                    <option value="04">04</option>
                                    <option value="05">05</option>
                                    <option value="06">06</option>
                                    <option value="07">07</option>
                                    <option value="08">08</option>
                                    <option value="09">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    <option value="30">30</option>
                                    <option value="31">31</option>
                                </select>
                                <label htmlFor='month'> Month </label>
                                <select style={{ height: '25px', width: '120px', marginRight: '15px' }} name="b_month" id="month" onBlur={handleOnblur}>
                                    <option value="select" defaultValue={"select"}>Select</option>
                                    <option value="January">01 - January</option>
                                    <option value="February">02 - February</option>
                                    <option value="March">03 - March</option>
                                    <option value="April">04 - April</option>
                                    <option value="May">05 - May</option>
                                    <option value="June">06 - June</option>
                                    <option value="July">07 - July</option>
                                    <option value="August">08 - August</option>
                                    <option value="September">09 - September</option>
                                    <option value="October">10 - October</option>
                                    <option value="November">11 - November</option>
                                    <option value="December">12 - December</option>
                                </select>
                                <label htmlFor="year"> Year </label>
                                <select name="b_year" id="year" style={{ height: '25px', width: '120px', float: 'right' }} onBlur={handleOnblur}>
                                    <option value="selected" defaultValue={"selected"}>Select</option>
                                    <option value="1976">1976</option>
                                    <option value="1977">1977</option>
                                    <option value="1978">1978</option>
                                    <option value="1979">1979</option>
                                    <option value="1980">1980</option>
                                    <option value="1981">1981</option>
                                    <option value="1982">1982</option>
                                    <option value="1983">1983</option>
                                    <option value="1984">1984</option>
                                    <option value="1985">1985</option>
                                    <option value="1986">1986</option>
                                    <option value="1987">1987</option>
                                    <option value="1988">1988</option>
                                    <option value="1989">1989</option>
                                    <option value="1990">1990</option>
                                    <option value="1991">1991</option>
                                    <option value="1992">1992</option>
                                    <option value="1993">1993</option>
                                    <option value="1994">1994</option>
                                    <option value="1995">1995</option>
                                    <option value="1996">1996</option>
                                    <option value="1997">1997</option>
                                    <option value="1998">1998</option>
                                    <option value="1999">1999</option>
                                    <option value="2000">2000</option>
                                    <option value="2001">2001</option>
                                    <option value="2002">2002</option>
                                    <option value="2003">2003</option>
                                    <option value="2004">2004</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Nationality</td>
                            <td>:</td>
                            <td>
                                <select style={{ height: '25px', width: '120px', marginRight: '10px' }} name="nationality" id="nationality" onBlur={handleOnblur}>
                                    <option>Bangladeshi</option>
                                    <option>Foreiner</option>
                                </select>
                                <label htmlFor='religion' style={{ marginLeft: '200px' }}> Religion </label>
                                <select id='religion' style={{ height: '25px', width: '120px', float: 'right' }} name="religion" onBlur={handleOnblur}>
                                    <option>Select Religion</option>
                                    <option value="Buddhism">Buddhism</option>
                                    <option value="Christianity">Christianity</option>
                                    <option value="Hinduism">Hinduism</option>
                                    <option value="Islam">Islam</option>
                                    <option value="Others">Others</option>

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>National ID</td>
                            <td>:</td>
                            <td><input className='inputField' type="number" placeholder=" " name="NID" id="NID" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Birth Registration No</td>
                            <td>:</td>
                            <td><input className='inputField' type="number" placeholder=" " name="b_reg" id="b_reg" onBlur={handleOnblur} /></td>
                        </tr>
                        <tr>
                            <td>Merital Status</td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px', width: '150px' }} name="m_status" id="m_status" onBlur={handleOnblur}>
                                    <option defaultValue='0'>Select Marital Status</option>
                                    <option value='Married'>Married</option>
                                    <option value='Single'>Single</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>Quota</td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px' }} name="quota" id="quota" onBlur={handleOnblur}>
                                    <option defaultValue='0'>Select One</option>
                                    <option value="Freedom Fighter">Freedom Fighter</option>
                                    <option value="Child of Freedom Fighter">Child of Freedom Fighter</option>
                                    <option value="Grand Child of Freedom Fighter">Grand Child of Freedom Fighter</option>
                                    <option value="Physically Handicapped">Physically Handicapped</option>
                                    <option value="Orphan">Orphan</option>
                                    <option value="Ethnic Minority">Ethnic Minority</option>
                                    <option value="Ansar-VDP">Ansar-VDP</option>
                                    <option value="Non Quota">Non Quota</option>

                                </select>
                            </td>
                        </tr>


                        <tr>
                            <td colSpan="3">
                                <table className='boxTable' style={{ width: '100%' }}>
                                    <tbody>
                                        <tr style={{ backgroundColor: '#dfdfdf' }}>
                                            {/* Mailing Address */}
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">Mailing Address</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Care of</td>
                                                            <td><input type="textarea" name="M_CareOf" id="M_CareOf" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Village/Town/Road</td>
                                                            <td><input type="textarea" name="M_Village" id="M_Village" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="M_District" id="M_District" onBlur={handleOnblur} onChange={e => setDist(e.target.value)}>
                                                                    <option value="0" >Select District</option>
                                                                    {
                                                                        m_dist.map(d => <option key={d} value={d} >{d}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Upzilla</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="M_Upzilla" id="M_Upzilla" onBlur={handleOnblur}>
                                                                    <option value="0">Select Upzilla</option>
                                                                    {
                                                                        m_upzilla.map(u => <option key={u} value={u}>{u}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Office</td>
                                                            <td><input type="text" name="M_POffice" id="M_POffice" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Code</td>
                                                            <td><input type="number" name="M_PCode" id="M_PCode" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{ width: '2%', backgroundColor: '#dfdfdf' }}> </td>
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">
                                                                Permanent Address
                                                                <input type="checkbox" id="p_chk" name="p_chk" />
                                                                <label htmlFor='p_chk'><small>same as present address</small></label>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Care of</td>
                                                            <td><input type="text" name="P_CareOf" id="P_CareOf" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Village/Town/Road</td>
                                                            <td><input type="text" name="P_Village" id="P_Village" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="P_District" id="P_District" onBlur={handleOnblur} onChange={e => setDist2(e.target.value)}>
                                                                    <option value="0" >Select District</option>
                                                                    {
                                                                        p_dist.map(d => <option key={d} value={d} >{d}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Upzilla</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="P_Upzilla" id="P_Upzilla" onBlur={handleOnblur}>
                                                                    <option value="0">Select Upzilla</option>
                                                                    {
                                                                        p_upzilla.map(u => <option key={u} value={u}>{u}</option>)
                                                                    }
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Office</td>
                                                            <td><input type="text" name="P_POffice" id="P_POffice" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Code</td>
                                                            <td><input type="number" name="P_PCode" id="P_PCode" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>

                        </tr>
                        <tr>
                            <td>Mobile Number</td>
                            <td>:</td>
                            <td><input type='number' name="p_number" id="p_number" onBlur={handleOnblur} /> <small style={{ color: 'red', lineHeight: '.5' }}> *plz mention a mobile number for getting info</small></td>
                        </tr>
                        <tr>
                            <td>Confirm Mobile</td>
                            <td>:</td>
                            <td><input type='number' name="cp_number" id="cp_number" onBlur={handleOnblur} /> <small>plz retype mobile number</small></td>
                        </tr>
                        <tr>
                            <td>Email Address</td>
                            <td>:</td>
                            <td><input type='email' className='inputField' name="email" id="email" onBlur={handleOnblur} /></td>
                        </tr>
                        {/* academic qualification  */}
                        <tr>
                            <td colSpan="3">
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        <tr style={{ backgroundColor: '#dfdfdf' }}>
                                            {/* SSC or Equivalent */}
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">SSC or Equivalent Level</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Examination</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="exam1" id="exam1" onBlur={handleOnblur}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="1">S.S.C</option>
                                                                    <option value="2">Dakhil</option>
                                                                    <option value="3">S.S.C Vocational</option>
                                                                    <option value="4">O Level/Cambridge</option>
                                                                    <option value="5">S.S.C Equivalent</option>
                                                                    <option value="6">Dakhil Vocational</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Board</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="board1" id="board1" onBlur={handleOnblur}>
                                                                    <option value="0">Select One</option>
                                                                    <option value="1">Dhaka</option>
                                                                    <option value="2">Cumilla</option>
                                                                    <option value="3">Rajshahi</option>
                                                                    <option value="4">Jashore</option>
                                                                    <option value="5">Chittagong</option>
                                                                    <option value="6">Barishal</option>
                                                                    <option value="7">Sylhet</option>
                                                                    <option value="8">Dinajpur</option>
                                                                    <option value="9">Madrasah</option>
                                                                    <option value="10">Open University</option>
                                                                    <option value="11">Mymensingh</option>
                                                                    <option value="12">The State Medical Faculty of Bangladesh</option>
                                                                    <option value="14">Pharmacy Council of Bangladesh</option>
                                                                    <option value="15">Cambridge International - IGCE</option>
                                                                    <option value="16">Edexcel International</option>
                                                                    <option value="17">Bangladesh Technical Education Board (BTEB)</option>
                                                                    <option value="20">Others</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Roll No</td>
                                                            <td><input type="text" name="roll1" id="roll1" onBlur={handleOnblur} /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Result</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="result1" id="result1" onBlur={handleOnblur}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="1">1st Division</option>
                                                                    <option value="2">2nd Division</option>
                                                                    <option value="3">3rd Division</option>
                                                                    <option value="4">GPA(out of 4)</option>
                                                                    <option value="5">GPA(out of 5)</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Group/Subject</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="subject1" id="subject1" onBlur={handleOnblur}>
                                                                    <option value="0">Select One</option>
                                                                    <option value="1">Science</option>
                                                                    <option value="2">Humanities</option>
                                                                    <option value="3">Business Studies</option>
                                                                    <option value="12">Agriculture Technology</option>
                                                                    <option value="13">Architecture and Interior Design Technology</option>
                                                                    <option value="15">Automobile Technology</option>
                                                                    <option value="16">Civil Technology</option>
                                                                    <option value="20">Computer Science & Technology</option>
                                                                    <option value="21">Chemical Technology</option>
                                                                    <option value="22">Electrical Technology</option>
                                                                    <option value="23">Data Telecommunication and Network Technology</option>
                                                                    <option value="24">Electrical and Electronics Technology</option>
                                                                    <option value="27">Environmental Technology</option>
                                                                    <option value="31">Instrumentation & Process Control Technology</option>
                                                                    <option value="32">Mechanical Technology</option>
                                                                    <option value="34">Mechatronics Technology</option>
                                                                    <option value="36">Power Technology</option>
                                                                    <option value="38">Refregeration & Air Conditioning Technology</option>
                                                                    <option value="41">Telecommunication Technology</option>
                                                                    <option value="42">Electronics Technology</option>
                                                                    <option value="43">Library Science</option>
                                                                    <option value="44">Survey</option>
                                                                    <option value="45">General Mechanics</option>
                                                                    <option value="46">Firm Machinery</option>
                                                                    <option value="47">Textile Technology</option>
                                                                    <option value="51">Agro-Based Food</option>
                                                                    <option value="52">General Electronics</option>
                                                                    <option value="53">Automotive</option>
                                                                    <option value="54">Building Maintenance</option>
                                                                    <option value="55">Wood Working</option>
                                                                    <option value="56">Ceramic</option>
                                                                    <option value="57">Civil Construction</option>
                                                                    <option value="58">Computer and Information Technology</option>
                                                                    <option value="59">Civil Drafting with CAD</option>
                                                                    <option value="60">Mechanical Drafting with CAD</option>
                                                                    <option value="61">Dress Making</option>
                                                                    <option value="62">Dyeing, Printing and Finishing</option>
                                                                    <option value="63">Electrical Maintenance Works</option>
                                                                    <option value="64">Farm Machinery</option>
                                                                    <option value="65">Fish Culture and Breeding</option>
                                                                    <option value="66">Food Processing and Preservation</option>
                                                                    <option value="67">General Mechanics</option>
                                                                    <option value="68">Livestock Rearing and Farming</option>
                                                                    <option value="69">Machine Tools Operation</option>
                                                                    <option value="70">Poultry Rearing and Farming</option>
                                                                    <option value="71">Patient Care</option>
                                                                    <option value="72">General Electrical Works</option>
                                                                    <option value="73">Plumbing and Pipe Fittings</option>
                                                                    <option value="74">Refrigeration and Air Conditioning</option>
                                                                    <option value="75">Glass</option>
                                                                    <option value="76">Flower, Fruit and Vegetable Cultivation</option>
                                                                    <option value="77">Weaving</option>
                                                                    <option value="78">Welding and Fabrication</option>
                                                                    <option value="79">Architectural Drafting with CAD</option>
                                                                    <option value="80">Knitting</option>
                                                                    <option value="81">Shrimp Culture and Breeding</option>
                                                                    <option value="99">Others</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Passing Year</td>
                                                            <td>
                                                                <select style={{ width: '100%' }} name="year1" id="year1" onBlur={handleOnblur}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="1984">1984</option>
                                                                    <option value="1985">1985</option>
                                                                    <option value="1986">1986</option>
                                                                    <option value="1987">1987</option>
                                                                    <option value="1988">1988</option>
                                                                    <option value="1989">1989</option>
                                                                    <option value="1990">1990</option>
                                                                    <option value="1991">1991</option>
                                                                    <option value="1992">1992</option>
                                                                    <option value="1993">1993</option>
                                                                    <option value="1994">1994</option>
                                                                    <option value="1995">1995</option>
                                                                    <option value="1996">1996</option>
                                                                    <option value="1997">1997</option>
                                                                    <option value="1998">1998</option>
                                                                    <option value="1999">1999</option>
                                                                    <option value="2000">2000</option>
                                                                    <option value="2001">2001</option>
                                                                    <option value="2002">2002</option>
                                                                    <option value="2003">2003</option>
                                                                    <option value="2004">2004</option>
                                                                    <option value="2005">2005</option>
                                                                    <option value="2006">2006</option>
                                                                    <option value="2007">2007</option>
                                                                    <option value="2008">2008</option>
                                                                    <option value="2009">2009</option>
                                                                    <option value="2010">2010</option>
                                                                    <option value="2011">2011</option>
                                                                    <option value="2012">2012</option>
                                                                    <option value="2013">2013</option>
                                                                    <option value="2014">2014</option>
                                                                    <option value="2015">2015</option>
                                                                    <option value="2016">2016</option>
                                                                    <option value="2017">2017</option>
                                                                    <option value="2018">2018</option>
                                                                    <option value="2019">2019</option>
                                                                    <option value="2020">2020</option>
                                                                    <option value="2021">2021</option>
                                                                    <option value="2022">2022</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{ width: '2%', backgroundColor: '#dfdfdf' }}> </td>
                                            {/* HSC or Equivalent */}
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">HSC or Equivalent Level</td>
                                                        </tr>

                                                        <tr>
                                                            <td>Examination</td>
                                                            <td>
                                                                <select style={{ width: '100%' }}>
                                                                    <option value="0" >Select One</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Board</td>
                                                            <td>
                                                                <select style={{ width: '100%' }}>
                                                                    <option>Select One</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Roll No</td>
                                                            <td><input type="text" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Result</td>
                                                            <td>
                                                                <select style={{ width: '100%' }}>
                                                                    <option value="0" >Select One</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Group/Subject</td>
                                                            <td>
                                                                <select style={{ width: '100%' }}>
                                                                    <option value="0" >Select One</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Passing Year</td>
                                                            <td>
                                                                <select style={{ width: '100%' }}>
                                                                    <option value="0" >Select One</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                        {/* gratuation or Equivalent level  */}

                        <tr>
                            <td colSpan="3">
                                <table style={{ width: '100%' }}>
                                    <tbody>
                                        {/* graduation and Equivalent level  */}
                                        <tr style={{ backgroundColor: '#dfdfdf' }}>

                                            <td style={{ width: '100%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="5">Gratuation/Equivalent Level</td>
                                                        </tr>

                                                        <tr>
                                                            <td style={{ width: '23%' }}>Examination</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="BSC" >B.Sc In Computer Science Engineering</option>

                                                                </select>
                                                            </td>
                                                            <td></td>

                                                            <td style={{ width: '23%' }}>Result</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }}>
                                                                    <option value="0" >Select One</option>

                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{ width: '23%' }}>Subject/Degree</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }}>
                                                                    <option>Select One</option>

                                                                </select>
                                                            </td>
                                                            <td></td>
                                                            <td style={{ width: '23%' }}>Passing Year</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }}>
                                                                    <option>Select One</option>

                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>University/Institution</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }}>
                                                                    <option>Select One</option>

                                                                </select>
                                                            </td>

                                                            <td style={{ width: '2%' }}></td>
                                                            <td>Course Duration</td>
                                                            <td style={{ width: '25%' }}>
                                                                <select style={{ width: '100%' }}>
                                                                    <option>Select One</option>
                                                                    <option>Web Development</option>

                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <table cellPadding="5">
                                                    <tbody>
                                                        <tr style={{ backgroundColor: '#bfdfbf' }}>
                                                            <td colSpan="5">Departmental Candidate Status
                                                                <select style={{ marginLeft: '80px', width: '200px' }}>
                                                                    <option>Select One</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>


                                        {/* photo and signature */}
                                        <tr>
                                            <td colSpan="3">
                                                <table style={{ width: '100%' }}>
                                                    <tbody>
                                                        <tr style={{ backgroundColor: '#dfdfdf' }}>
                                                            {/* SSC or Equivalent */}
                                                            <td style={{ width: '48%' }}>
                                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan="2">Upload Photo <small style={{ color: 'red' }}>*(300 x 300 Pixel JPG/PNG)</small></td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td colSpan='2'>
                                                                                <input type='file' />
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                            <td style={{ width: '2%', backgroundColor: '#dfdfdf' }}> </td>
                                                            {/* HSC or Equivalent */}
                                                            <td style={{ width: '48%' }}>
                                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td colSpan="2">Upload Signature <small style={{ color: 'red' }}>*(120 x 80 Pixel JPG/PNG)</small></td>
                                                                        </tr>

                                                                        <tr>
                                                                            <td colSpan='2'>
                                                                                <input type='file' />
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <br /><br /><br />
                <input type="submit" value="Submit" style={{ padding: '10px 20px', marginBottom: '20px' }} />

                <Link to={`/admitCard/${id}`}>chk</Link>
                <p>{id}</p>

            </form>
        </div>
    );
};

export default ApplicationForm;