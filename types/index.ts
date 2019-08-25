export interface IndexState {
  isLoading: boolean
  characters: CharacterData[]
}

export interface CharacterData {
  index: number
  characterName: string
  materialName: string
  characterImageUrl: string
  materialImageUrl: string
  description: string
}
