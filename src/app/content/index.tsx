'use client'
import { FC } from "react"
import {
  Page,
  Button,
} from "@/components/common"
import {
  TitleStyled,
  SubtitleStyled,
  IntroTextStyled,
  Section,
  TextStyled,
  WidgetNumber,
  MainTag,
  CodeIconStyled,
  ShieldIconStyled,
  KeyIconStyled,
  PlanetIconStyled,
  LockIconStyled,
  CupIconStyled
} from './styled-components'
import { VerticalWidgets, HorizontalWidgets } from "@/components/common"

const HomePageContent = () => {
  return <Page>
    <MainTag>
      <CodeIconStyled />
      identity-system
    </MainTag>
    <TitleStyled>Setup Bring ID and Claim BRING Tokens</TitleStyled>
    <Section>
      <IntroTextStyled>Transform your web2 accounts into private, verifiable credentials and earn rewards for being human.</IntroTextStyled>

      <Button to="/get-started/install-extension" appearance="action">
        Get started
      </Button>


    </Section>

    <Section>
      <SubtitleStyled>
        What is Bring ID?
      </SubtitleStyled>

      <TextStyled>
        A privacy-preserving identity system that lets you prove you're a real human without revealing who you are. By leveraging your existing web2 accounts (GitHub, Twitter, Steam, etc.), you can create a composable digital identity that unlocks access to airdrops, DAO voting, and exclusive communities.
      </TextStyled>

      <HorizontalWidgets
          data={[
            {
              icon: <PlanetIconStyled />,
              title: 'Universal',
              text: 'Works with any web2 data'
            }, {
              icon: <LockIconStyled />,
              title: 'Zero Knowledge',
              text: 'Your data stays private'
            }, {
              icon: <CupIconStyled />,
              title: 'Earn Rewards',
              text: 'Get BRING tokens for verifying'
            }
          ]}
      />
    </Section>

    <Section>
      <SubtitleStyled>
      Privacy-First Architecture
      </SubtitleStyled>

      <TextStyled>
        Built with cutting-edge cryptographic protocols.
      </TextStyled>

      <VerticalWidgets
        data={[
            {
            icon: <ShieldIconStyled />,
            title: 'zKTLS: Zero-Knowledge Web Proofs',
            text: 'Our browser extension uses zKTLS (zero-knowledge Transport Layer Security) to create cryptographic proofs of your web2 accounts. This means you can prove you have 100+ GitHub stars or 5+ Airbnb stays without revealing your username, repositories, or any personal data.'
          }, 
          {
            icon: <KeyIconStyled />,
            title: 'ZKPs: Anonymous Claiming',
            text: 'When you claim tokens or participate in DAOs, you generate Zero-Knowledge Proofs (ZKPs) that demonstrate your humanity and reputation score without linking back to your specific accounts. Using Semaphore-style nullifiers, we ensure you can\'t double-claim while keeping your identity completely private.'
          }
        ]}
      />

    </Section>


    <Section>
      <SubtitleStyled>
      Simple 3-Step Process
      </SubtitleStyled>

      <TextStyled>
Get started in minutes, not hours.
      </TextStyled>

      <HorizontalWidgets
        data={[
          {
            icon: <WidgetNumber>1</WidgetNumber>,
            title: 'Connect Accounts',
            text: 'Link web2 accounts via zKTLS'
          }, {
            icon: <WidgetNumber>2</WidgetNumber>,
            title: 'Build Score',
            text: 'Verify more to increase reputation'
          }, {
            icon: <WidgetNumber>3</WidgetNumber>,
            title: 'Claim Tokens',
            text: 'Earn BRING based on your score'
          }
        ]}
      />

    </Section>

  </Page>
}

export default HomePageContent