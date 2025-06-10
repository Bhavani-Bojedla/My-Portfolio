import {  Section, Title, ButtonAlt, SubTitle } from '../../styles/styles'
import { SmileyWink, ArrowCounterClockwise } from 'phosphor-react'
import { useState } from 'react'

export function Jokes() {
  const [jokeImageUrl, setJokeImageUrl] = useState<string>('https://readme-jokes.vercel.app/api')

  const handleRefresh = () => {
    setJokeImageUrl(`https://readme-jokes.vercel.app/api?${Date.now()}`)
  }

  return (
    <Section>
      <Title>
        Joke For You!
        <span>
          <SmileyWink /> Special
        </span>
      </Title>

      <SubTitle>
        If you came this far, then you deserve a Joke!!
      </SubTitle>

      <img src={jokeImageUrl} alt="Jokes Card" />

      <div>
        <ButtonAlt onClick={handleRefresh} style={{ marginRight: '10px' }}>
          <ArrowCounterClockwise size={24} /> Refresh
        </ButtonAlt>
      </div>
    </Section>
  )
}
