import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    const deletedPrompt = await Prompt.findOneAndDelete({ _id: params.id });

    if (!deletedPrompt) {
      return new Response("Prompt not found", { status: 404 });
    }

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    console.error("Error deleting prompt:", error);
    return new Response("Error deleting prompt", { status: 500 });
  }
};
