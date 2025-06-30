interface IConnectorError extends Error {
  code?: number | string
}

export default IConnectorError