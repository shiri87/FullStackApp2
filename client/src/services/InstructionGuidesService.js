import Api from "@/services/Api"
export default {
  getAllInstructionGuides() {
    return Api().get("instructionGuides")
  },
  postInstructionGuides(instructionGuide) {
    return Api().post("instructionGuides", instructionGuide)
  },
}
