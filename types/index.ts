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

export interface FormData {
  characterName: string
  materialName: string
  characterImage: File
  materialImage: File
  description: string
}
