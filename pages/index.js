import styled from 'styled-components';
import Assets from './assets';
import Profile from './profile';
import VisualNovel from './visualnovel';
import Stories from './visualnovel/stories';
import LoginScreen from './login.screen1';
import ForgetPassword from './login.screen2';
import SignUp from './login.screen3';
import VerificationStories from './login.screen4';
import BaseLayout from '../components/layouts/base.layout';
import HomePage from '../components/Home/home';
export default function Home() {
  return (
    <Wrapper >
     <BaseLayout>
     <HomePage/>
      {/* <Assets/> */}
      {/* <Profile/> */}
      {/* <LoginScreen/> */}
      {/* <Stories/> */}
      {/* <ForgetPassword/> */}
      {/* <SignUp/> */}
      {/* <VerificationStories/> */}
      
      </BaseLayout>
    </Wrapper>
  )
}
const Wrapper = styled.div`

background-color: #1E2128;
width: 100%;
height: 100%;

`