import React, { Fragment, useEffect, useState } from 'react'
import useFetch from 'use-http'
import { Deck } from '../components/Deck'

export const Main: React.FC = () => {
  const [deck, setDeck] = useState<Deck | null>(null)
  const { get: getNewDeck, response } = useFetch(
    `${window.env.REACT_APP_DECK_API_URL}/new`
  )

  useEffect(() => {
    const createNewDeck = async () => {
      const data = await getNewDeck()
      if (response.ok) {
        setDeck(data)
      }
    }

    createNewDeck()
  }, [])
  return <Fragment>{deck && <Deck deck={deck} />}</Fragment>
}
