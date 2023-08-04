import './AffReg.css';
import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AffContext } from '../shared/context/AffContext';
import CustomInput from '../shared/components/FormElements/CustomInput';
import CustomButton from '../shared/components/FormElements/CustomButton';
import { CustomUseForm } from '../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_YOUTUBETWITCH } from '../shared/util/validators';
import AffRegTextFieldProps from './components/AffRegTextFieldProps';
import AffTNC from './components/AffRegTNC';
import CustomCheckbox from '../shared/components/FormElements/CustomCheckbox';

const AffReg = ({ sucPost }) => {
  const [isTncChecked, setIsTncChecked] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');
  const { fetchUserAff } = useContext(AffContext);
  const { affFormPosted, setAffFormPosted, loading, affState, setAffState } =
    useContext(AffContext);

  const navigate = useNavigate();

  const handleTncCheckbox = () => {
    setIsTncChecked((prevState) => !prevState);
  };

  useEffect(() => {
    fetchUserAff;
    setAffState(2);
  }, []);

  const [formState, inputHandler, setFormData, resetForm] = CustomUseForm(
    {
      channelUrl: {
        value: '',
        isValid: false,
      },
      email: {
        value: '',
        isValid: false,
      },
    },
    false,
  );

  const AffRegTextFieldList = AffRegTextFieldProps.map((data) => {
    return (
      <CustomInput
        key={data.key}
        element='input'
        id={data.id}
        type={data.type}
        label={data.label}
        validators={data.type === 'email' ? [VALIDATOR_EMAIL()] : [VALIDATOR_YOUTUBETWITCH()]}
        errorText={data.errorText}
        onInput={inputHandler}
        reset={formState.reset}
      />
    );
  });

  const submitAffRegForm = async (event) => {
    event.preventDefault();
    if (formState.inputs.channelUrl.isValid && formState.inputs.email.isValid && isTncChecked) {
      try {
        const affRegistrationResponse = await fetch(
          `${import.meta.env.VITE_API_PATH}/api/affiliations/`,
          {
            method: 'POST',
            credentials: 'include',
            headers: {
              Accept: 'application/json',
              'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
              affChannelURL: formState.inputs.channelUrl.value,
              affEmail: formState.inputs.email.value,
            }),
          },
        );

        if (affRegistrationResponse.status === 201) {
          navigate('/affiliation-suc');
        } else {
          const resJson = await affRegistrationResponse.json();
          console.log(resJson.message);
          setResponseMsg(resJson.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      setResponseMsg('Invalid input found or the T&C checkbox has not been checked.');
    }
  };

  return (
    <div className='affreg font-dmsans'>
      <form className='affreg--form' onSubmit={submitAffRegForm}>
        <div className='affreg--block'>
          <h4 className='text-lg'>
            Please fill in the below form to register for the affiliation program.
          </h4>
          <div className='affreg--textfield'>{AffRegTextFieldList}</div>
          <AffTNC />
          <CustomCheckbox
            id='tncCheckbox'
            label='By clicking on the below Register button, I agree on the above Terms and Conditions.'
            handleClicked={handleTncCheckbox}
          />
        </div>
        <div className='affreg--button'>
          <CustomButton type='submit' disabled={!formState.isValid || !isTncChecked}>
            SUBMIT
          </CustomButton>
          <CustomButton type='reset' inverse onClick={resetForm}>
            RESET
          </CustomButton>
        </div>
        {responseMsg && <p className='error--msg'>{responseMsg}</p>}
      </form>
    </div>
  );
};

export default AffReg;
