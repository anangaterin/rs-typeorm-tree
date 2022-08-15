export interface ITreeMetadata{
    type: 'parent'| 'child',
    nodes: Function
}

export interface ITreeCompleteMetadata extends ITreeMetadata{
    key: string
}