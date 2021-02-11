import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UpdateOnComponent } from './update-on/update-on.component';
import { CustomerComponentsComponent } from './customer-components/customer-components.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    ReactiveDynamicFormComponent,
    ReactiveFormComponent,
    StarterReactiveFormComponent,
    StarterTemplateFormComponent,
    TemplateFormComponent,
    UpdateOnComponent,
    CustomerComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
