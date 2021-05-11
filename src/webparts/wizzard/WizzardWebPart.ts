import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';


import Wizard from './components/Wizard';
import { IWizzardProps } from './components/IWizzardProps';
import { IWizardProperties } from './components/IWizardProperties';
import {
 
  PropertyPaneSlider
} from '@microsoft/sp-property-pane';
import { IWizardStep } from './components/IWizardStep';
import * as strings from 'WizzardWebPartStrings';




export interface IWizardWebpartProperties {
  
  steps: IWizardStep[];
  
}
export interface IWizzProperties {
  
  configuration:string;
  
}

export default class DocumentCardEXampleWebPart extends BaseClientSideWebPart<IWizzardProps> {

  public render(): void {
    debugger;

    const config = JSON.parse(this.properties.configuration);

    const props : IWizardProperties = 
    {
      
      steps: config
    
  };

    
    
    const element: React.ReactElement<IWizardProperties> = React.createElement(
      Wizard,
       props, 
       
       
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  //protected get dataVersion(): Version {
   // return Version.parse('1.0');
  //}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
     
      pages: [
        {
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('configuration', {
                  label: 'Configuration'
                  
                })

                
              ]
            }
          ]
        }
      ]
      
    };
  }
}


