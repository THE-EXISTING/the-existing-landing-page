import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import ContactButton from './ContactButton'

const FooterContainer = styled.footer`
  background-image: url('../static/image/footer.jpg');
  height: 100%;
  position: relative;
  width: 100%;
  height: 256px;
  display: flex;
  align-items: center;

  ${media.lessThan('medium')`
    height: auto;
  `};
`

const FooterTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  max-width: 984px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
  padding: 0 1.6rem;

  ${media.lessThan('medium')`
    padding: 2.8rem 2rem;
  `};
`

const FooterContent = styled.div`
  margin-left: 2.8rem;
  width: 100%;
`

const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid;

  ${media.lessThan('medium')`
    flex-direction: column;
  `};
`

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${media.lessThan('medium')`
    margin-top: 2.2rem;
    align-items: flex-start;
  `};
`

const ContactInfo = styled.div`
  font-family: ProductSans-Regular;
  font-size: 2rem;
  display: flex;
  letter-spacing: 1.5px;

  p {
    margin-left: 1.2rem;
  }

  ${media.lessThan('medium')`
    font-size: 1.6rem;
  `};
`

const CopyRightsContainer = styled.div`
  margin-top: 1.4rem;
  font-size: 1.4rem;
  display: flex;
  justify-content: space-between;

  ${media.lessThan('medium')`
    flex-direction: column;
    img {
      align-self: flex-end;
    }
  `};
`

const ContactLink = styled.a`
  text-decoration: none;
  color: #ffffff;
`

function footer() {
  return (
    <FooterContainer>
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

                <ContactLink href="mailto:contact@existing.co?subject=Put your subject here...">
                  <p>contact@existing.io</p>
                </ContactLink>
              </ContactInfo>
            </ContactContainer>
          </AddressContainer>
          <CopyRightsContainer>
            <p style={{ opacity: '0.7' }}>© 2020 Existing company. All Rights Reserved</p>
            {/* <img src="/static/Icon/IPFS.svg" alt="" /> */}
          </CopyRightsContainer>
        </FooterContent>
      </FooterTextContainer>
    </FooterContainer>
  )
}

export default footer
