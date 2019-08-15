export interface RootState {}

export interface IndexState {
  currentIndex: number
  characters: CharacterData[]
}

export interface CharacterData {
  index: number
  name: string
  item: string
  image: string
  description: string
}
