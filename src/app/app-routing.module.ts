import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicFormComponent } from './basic-form/basic-form.component';
import { ReactiveDynamicFormComponent } from './reactive-dynamic-form/reactive-dynamic-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { StarterReactiveFormComponent } from './starter-reactive-form/starter-reactive-form.component';
import { StarterTemplateFormComponent } from './starter-template-form/starter-template-form.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { UpdateOnComponent } from './update-on/update-on.component';
import { CustomerComponentsComponent } from './customer-components/customer-components.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: '/basic-form'},
  {path:'basic-form', component:BasicFormComponent},
  {path:'reactive-dynamic-form', component:ReactiveDynamicFormComponent},
  {path:'reactive-form', component:ReactiveFormComponent},
  {path:'starter-reactive-form', component:StarterReactiveFormComponent},
  {path:'starter-template-form', component:StarterTemplateFormComponent},
  {path:'template-form', component:TemplateFormComponent},
  {path:'update-on', component:UpdateOnComponent},
  {path:'customer-component', component:CustomerComponentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
