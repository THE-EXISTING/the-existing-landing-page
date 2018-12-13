import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  height: 256px;
  display: flex;
  align-items: center;
`

const FooterBG = styled.img`
  position: absolute;
  opacity: 0.3;
  height: 100%;
  width: 100%;
`

const FooterTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 984px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
  padding: 0 1.6rem;
`

const FooterContent = styled.div`
  margin-left: 2.8rem;
  width: 100%;
`

const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

const ContactButton = styled.button`
  cursor: pointer;
  font-size: 1.4rem;
  font-family: 'avenirnext-medium';
  width: 10rem;
  height: 2.8rem;
  color: #ffffff;
  background-color: transparent;
  border-radius: 5px;
`

const ContactInfo = styled.div`
  font-size: 2rem;
  display: flex;

  p {
    margin-left: 1.2rem;
  }
`

const CopyRightsContainer = styled.div`
  margin-top: 2.4rem;
  font-size: 1.4rem;
  opacity: 0.7;
  display: flex;
  justify-content: space-between;
`

function footer() {
  return (
    <FooterContainer>
      <FooterBG src="/static/image/footer.jpg" alt="" />
      <FooterTextContainer>
        <img src="/static/Logo/EX.svg" alt="" />
        <FooterContent>
          <AddressContainer>
            <div style={{ fontSize: '1.6rem' }}>
              Existing company co. Ltd. <br /> Asok tower, 217/16 21 Sukhumvit Rd,
              <br /> Khlong Toei Nuea, Watthana, Bangkok 10110 <br /> Thailand
            </div>
            <ContactContainer>
              <ContactButton>CONTACT</ContactButton>
              <ContactInfo>
                <img src="/static/Icon/Email.svg" alt="" />
                <p>contact@existing.io</p>
              </ContactInfo>
            </ContactContainer>
          </AddressContainer>
          <CopyRightsContainer>
            <p>© 2020 Existing company. All Rights Reserved</p>
            <img src="/static/Icon/IPFS.svg" alt="" />
          </CopyRightsContainer>
        </FooterContent>
      </FooterTextContainer>
    </FooterContainer>
  )
}

export default footer
