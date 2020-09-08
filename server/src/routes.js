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

  app.get(
    "/instructionguides",
    InstructionGuideController.getAllInstructionGuides
  )

  app.post(
    "/instructionguides",
    InstructionGuideController.postInstructionGuides
  )
}
