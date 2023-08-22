import undrawSVG from '../assets/undraw_authentication_re_svpt.svg'
import styled from 'styled-components'
import LoginForm from './LoginForm'

const Main = styled.main`
    display: flex;
    flex-direction: row;

`
const SVG = styled.div`
    width : 50dvw;
    height: 100vh;
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 1000px) {
        display: none;
    }

`

const Img = styled.div`
    width: 25rem; 
    height: 30rem;
    
    .svg{
        width: 100%; 
        height: 100%;

    }
`

function LoginPage() {
    return (
        <Main>
            <SVG>
                <Img>
                    <img
                        src={undrawSVG}
                        alt='Undraw svg'
                        className='svg'
                    />
                </Img>
            </SVG>

            <LoginForm>

            </LoginForm>

        </Main>
    )
}

export default LoginPage