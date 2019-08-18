export interface IndexState {
  // isLoading: boolean
  characters: CharacterData[]
  character: CharacterData
}

export interface FormState {
  name: string
  item: string
  itemImage: string
  description: string
}

export interface CharacterData {
  index: number
  name: string
  item: string
  image: string
  itemImage: string
  description: string
}
