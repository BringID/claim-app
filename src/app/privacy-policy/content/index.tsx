import {
  FC
} from 'react'
import {
  TitleStyled,
  TextStyled,
  Container,
  SubtitleStyled
} from './styled-components'
import { Strong } from '@/components/common/strong/styled-components'

const WrongDevice: FC = () => {
  return <Container>
    <TitleStyled>
      Privacy Policy
    </TitleStyled>
    <SubtitleStyled>
      Summary
    </SubtitleStyled>
    <TextStyled>
      We don’t collect your data. All processing happens locally, and when a notary is needed, we use our own TLS Notary instance that only sees what you choose to disclose for proof generation. Nothing is stored or shared.  
    </TextStyled>
    <TextStyled>
      BringID (“we,” “our,” “us”) respects your privacy. This Privacy Policy explains how the BringID browser extension (“Extension”) handles information.  
    </TextStyled>

    <SubtitleStyled>
      Introduction
    </SubtitleStyled>

    <TextStyled>
      BringID is a privacy-first identity extension. Processing happens primarily on your device, and you remain in full control of your data. We do not collect, store, or sell your personal information.  
    </TextStyled>



    <SubtitleStyled>
      Information We Collect
    </SubtitleStyled>

    <TextStyled>
      <Strong>No Personal Data Collection by BringID</Strong>: The Extension itself does not collect or transmit any personal information (such as your name, email, browsing history, or wallet activity) to our servers. 
    </TextStyled>

    <TextStyled>
      <Strong>Local Processing First</Strong>: Most operations — including generating proofs and commitments — are executed entirely on your device. 
    </TextStyled>

    <TextStyled>
      <Strong>TLS Notary Involvement</Strong>: When generating certain proofs, BringID uses a forked instance of <Strong>TLS Notary</Strong> that we operate ourselves. The notary may temporarily access the specific information you choose to disclose (for example, your account ID or activity on a given service) in order to verify authenticity. This information is only used to create a cryptographic proof and is not stored by BringID.  
    </TextStyled>

    <SubtitleStyled>
      How BringID Works
    </SubtitleStyled>

    <TextStyled>
      Raw data from supported platforms (e.g., ride-sharing, booking, contributions) is either processed locally or verified through our notary service. 
    </TextStyled>

    <TextStyled>
      The result is a <Strong>cryptographic commitment</Strong>, which can be published on-chain (currently on Base) as a proof of inclusion.   
    </TextStyled>

    <TextStyled>
      <Strong>Important</Strong>: Raw data never leaves your device or the verification session with the notary. Only the proof (linked to your chosen address) is recorded on-chain. 
    </TextStyled>




    <SubtitleStyled>
      Data Storage & Security
    </SubtitleStyled>

    <TextStyled>
      <Strong>Local Only</Strong>: All user data remains in your browser extension’s local storage.
    </TextStyled>

    <TextStyled>
      <Strong>Temporary Notary Access</Strong>: When TLS Notary is involved, the disclosed information is visible only during the verification session and is not stored by the notary.   
    </TextStyled>

    <TextStyled>
      <Strong>No Sensitive Data Stored</Strong>: BringID does not persist sensitive information.   
    </TextStyled>

    <TextStyled>
      <Strong>Uninstall = Delete</Strong>: If you uninstall the extension, all locally stored information is permanently deleted.    
    </TextStyled>



    <SubtitleStyled>
      Data Sharing
    </SubtitleStyled>

    <TextStyled>
      <Strong>No Third-Party Sharing</Strong>: BringID does not share your data with advertisers, analytics providers, or external services.  
    </TextStyled>

    <TextStyled>
      <Strong>Controlled Proof Generation</Strong>: The only time information leaves your device is during a TLS Notary verification session, which is operated by BringID’s own notary instance.   
    </TextStyled>

    <TextStyled>
      <Strong>User-Controlled On-Chain Publishing</Strong>: You decide what to publish on-chain. BringID never posts data or proofs without your explicit action.    
    </TextStyled>



    <SubtitleStyled>
      Your Rights
    </SubtitleStyled>

    <TextStyled>
      <Strong>Control</Strong>: You control what stays local, what is deleted, and what is published.
    </TextStyled>

    <TextStyled>
      <Strong>Deletion</Strong>: Uninstalling the extension deletes all local data. 
    </TextStyled>

    <TextStyled>
      <Strong>Export Requests</Strong>: We do not provide data exports under GDPR/CCPA because we do not collect or store personal data.    
    </TextStyled>



    <SubtitleStyled>
      Children’s Privacy
    </SubtitleStyled>

    <TextStyled>
      BringID is not directed to individuals under the age of 13. If you are under this age, you may not use BringID.  
    </TextStyled>



    <SubtitleStyled>
      Legal Jurisdiction
    </SubtitleStyled>

    <TextStyled>
      This Privacy Policy is governed by the laws of the State of Delaware, United States, without regard to conflict of law provisions.  
    </TextStyled>


    <SubtitleStyled>
      Changes to This Policy
    </SubtitleStyled>

    <TextStyled>
      We may update this Privacy Policy from time to time. Updates will be reflected in the “Last Updated” date above.   
    </TextStyled>


    <SubtitleStyled>
      Contact Us
    </SubtitleStyled>

    <TextStyled>
      If you have questions about this Privacy Policy, please contact us at: 📧 <Strong>hi@bringid.org</Strong>
    </TextStyled>

  </Container>
}

export default WrongDevice