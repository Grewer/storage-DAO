interface IResult {
  status: number
  key: string
  value: string | null
}

interface WebStorage {
  set: (key: string, value: string, time?: string | number) => void
  get: (key: string) => IResult
  remove: (key: string) => { status: number, value: null | string }
}

export default WebStorage
