const AuthenticationController = require("./controllers/AuthenticationController")
const AuthenticationControllerPolicy = require("./policies/AuthenticationControllerPolicy")
const InstructionGuideController = require("./controllers/InstructionGuideController")

module.exports = (app) => {
  app.post(
    "/register",
    AuthenticationControllerPolicy.register,
    AuthenticationController.register
  )

  app.post("/login", AuthenticationController.login)

  // app.get(
  //   "/instructionguides",
  //   InstructionGuideController.getAllInstructionGuides
  // )

  app.get('/instructionguides', InstructionGuideController.getInstructionGuides)

  app.post(
    "/instructionguides",
    InstructionGuideController.postInstructionGuides
  )
  app.get(
    "/instructionguides/:instructionGuideId",
    InstructionGuideController.getInstructionGuideById
  )
  app.put(
    "/instructionguides/:instructionGuideId",
    InstructionGuideController.putInstructionGuideById
  )
}
