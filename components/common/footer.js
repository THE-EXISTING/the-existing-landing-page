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
    margin-bottom: 8px;
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

const FooterBottomText = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  bottom: 0;
  right: 0;
  opacity: 0.34;
  font-size: 1.2rem;
  padding: 1rem;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-top-left-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  ${media.lessThan('medium')`
    background-color: rgba(0, 0, 0, 1);
    opacity: 0.60;
    font-size: 1rem;
    padding: 0.8rem;
    border-top: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
    z-index: 999999;
  `};
`

function footer() {
  return (
    <FooterContainer>
      <FooterTextContainer>
        <img src="/static/Logo/EX.svg" alt="" />
        <FooterContent>
          <AddressContainer>
            <div style={{ fontSize: '1.6rem' }}>
              The Existing co. Ltd. <br /> Asok tower, 219/23 21 Sukhumvit Rd,
              <br /> Khlong Toei Nuea, Watthana, Bangkok 10110 <br /> Thailand
            </div>
            <ContactContainer>
              <ContactButton>CONTACT</ContactButton>
              <ContactInfo>
                <img src="/static/Icon/Email.svg" alt="" />

                <ContactLink href="mailto:contact@existing.co?subject=Put your subject here...">
                  <p>contact@existing.co</p>
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
      <FooterBottomText
        onClick={() =>
          window.open(
            'https://medium.com/the-existing/the-existing-at-day-zero-dbae93e6218',
            '_blank'
          )
        }
      >
        Why we set up THE EXISTING?
      </FooterBottomText>
    </FooterContainer>
  )
}

export default footer
