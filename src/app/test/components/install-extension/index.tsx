

const InstallExtension = () => {
  return <WidgetStyled
    title='Install Bring ID Extension'
    image={<ShieldIcon />}
  >
    <SmallTextStyled>Start by installing our browser extension to enable verification</SmallTextStyled>
    <NoteStyled>
      The Bring ID extension creates proofs of your web2 accounts without exposing your credentials. It runs locally in your browser and never sends your login information to our servers.
    </NoteStyled>
    {button}
  </WidgetStyled>
}

export default InstallExtension