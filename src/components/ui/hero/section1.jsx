/**
 * v0 by Vercel.
 * @see https://v0.dev/t/JnHejEaaWRp
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Component() {
  const navigate = useNavigate()

  function handleClick() {
    navigate("/playground")
  }
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-900 text-white">
      <div className="container px-4 md:px-6 lg:max-w-5xl">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Generate your story
            </h1>
            <p className="text-lg text-gray-400 md:text-xl">
              Unlock your creativity.
            </p>
            <form className="flex max-w-md space-x-2">
      
              <Button
                className="rounded-md bg-gray-500 px-6 font-medium text-gray-900 hover:bg-gray-400 focus:ring-2 focus:ring-gray-500"
                type="submit"
                onClick={() => {
                  handleClick()
                }
                }
              >
                Get Started
              </Button>
            </form>
          </div>
          <div className="hidden lg:block">
            <img
              alt="Hero Image"
              className="rounded-xl object-cover"
              height="500"
              src="src\assets\game.jpg"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width="600"
            />
          </div>
        </div>
      </div>
    </section>
  )
}