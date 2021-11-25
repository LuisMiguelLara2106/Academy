import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from "react-icons/fa";

import logoBlanco from '../../images/Decimetrix.png';

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebSiteRights,
  SocialIcons,
  SocialIconLink,
  Img,
} from "./FooterElements";

const Footer = () => {

    const wave = () => {
        return (
          <div style={{ height: "150px", overflow: "hidden" }}>
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: "100%", width: "100%" }}
            >
              <path
                d="M0.00,49.98 C179.73,247.22 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: "none", fill: `${'#18213A'}`}}
              ></path>
            </svg>
          </div>
        );
    };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Abut us</FooterLinkTitle>
              <FooterLink to="/">How ir works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Abut us</FooterLinkTitle>
              <FooterLink to="">How ir works</FooterLink>
              <FooterLink to="">Testimonials</FooterLink>
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="">Investors</FooterLink>
              <FooterLink to="">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Abut us</FooterLinkTitle>
              <FooterLink to="">How ir works</FooterLink>
              <FooterLink to="">Testimonials</FooterLink>
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="">Investors</FooterLink>
              <FooterLink to="">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Abut us</FooterLinkTitle>
              <FooterLink to="">How ir works</FooterLink>
              <FooterLink to="">Testimonials</FooterLink>
              <FooterLink to="">Careers</FooterLink>
              <FooterLink to="">Investors</FooterLink>
              <FooterLink to="">Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to=""><Img src={logoBlanco} /></SocialLogo>
            <WebSiteRights>
              © {new Date().getFullYear} WebSite. All Rights Reserved.
            </WebSiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blannk" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blannk" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blannk" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blannk" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="https://www.linkedin.com/company/decimetrix/mycompany/" target="_blannk" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
      {wave()}
    </FooterContainer>
  );
};

export default Footer;