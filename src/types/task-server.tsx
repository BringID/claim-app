type TTaskServer = {
  "id": string
  "type": string
  "status": string
  "id_hash": string | null
  "registry": string
  "verification_id": string
  "verifier_signature": string
  "identity_commitment": string
  "batch_id": null | string,
  "scheduled_time": number,
  "created_at": string
  "updated_at": string
}

export default TTaskServer