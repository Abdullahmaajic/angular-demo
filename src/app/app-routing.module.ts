import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeployComponent } from './deploy/deploy.component';
import { DeveloperComponent } from './developer/developer.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { TesterComponent } from './tester/tester.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'tester',
    component:TesterComponent
  },

  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'developer',
    component: DeveloperComponent
  },

  {
    path: 'service',
    component: ServiceComponent,
  },
  {
    path: 'deploy',
    component: DeployComponent,
  },

  // {
  //   path:'service',
  //   component:ServiceComponent,
  //   children:[
  //     {
  //       path:'developer',
  //       component:DeveloperComponent
  //     },
  //     {
  //       path:'tester',
  //       component:TesterComponent
  //     },
  //     {
  //       path:'deploy',
  //       component:DeployComponent
  //     },
  //   ]
  //   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
