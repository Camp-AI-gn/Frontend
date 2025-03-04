
import { Link } from 'react-router-dom';

export default function section3() {
  return (
    (<section className="w-full py-12 md:py-24 lg:py-32 bg-gray-950 dark:bg-gray-950">
      <div className="container px-4 md:px-6">
        <div
          className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div
                className="inline-block rounded-lg bg-gray-800 px-3 py-1 text-sm dark:bg-gray-800">
                About LangChain
              </div>
              <h2 className="text-3xl font-bold tracking-tighter text-gray-50 sm:text-5xl">
                A Framework for Building Applications with Large Language Models
              </h2>
              <p
                className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                LangChain is a framework that provides a set of abstractions and tools to build applications with large
                language models (LLMs), making it easier to work with prompts, agents, and other LLM-powered components.
                It features a modular design, supports various LLM providers, and integrates with other AI tools and
                frameworks, helping developers create more powerful and versatile applications.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-8 text-sm font-medium text-gray-950 shadow transition-colors hover:bg-gray-50/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-200 dark:text-gray-950 dark:hover:bg-gray-200/90 dark:focus-visible:ring-gray-600"
                href="#">
                Learn More
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-600 bg-gray-950 px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-600 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-600"
                to="https://github.com/langchain-ai/langchain">
                View on GitHub
              </Link>
            </div>
          </div>
          <img
            alt="LangChain"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/src/assets/LangChaine2.jpg"
            width="550" />
        </div>
      </div>
    </section>)
  );
}
