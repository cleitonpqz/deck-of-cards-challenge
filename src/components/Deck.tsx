import React from 'react'
import styled from 'styled-components/macro'

const Container = styled.div`
  background: #17644d;
  min-height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const CardsArea = styled.div``

const AddCardsArea = styled.div`
  margin-top: auto;
  color: #ffffff;
  display: flex;
  flex-direction: column;
`
interface DeckProps {
  deck: Deck
}

export const Deck: React.FC<DeckProps> = ({ deck }: DeckProps) => (
  <Container>
    <CardsArea>Deck id {deck.deck_id}</CardsArea>
    <AddCardsArea>
      Add cards to the pile
      <div>
        <input placeholder="Card name" />
        <button type="button">Add</button>
      </div>
    </AddCardsArea>
  </Container>
)
