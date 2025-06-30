type TAuthorizationStep = 'wrong_network' | // network is not supported in current version
                          'initial' | // initial state
                          'connect' | // can be connected
                          'connected' | // can be authorized
                          'no_injected_extension' | // no extension installed
                          'wrong_device' // mobile device

export default TAuthorizationStep
