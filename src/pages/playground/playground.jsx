/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Textarea } from '@/components/ui/textarea';
// import { RocketIcon } from "@radix-ui/react-icons";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import './playgroud.css';
import { AlertCircle } from "lucide-react";
// import { Link } from 'react-router-dom';

function Playground() {
  
  const [storySeed, setStorySeed] = useState('');
  const [storyGenerated, setStoryGenerated] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const generateGameStory = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      //  LLM lol 🙂🙂
    }, 3000);
  };

  return (
    <>
      <div>
        <div className="title1 font-bold text-3xl what2">
          Game Story Generator
        </div>
        <br />
        
        <div className="bg-white shadow-lg rounded ashraf">
          <div className="flex flex-col h-full">
            <ResizablePanelGroup direction="horizontal" className="flex flex-grow">
              <ResizablePanel className="border-r flex-grow min-w-72">
                <div className="flex flex-col h-full items-center justify-center p-6">
                  <span className="font-semibold text-xl">Seed for Adventure</span>
                  <Textarea
                    spellCheck="false"
                    className="mt-4 resize-none w-full flex-grow font-semibold bg-gray-100 text-base"
                    placeholder="Enter your story seed here"
                    value={storySeed}
                    onChange={(e) => setStorySeed(e.target.value)}
                  />
                  <br />
                  <Button onClick={generateGameStory}>Generate Story</Button>
                  {error && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Error</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                </div>
              </ResizablePanel>

              <ResizableHandle />

              <ResizablePanel className="flex-grow min-w-72">
                <ResizablePanelGroup direction="vertical" className="flex flex-grow">
                  <ResizablePanel className="flex-grow relative">
                    {/* Positionne "Generated Adventure" en haut */}
                    <div className="absolute top-0 left-0 right-0 p-6">
                      <span className="font-semibold text-xl">Generated Adventure</span>
                    </div>
                    <div className="flex flex-col justify-between p-6 mt-12 h-full">
                      {loading ? (
                        <div className="flex items-center justify-center flex-grow">
                          <img src="public/LOADING5.gif" alt="Loading..." className="w-48 h-48" />
                        </div>
                      ) : (
                        <>
                          <Textarea
                            className="resize-none w-full text-base bg-gray-100 "
                            value={storyGenerated}
                            readOnly
                            style={{ height: '425px' }} // Hauteur fixe
                          />
                          {storyGenerated && (
                            <div className="mt-4">
                              <CopyToClipboard text={storyGenerated}>
                                <Button className="w-full py-1 px-4 rounded-lg" variant="outline">
                                  <FontAwesomeIcon icon={faCopy} className="mr-2" />
                                  Copy Story
                                </Button>
                              </CopyToClipboard>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default Playground;
