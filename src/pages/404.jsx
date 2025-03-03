import '../index.css';
import { Link } from "react-router-dom";
import { Text, HStack } from "@chakra-ui/react";
import { Button } from "../components/ui/button";

export const NotFound = () => {
  return (
    <div className="indent">
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base description-text text-[#7D12FF]">404</p>
            <h1 className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
              Page not found
            </h1>
            <p className="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link className="duration-500" to="/" style={{ width: 'fit-content' }}>
                <HStack>
                  <Button className="text-wrap primary-btn px-3">Go back home</Button>
                </HStack>
              </Link>
            </div>
          </div>
        </main>
      </>
    </div>

  )
}
