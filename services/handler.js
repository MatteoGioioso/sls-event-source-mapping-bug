const handler = async (event) => {
    console.log(event)
    return {
        status: 200,
        message: "done"
    }
}

module.exports = {
    handler
}
