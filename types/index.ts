export interface IndexState {
  // isLoading: boolean
  characters: CharacterData[]
  character: CharacterData
}

export interface CharacterData {
  index: number
  name: string
  item: string
  itemImage: string
  description: string
}
