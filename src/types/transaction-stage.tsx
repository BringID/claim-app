export type TTransactionStageStatus = 'current' | 'done' | 'next' 

export type TTransactionStage = {
  status: TTransactionStageStatus
  title: string
  icon: React.ReactNode | string
}

