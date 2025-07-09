type TSemaphoreProof = {
  verificationId: string,
  semaphoreProof: {
    merkleTreeDepth: number,
    merkleTreeRoot: string,
    nullifier: string,
    message: string,
    scope: string,
    points: string[]
  }
}

export default TSemaphoreProof