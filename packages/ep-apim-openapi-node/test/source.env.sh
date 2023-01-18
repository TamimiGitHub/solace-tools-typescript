#
# Environment for tests
#
# Usage:
#   source source.env.sh && {run-tests} && unset_source_env

unset_source_env() {
    # env vars for tests
    unset TEST_EP_APIM_OPEN_API_NODE_ENABLE_API_CALL_LOGGING
    unset TEST_EP_APIM_OPEN_API_NODE_SOLACE_CLOUD_API_BASE_URL
    # unset this function
    unset -f unset_source_env
}

######################################################

# here
export TEST_EP_APIM_OPEN_API_NODE_ENABLE_API_CALL_LOGGING=true
export TEST_EP_APIM_OPEN_API_NODE_SOLACE_CLOUD_API_BASE_URL="https://apim-devportal-api.solace-labs.io"
# external
NOLOG_TEST_EP_APIM_OPEN_API_NODE_SOLACE_CLOUD_TOKEN=$TEST_EP_APIM_OPEN_API_NODE_SOLACE_CLOUD_TOKEN
export TEST_EP_APIM_OPEN_API_NODE_SOLACE_CLOUD_TOKEN="***"

logName='[source.env.sh]'
echo "$logName - test environment:"
echo "$logName - CI: '$CI'"
echo "$logName - TEST_EP_APIM_OPEN_API_NODE:"
export -p | sed 's/declare -x //' | grep TEST_EP_APIM_OPEN_API_NODE_

export TEST_EP_APIM_OPEN_API_NODE_SOLACE_CLOUD_TOKEN=$NOLOG_TEST_EP_APIM_OPEN_API_NODE_SOLACE_CLOUD_TOKEN
