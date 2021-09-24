import React from 'react'
import {
  CCard,
  CCardHeader,
  CCardBody,
  CFormGroup,
  CCol,
  CLabel,
  CInputFile,
  CRow,
  CInput,
  CSelect,
  CInputRadio,
  CSwitch
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

const CriarTestes = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          <h4>Upload de scripts</h4>
          <DocsLink href="https://coreui.io/docs/content/typography/" />          
          <p>Envie os arquivos necessários para executar o teste.</p>
        </CCardHeader>
        <CCardBody>
          <CRow>
          <CCol></CCol>
          <CCol><CFormGroup>
                <CCol>
                </CCol>
                <CCol >
                  <CInputFile
                    id="file-multiple-input"
                    name="file-multiple-input"
                    multiple
                    custom
                  />
                  <CLabel htmlFor="file-multiple-input" variant="custom-file">
                    Upload a Jmeter, Gatling ou Selenium script
                  </CLabel>
                </CCol>
              </CFormGroup></CCol>
          <CCol></CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <CCardHeader>
        <h4>Informações</h4>
        <p>Preencha os dados do teste.</p>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol>
              <CFormGroup>
                <CLabel htmlFor="company">Titulo</CLabel>
                <CInput id="company" placeholder="Titulo..." />
              </CFormGroup>
            </CCol>
            <CCol>
              <CFormGroup>
                <CLabel htmlFor="company">Zona</CLabel>
                <CInput id="company" placeholder="Zona..." />
              </CFormGroup>
            </CCol>
          </CRow>
          <CFormGroup>
            <CLabel htmlFor="company">Descrição do teste</CLabel>
            <CInput id="company" placeholder="Descrição..." />
          </CFormGroup>

          <CRow>
            <CCol>
              <CFormGroup>
                <CLabel htmlFor="company">Quantidade de Slave PODs</CLabel>
                <CInput id="company" placeholder="(slider não suportado)" />
              </CFormGroup>
            </CCol>
            <CCol>
              <CFormGroup>
                <CLabel htmlFor="company">Quantidade máxima de usuários por execução</CLabel>
                <CInput id="company" placeholder="(slider não suportado)" />
              </CFormGroup>
            </CCol>
          </CRow>
          <CRow>
            <CCol><CLabel htmlFor="company">Data da execução</CLabel>
              <CInput type="date" id="date-input" name="date-input" placeholder="date" /></CCol>
            <CCol><CLabel htmlFor="ccmonth">Hora</CLabel>
              <CSelect custom name="ccmonth" id="ccmonth">
                <option value="0">00</option>
                <option value="1">01</option>
                <option value="1">02</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </CSelect></CCol>

            <CCol><CLabel htmlFor="ccmonth">Minuto</CLabel>
              :<CSelect custom name="ccmonth" id="ccmonth">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </CSelect></CCol>
            <CCol></CCol>
            <CCol></CCol>
            <CCol></CCol>

          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        <div className="card-header">
        <h4>Clusters</h4>
          <p>Selecione ou crie um novo cluster para ser usado no teste.</p>
        </div>
        <div className="card-body">
          <div className="bd-example bd-example-type">
            <table className="table">
              <tbody>
                <CRow>
                  <CCol>
                    <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio1" name="inline-radios" value="option1" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio1">Primeiro cluster exemplo</CLabel>
                  </CFormGroup>
                  <CCol>192.168.0.1 - us-east.azure</CCol>
                  </CCol>

                  <CCol>
                    <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio2" name="inline-radios" value="option2" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio2">Segundo cluster exemplo</CLabel>
                  </CFormGroup>
                  <CCol>127.0.0.1 - br-sp.aws</CCol>
                  </CCol>
                </CRow>
          <br></br>
                <CRow>
                <CCol>
                    <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio3" name="inline-radios" value="option3" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio3">Terceiro cluster exemplo</CLabel>
                  </CFormGroup>
                  <CCol>255.255.255.1 - us-east.azure</CCol>
                  </CCol>

                  <CCol>
                    <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio4" name="inline-radios" value="option4" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio4">Quarto cluster exemplo</CLabel>
                  </CFormGroup>
                  <CCol>localhost - br-sp.aws</CCol>
                  </CCol>
                </CRow>
                <br></br>

                <CRow>
                <CCol>
                    <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio5" name="inline-radios" value="option5" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio5">Quinto cluster exemplo</CLabel>
                  </CFormGroup>
                  <CCol>177.28.120.55 - us-east.azure</CCol>
                  </CCol>

                  <CCol>
                    <CFormGroup variant="custom-radio" inline>
                    <CInputRadio custom id="inline-radio6" name="inline-radios" value="option6" />
                    <CLabel variant="custom-checkbox" htmlFor="inline-radio6">Sexto cluster exemplo</CLabel>
                  </CFormGroup>
                  <CCol>127.0.0.1 - br-sp.aws</CCol>
                  </CCol>
                </CRow>
              </tbody>
            </table>
          </div>
        </div>
      </CCard>
      <CCard>
        <CCardHeader>
        <h4>Configurações</h4>
          <p>Opções do teste.</p>
        </CCardHeader>
        <CCardBody>
        <CRow>
          <CCol><h6>Titulo de uma configuração</h6>
          <CCol>Descrição dessa configuração</CCol>
          </CCol>
          <CCol></CCol>
          <CCol><CSwitch className={'mx-1'} shape={'pill'} color={'primary'} defaultChecked /></CCol>
        </CRow>
        <br></br>
        <CRow>
          <CCol><h6>Titulo de outra configuração</h6>
          <CCol>Descrição dessa configuração</CCol>
          </CCol>
          <CCol></CCol>
          <CCol><CSwitch className={'mx-1'} shape={'pill'} color={'primary'}  /></CCol>
        </CRow>
        <br></br>
        <CRow>
          <CCol><h6>Titulo de mais outra configuração</h6>
          <CCol>Descrição dessa configuração</CCol>
          </CCol>
          <CCol></CCol>
          <CCol><CSwitch className={'mx-1'} shape={'pill'} color={'primary'} defaultChecked /></CCol>
        </CRow>
        <br></br>
        <CRow>
          <CCol><h6>Titulo de uma última configuração</h6>
          <CCol>Descrição dessa configuração</CCol>
          </CCol>
          <CCol></CCol>
          <CCol><CSwitch className={'mx-1'} shape={'pill'} color={'primary'}  /></CCol>
        </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CriarTestes
