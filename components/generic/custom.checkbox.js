import React,{useState} from 'react';
import styled from 'styled-components';
export default function CustomCheckBox(props) {
    const {label} = props;
    const [checked, setChecked] = useState(false)
    const handleChange = () =>{
        setChecked(!checked)
    }
    return (
        <CheckBox>                                                                                                                                             <div className="border" onClick={handleChange}>     
                 {
                     checked ?  <img src="/assets/check.svg"/> : null
                 }
            </div>
            <div className="label">
                {label}
            </div>
        </CheckBox>
    )
}
const CheckBox  = styled.div`
cursor: pointer;
display:flex;
align-items:center;
.border{
    width:30px;
    height:30px;
    border-radius:6px;
    background: #1E2128;
    box-shadow: inset 0px 6px 10px rgba(0, 0, 0, 0.1), inset 0px -2px 2px rgba(255, 255, 255, 0.07), inset 0px 2px 15px rgba(0, 0, 0, 0.3);
    display:flex;
    align-items:center;
    justify-content:center;
    img{
        width:20px;
        height:20px;
    }
}

.label{
    color:#A8B2CA;
    font-size:17px;
    padding-left:20px;
}

`