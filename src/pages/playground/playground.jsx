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
import { Slider } from "@/components/ui/slider" // Adjust the import path based on your project structure

import './playgroud.css';
import { AlertCircle } from "lucide-react";
// import { Link } from 'react-router-dom';

function Playground() {
  
  const [storySeed, setStorySeed] = useState('');
  const [storyGenerated, setStoryGenerated] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [value, setValue] = useState([30])

  const generateGameStory = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      //  LLM lol 🙂🙂
    }, 3000);
  };

  const handleValueChange = (newValue) => {
    setValue(newValue)
  }

  return (
    <>
      <div id="playground">
        <div className="title1 font-bold text-3xl what2">
          Bienvenue dans le Créateur de Quêtes :
        </div>
        <div className="qts font-bold text-2xl what">
          Entrez votre graine d'aventure, générez votre histoire et partez à l'aventure ! 🏰⚔️
        </div>
        <br />
        
        <div className="bg-white shadow-lg rounded ashraf">
          <div className="flex flex-col h-full">
            <ResizablePanelGroup direction="horizontal" className="flex flex-grow">
              <ResizablePanel className="border-r flex-grow min-w-72">
                <div className="flex flex-col h-full items-center justify-center p-6">
                  <span className="font-semibold text-xl">Graine d'Aventure</span>
                  <Textarea
                    spellCheck="false"
                    className="mt-4 resize-none w-full flex-grow font-semibold bg-gray-100 text-base"
                    placeholder="Entrez votre graine d'histoire ici"
                    value={storySeed}
                    onChange={(e) => setStorySeed(e.target.value)}
                  />
                  <br />
                  <Button onClick={generateGameStory}>Générer l'Histoire</Button>
                  {error && (
                    <Alert variant="destructive" className="mt-2">
                      <AlertCircle className="h-4 w-4" />
                      <AlertTitle>Erreur</AlertTitle>
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}
                </div>
              </ResizablePanel>

              <ResizableHandle />

              <ResizablePanel className="flex-grow min-w-72">
                <ResizablePanelGroup direction="vertical" className="flex flex-grow">
                  <ResizablePanel className="flex-grow">
                    <div className="flex flex-col h-full items-center justify-center p-6">
                      <span className="font-semibold text-xl">Generated Adventure</span>
                      {loading ? 
                        ( <>
                            <br />
                            <div className="loader w-12 h-12 rounded-full border-2 border-gray-300 border-t-gray-800 animate-spin">
                              {/* Affichez une animation ou une icône de chargement ici */}
                            </div>
                          </>
                        ):(
                          <>
                            <Textarea
                              className="mt-4 resize-none w-full flex-grow text-base bg-gray-100"
                              value={storyGenerated}
                              readOnly
                            />
                           
                           {storyGenerated && (
                              <div className="flex justify-between">
                                <div className="flex-grow p-2">
                                  <CopyToClipboard text={storyGenerated}>
                                    <Button className="w-full mt-2 py-1 px-4 rounded-lg" variant="outline" >
                                      <FontAwesomeIcon icon={faCopy} className="mr-2" />
                                      Copy Story
                                    </Button>
                                  </CopyToClipboard>
                                </div>
                                
                              </div>
                            )}
                               
                          </>
                        )}
                                        <div className="mb-3 mt-4">
                              <label htmlFor="slider" className="block mb-2">
                               Token: {value[0]}
                              </label>
                              <Slider
                                id="slider"
                                min={30}
                                max={100}
                                defaultValue={[30]}
                                value={value}
                                onValueChange={handleValueChange}
                                step={1}
                              />
                            </div>
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
