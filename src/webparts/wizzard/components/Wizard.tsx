import * as React from 'react';
import  {useState} from 'react';

import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';
import Countdown from 'react-countdown';
import { IWizardProperties } from './IWizardProperties';
import { IWizardStep } from './IWizardStep';

function Wizard(props : IWizardProperties ){

  const steps = props.steps;

  const initStep : IWizardStep = {idx: -1, title: 'Start', body: '<div></div>', allowBack: false, times:15000, showButtons: true};

  const [activeStep, setActiveStep] = useState(initStep);
  

  const start = () => {
    setActiveStep(steps[0]);
  };

  const next = () => {
    if(activeStep.idx < steps.length - 1){
      setActiveStep(steps[activeStep.idx + 1]);
      if(activeStep.idx>=steps.length-1){
        
      }
    }
    
  };
  
  const prev = () => {
    if(activeStep.allowBack && activeStep.idx > 0){
      setActiveStep(steps[activeStep.idx - 1]);
    }
    
  };
  const countdown = <Countdown date={Date.now() + Number(activeStep.times)} onComplete={next} key={activeStep.idx} ></Countdown>;
  const butto=<div><DefaultButton onClick={() => prev()} disabled={!activeStep.allowBack}>PREV</DefaultButton> | <PrimaryButton onClick={next}>NEXT</PrimaryButton></div>;
  const moving = <div>{activeStep.showButtons===true ?butto: '' }</div>;
  const timer = <div>{activeStep.times ?countdown: '' }</div>;
  const progress=<div><h1>{activeStep.idx+1} from {steps.length-1}</h1></div>;
  const progressshow=<div>{activeStep.showButtons===true ?progress: '' }</div>;
    

  const formBody = <div dangerouslySetInnerHTML={{__html: activeStep.body}}></div>;
  const form = <div>
    <div>{timer}</div>
      <div>{progressshow}</div>
      <div>{formBody}</div>
      <div>{moving}</div>
  </div>;


  
    return (
      <div className="App">
        <div>
          <h1>Wizard</h1>
   
          <div>
            
          {activeStep.idx  === -1 ? 
          <PrimaryButton onClick={start}>START</PrimaryButton> : form }

          </div>
    
        </div>
        
      </div>
    );
}
export default Wizard;

