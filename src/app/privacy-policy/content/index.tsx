import {
  FC
} from 'react'
import {
  TitleStyled,
  TextStyled,
  Container,
  SubtitleStyled,
  ListStyled,
  LinkStyled
} from './styled-components'
import { Strong } from '@/components/common/strong/styled-components'

const PrivacyPolicy: FC = () => {
  return <Container>
    <TitleStyled>
      Privacy Policy
    </TitleStyled>
    <SubtitleStyled>
      Summary
    </SubtitleStyled>
    <TextStyled>
      BringID is designed to provide privacy-preserving identity verification without collecting or storing personal data. This Privacy Policy explains what information is processed, how it is used, and the guarantees provided by the BringID extension and airdrop claim page.
    </TextStyled>

    <SubtitleStyled>
      1. Data We Do Not Collect
    </SubtitleStyled>

    <ListStyled
      items={[
        <>We do <Strong>not</Strong> collect, store, or monetize personal data.</>,
        <>We do <Strong>not</Strong> access your browsing history, communications, location data, or financial information.</>,
        <>We do <Strong>not</Strong> require you to provide personal details such as name, email, or address.</>
      ]}
    />

    <SubtitleStyled>
      2. How Verification Works
    </SubtitleStyled>

    <TextStyled>
      BringID uses <Strong>Multi-Party Computation over TLS (MPC-TLS)</Strong> combined with <Strong>Semaphore zero-knowledge proofs</Strong> to verify web-based activity in a privacy-preserving way.
    </TextStyled>

    <ListStyled
      items={[
        <><Strong>Encrypted traffic:</Strong> The notary only sees encrypted TLS traffic and cannot reconstruct plaintext credentials.</>,
        <><Strong>Selective disclosure:</Strong> Only specific values necessary for verification (e.g. account IDs, verified follower counts, ride IDs, or device IDs) are revealed.</>,
        <><Strong>Notary attestation:</Strong> The notary signs an attestation of the disclosed values.</>,
        <><Strong>Hashing & commitments:</Strong> Disclosed values (e.g. account IDs) are hashed and committed on-chain as Semaphore identity commitments.</>,
        <><Strong>Zero-knowledge proofs:</Strong> Users generate unlinkable proofs from these commitments to demonstrate humanity and uniqueness without exposing their exact identity.</>
      ]}
    />





    <SubtitleStyled>
      3. Group Membership and Inference
    </SubtitleStyled>

    <TextStyled>
      By design, successful proofs may indicate that a user belongs to a verified group (for example: Uber riders, Twitter verified accounts, or Apple device owners).
    </TextStyled>

    <ListStyled
      items={[
        <>This information is used <Strong>only</Strong> to demonstrate uniqueness and prevent Sybil attacks.</>,
        <>No raw account data is disclosed.</>,
        <>Identity commitments cannot be linked across different proofs, preserving unlinkability.</>
      ]}
    />


    <SubtitleStyled>
      4. Use of Data
    </SubtitleStyled>

    <TextStyled>
      Any data revealed during MPC-TLS verification is: 
    </TextStyled>

    <ListStyled
      items={[
        <>Processed <Strong>ephemerally</Strong> in memory for proof generation.</>,
        <>Never stored, logged, or sold by BringID.</>,
        <>Never used for advertising, profiling, or cross-site tracking.</>
      ]}
    />



    <SubtitleStyled>
      5. Airdrop Claim Page & Analytics
    </SubtitleStyled>

    <TextStyled>
      When you use the BringID airdrop claim page at <Strong>app.bringid.org</Strong>, we may process your wallet address and transaction data solely to deliver tokens and prevent abuse.
    </TextStyled>

    <TextStyled>
      We also use <Strong>Plausible Analytics</Strong> on the claim page to measure usage and conversion. Plausible does not use cookies, does not collect personal data, and does not allow us to identify individual users. Data collected is anonymized and used only to understand claim page performance.
    </TextStyled>



    <SubtitleStyled>
      6. Open-Source and Auditability
    </SubtitleStyled>

    <TextStyled>
      BringID is built on top of open-source projects including TLS Notary and Semaphore. 
    </TextStyled>


    <ListStyled
      items={[
        <>Our codebase is fully open and available on GitHub: <LinkStyled href="https://github.com/BringID" target="_blank">https://github.com/BringID</LinkStyled></>,
        <>Independent review and community audit are encouraged.</>,
      ]}
    />

    <SubtitleStyled>
      7. Data Retention
    </SubtitleStyled>

    <TextStyled>
      BringID does not retain user data. All disclosed values (e.g. account IDs, follower counts) are processed ephemerally during the verification session. No logs or databases of user data are maintained.
    </TextStyled>


    <SubtitleStyled>
      8. User Rights
    </SubtitleStyled>

    <TextStyled>
      Since BringID does not collect or store user data:
    </TextStyled>

    <ListStyled
      items={[
        <>There is no personal information to access, modify, or delete.</>,
        <>Users retain complete control over what information is disclosed during verification.</>
      ]}
    />





    <SubtitleStyled>
      9. Contact
    </SubtitleStyled>

    <TextStyled>
      If you have questions about this Privacy Policy or BringID’s data handling practices, you can reach us at:
    </TextStyled>

    <ListStyled
      items={[
        <>Website: <LinkStyled href="https://bringid.org" target="_blank">https://bringid.org</LinkStyled></>,
        <>GitHub: <LinkStyled href="https://github.com/BringID" target="_blank">https://github.com/BringID</LinkStyled></>,
        <>Email: <LinkStyled href="mailto:dev@bringid.org" target="_blank">dev@bringid.org</LinkStyled></>,
      ]}
    />



  </Container>
}

export default PrivacyPolicy