import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonComponent } from './common/common.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'common' },
  { path: 'parent', component: ParentComponent,
    children: [
      {
        path: 'child', // child route path
        component: ChildComponent, // child route component that the router renders
      },
    ],
  },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'template', component: TemplateDrivenComponent },
  { path: 'common', component: CommonComponent },
  { path: 'user', loadChildren: () => import('./user/user.module').then(mod => mod.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), UserModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
