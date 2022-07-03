import React, { useRef } from 'react';
import './ApplicationForm.css';

const ApplicationForm = () => {
    const postRef = useRef();
    const nameRef = useRef();
    const fnameRef = useRef();
    const mnameRef = useRef();
    const genderRef = useRef();
    const dobDateRef = useRef();
    const dobMonthRef = useRef();
    const dobYearRef = useRef();
    const nationalityRef = useRef();
    const religionRef = useRef();
    const nidRef = useRef();
    const bregRef = useRef();
    const maritalRef = useRef();
    const quotaRef = useRef();

    const emailRef = useRef();
    const courseRef = useRef();
    // const birthDayRef = useRef();
    // const uploadFile = useRef();

    var distObject = {
        "Bhola": {
            "Charfassion": ["Bhola Sadar", "Burhanuddin", "Lalmohon", "Charfassion"],
            "Bhola Sadar": ["Borders", "Margins", "Backgrounds", "Float"],
            "Burhanuddin": ["Variables", "Operators", "Functions", "Conditions"],
            "Lalmohon": ["Variables", "Operators", "Functions", "Conditions"],
            "Dowlotkhan": ["Variables", "Operators", "Functions", "Conditions"]
        },
        "Dhaka": {
            "Mirpur": ["Variables", "Strings", "Arrays"],
            "Mohammadpur": ["SELECT", "UPDATE", "DELETE"]
        }
    }
    window.onload = function () {
        var districtSel = document.getElementById("district");
        var upzillaSel = document.getElementById("upzilla");
        // var upzillaSel = document.getElementById("upzilla");
        for (var x in distObject) {
            districtSel.options[districtSel.options.length] = new Option(x, x);
        }
        districtSel.onchange = function () {
            //empty upzillas- and upzillas- dropdowns
            // upzillaSel.length = 1;
            upzillaSel.length = 1;
            //display correct values
            for (var y in distObject[this.value]) {
                upzillaSel.options[upzillaSel.options.length] = new Option(y, y);
            }
        }

    }

    const handleAddUser = e => {
        const post = postRef.current.value;
        const name = nameRef.current.value;
        const fname = fnameRef.current.value;
        const mname = mnameRef.current.value;
        const gender = genderRef.current.value;
        const dobDate = dobDateRef.current.value;
        const dobMonth = dobMonthRef.current.value;
        const dobYear = dobYearRef.current.value;
        const nationality = nationalityRef.current.value;
        const religion = religionRef.current.value;
        const nid = nidRef.current.value;
        const breg = bregRef.current.value;
        const maritalStatus = maritalRef.current.value;
        const quota = quotaRef.current.value;
        const email = emailRef.current.value;
        const course = courseRef.current.value;
        // const birthday = birthDayRef.current.value;
        // const upload = uploadFile.current.value;

        const newUser = { post, name, fname, mname, gender, dobDate, dobMonth, dobYear, nationality, religion, nid, breg, maritalStatus, quota, email, course };
        fetch('http://localhost:5000/userCollection', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Seccessfully Recorded')
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
                                <select className='inputField' style={{ backgroundColor: '#bdbaba', width: '100%', outline: 'none' }} ref={postRef}>
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
                            <td><input className='inputField' type="text" ref={nameRef} placeholder=" " /></td>
                        </tr>
                        <tr>
                            <td>Father's Name</td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " ref={fnameRef} /></td>
                        </tr>
                        <tr>
                            <td>Mother's Name</td>
                            <td>:</td>
                            <td><input className='inputField' type="text" placeholder=" " ref={mnameRef} /></td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px', width: '150px' }} ref={genderRef}>
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
                                <select style={{ height: '25px', width: '120px', marginRight: '15px', textAlign: 'center' }} id='date' ref={dobDateRef}>
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
                                <select style={{ height: '25px', width: '120px', marginRight: '15px' }} name="month" id="month" ref={dobMonthRef}>
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
                                <select name="year" id="year" ref={dobYearRef} style={{ height: '25px', width: '120px', float: 'right' }}>
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
                                <select style={{ height: '25px', width: '120px', marginRight: '10px' }} ref={nationalityRef}>
                                    <option>Bangladeshi</option>
                                    <option>Foreiner</option>
                                </select>
                                <label htmlFor='religion' style={{ marginLeft: '200px' }}> Religion </label>
                                <select id='religion' style={{ height: '25px', width: '120px', float: 'right' }}>
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
                            <td><input className='inputField' type="number" placeholder=" " ref={nidRef} /></td>
                        </tr>
                        <tr>
                            <td>Birth Registration No</td>
                            <td>:</td>
                            <td><input className='inputField' type="number" placeholder=" " ref={bregRef} /></td>
                        </tr>
                        <tr>
                            <td>Merital Status</td>
                            <td>:</td>
                            <td>
                                <select style={{ padding: '3px', width: '150px' }} ref={maritalRef}>
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
                                <select style={{ padding: '3px' }} ref={quotaRef}>
                                    <option defaultValue='0'>Select One</option>
                                    <option value="Freedom Fighter">Freedom Fighter</option>
                                    <option value="Child of Freedom Fighter">Child of Freedom Fighter</option>
                                    <option value="3Grand Child of Freedom Fighter">Grand Child of Freedom Fighter</option>
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
                                                            <td><input type="textarea" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Village/Town/Road</td>
                                                            <td><input type="textarea" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>
                                                                <select style={{ width: '100%' }}>
                                                                    <option value="0" >Select One</option>
                                                                    <option value="26">Bagerhat</option>
                                                                    <option value="64">Bandarban</option>
                                                                    <option value="32">Barguna</option>
                                                                    <option value="29">Barishal</option>
                                                                    <option value="30">Bhola</option>
                                                                    <option value="10">Bogura</option>
                                                                    <option value="54">Brahmanbaria</option>
                                                                    <option value="56">Chandpur</option>
                                                                    <option value="13">Chapai Nawabganj</option>
                                                                    <option value="60">Chattogram</option>
                                                                    <option value="19">Chuadanga</option>
                                                                    <option value="61">Cox`s Bazar</option>
                                                                    <option value="55">Cumilla</option>
                                                                    <option value="40">Dhaka</option>
                                                                    <option value="03">Dinajpur</option>
                                                                    <option value="45">Faridpur</option>
                                                                    <option value="59">Feni</option>
                                                                    <option value="08">Gaibandha</option>
                                                                    <option value="41">Gazipur</option>
                                                                    <option value="47">Gopalganj</option>
                                                                    <option value="53">Habiganj</option>
                                                                    <option value="09">Jaipurhat</option>
                                                                    <option value="36">Jamalpur</option>
                                                                    <option value="23">Jashore</option>
                                                                    <option value="28">Jhalokhathi</option>
                                                                    <option value="20">Jhenaidah</option>
                                                                    <option value="62">Khagrachhari</option>
                                                                    <option value="25">Khulna</option>
                                                                    <option value="38">Kishorganj</option>
                                                                    <option value="07">Kurigram</option>
                                                                    <option value="17">Kushtia</option>
                                                                    <option value="05">Lalmonirhat</option>
                                                                    <option value="57">Luxmipur</option>
                                                                    <option value="48">Madaripur</option>
                                                                    <option value="21">Magura</option>
                                                                    <option value="39">Manikganj</option>
                                                                    <option value="18">Meharpur</option>
                                                                    <option value="52">Mouluvibazar</option>
                                                                    <option value="44">Munshiganj</option>
                                                                    <option value="34">Mymensingh</option>
                                                                    <option value="11">Naogaon</option>
                                                                    <option value="22">Narail</option>
                                                                    <option value="43">Narayanganj</option>
                                                                    <option value="42">Narsingdi</option>
                                                                    <option value="12">Natore</option>
                                                                    <option value="33">Netrokona</option>
                                                                    <option value="04">Nilphamari</option>
                                                                    <option value="58">Noakhali</option>
                                                                    <option value="16">Pabna</option>
                                                                    <option value="01">Panchagarh</option>
                                                                    <option value="31">Patuakhali</option>
                                                                    <option value="27">Pirojpur</option>
                                                                    <option value="46">Rajbari</option>
                                                                    <option value="14">Rajshahi</option>
                                                                    <option value="63">Rangamati</option>
                                                                    <option value="06">Rangpur</option>
                                                                    <option value="24">Satkhira</option>
                                                                    <option value="49">Shariatpur</option>
                                                                    <option value="35">Sherpur</option>
                                                                    <option value="15">Sirajganj</option>
                                                                    <option value="50">Sunamganj</option>
                                                                    <option value="51">Sylhet</option>
                                                                    <option value="37">Tangail</option>
                                                                    <option value="02">Thakurgaon</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Upzilla</td>
                                                            <td>
                                                                <select style={{ width: '100%' }}>
                                                                    <option>Select One</option>
                                                                    <option>Charfassion</option>
                                                                    <option>Bhola</option>
                                                                    <option>Burhanuddin</option>
                                                                    <option>Lalmohon</option>
                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Office</td>
                                                            <td><input type="text" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Code</td>
                                                            <td><input type="number" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                            <td style={{ width: '2%', backgroundColor: '#dfdfdf' }}> </td>
                                            <td style={{ width: '48%' }}>
                                                <table cellPadding="5" style={{ width: '100%', border: '1px solid #99C1D0' }}>
                                                    <tbody>

                                                        <tr>
                                                            <td colSpan="2">Permanent Address</td>
                                                        </tr>
                                                        <tr>
                                                            <td>Care of</td>
                                                            <td><input type="text" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Village/Town/Road</td>
                                                            <td><input type="text" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>District</td>
                                                            <td>
                                                                <select id='district' style={{ width: '100%' }}>
                                                                    <option value="" >Select District</option>

                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Upzilla</td>
                                                            <td>
                                                                <select id='upzilla' style={{ width: '100%' }}>
                                                                    <option value="" >Select Upzilla</option>

                                                                </select>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Office</td>
                                                            <td><input type="text" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td>Post Code</td>
                                                            <td><input type="number" /></td>
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
                            <td><input type='number' /> <small style={{ color: 'red', lineHeight: '.5' }}> *plz mention a mobile number for getting info</small></td>
                        </tr>
                        <tr>
                            <td>Confirm Mobile</td>
                            <td>:</td>
                            <td><input type='number' /> <small>plz retype mobile number</small></td>
                        </tr>
                        <tr>
                            <td>Email Address</td>
                            <td>:</td>
                            <td><input type='email' className='inputField' /></td>
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
                <input type="email" ref={emailRef} placeholder="Enter your email" /><br />
                <input type="radio" ref={courseRef} id="html" name="fav_language" value="HTML" />
                <label htmlFor="html">HTML</label>
                <input type="radio" ref={courseRef} id="css" name="fav_language" value="CSS" />
                <label htmlFor="css">CSS</label>
                <input type="radio" ref={courseRef} id="javascript" name="fav_language" value="JavaScript" />
                <label htmlFor="javascript">JavaScript</label> <br />

                <label>Date of Birth </label>

                <label htmlFor="month">Month</label>

                <br />
                <label htmlFor="birthday">Birthday:</label>
                <input type="date" id="birthday" name="birthday" ></input><br />
                <input type="file" />

                <br /><br /><br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default ApplicationForm;