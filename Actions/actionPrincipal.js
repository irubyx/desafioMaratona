const openwhisk = require("openwhisk");
const ow = openwhisk();

function main(params) {
	return ow.actions.invoke({
	    name: "testActionCallsAction/actionNumero2",
	    blocking: true,
	    result: true,
	    params: params
	}).then((result) => {
	    return result
	})
}