import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import sideImg from './LoginSide.png'

const Login = () => {
  return (
    
    <div className="c-app c-default-layout flex-row align-items-center">
       <img src={sideImg} className="sideImg"></img>
      
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>          
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Fazer login</h1>
                    <br></br>
                    <br></br>
                    <br></br>
                    <CButton block variant="outline" color="info">Continuar com o Google</CButton>
                    <div class="teste2 linha">ou</div>
                    <CInputGroup className="mb-3">
                      <CInput type="text" placeholder="E-mail" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">

                      <CInput type="password" placeholder="Senha" autoComplete="current-password" />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton color="primary" className="px-4">Login</CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="link" className="px-0">Esqueci minha senha</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
