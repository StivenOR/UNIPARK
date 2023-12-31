import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebPageComponent } from './webpage/page/page.component';
import { PageLoginComponent } from './login/page/page.component';
import { PageAdminComponent } from './admin/page/page.component';
import { AdminUserCreateComponent } from './admin/components/admin-user-create/admin-user-create.component';
import { AdminUserEditComponent } from './admin/components/admin-user-edit/admin-user-edit.component';
import { PageLavadorComponent } from './lavador/page/page.component';
import { LavadorListComponent } from './admin/components/admin-lavador-list/lavador-list.component';
import { AdminEmployeeCreateComponent } from './admin/components/admin-empleado-create/admin-employee-create.component';
import { AdminEmployeeEditComponent } from './admin/components/admin-empleado-edit/admin-empleado-edit.component';
import { AdminVehicleAddComponent } from './admin/components/admin-vehicle-add/admin-vehicle-add.component';
import { AdminVehicleRequestComponent } from './admin/components/admin-vehicle-request/admin-vehicle-request.component';
import { AdminVehicleOutComponent } from './admin/components/admin-vehicle-out/admin-vehicle-out.component';
import { AdminVehicleBillComponent } from './admin/components/admin-vehicle-bill/admin-vehicle-bill.component';
import { AdminLavaderoRequestComponent } from './admin/components/admin-lavadero-request/admin-lavadero-request.component';
import { PageWorkerComponent } from './worker/page/page.component';
import { WorkerUserCreateComponent } from './worker/components/worker-user-create/worker-user-create.component';
import { WorkerUserEditComponent } from './worker/components/worker-user-edit/worker-user-edit.component';
import { WorkerVehicleAddComponent } from './worker/components/worker-vehicle-add/worker-vehicle-add.component';
import { WorkerVehicleRequestComponent } from './worker/components/worker-vehicle-request/worker-vehicle-request.component';
import { WorkerVehicleOutComponent } from './worker/components/worker-vehicle-out/worker-vehicle-out.component';
import { WorkerVehicleBillComponent } from './worker/components/worker-vehicle-bill/worker-vehicle-bill.component';
import { PageUserComponent } from './user/page/page.component';
import { UserVehicleAddComponent } from './user/components/user-vehicle-add/user-vehicle-add.component';
import { UserVehicleReqComponent } from './user/components/user-vehicle-req/user-vehicle-req.component';
import { UserLavaderoReqComponent } from './user/components/user-lavadero-req/user-lavadero-req.component';
import { AdminVehicleInComponent } from './admin/components/admin-vehicle-in/admin-vehicle-in.component';
import { WorkerVehicleInComponent } from './worker/components/worker-vehicle-in/worker-vehicle-in.component';
import { UserVehicleInComponent } from './user/components/user-vehicle-in/user-vehicle-in.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:WebPageComponent},
  {path:'login', component:PageLoginComponent},
  {path:'admin',
  component:PageAdminComponent,
  children:[
    {path:'create-user', component:AdminUserCreateComponent},
    {path:'edit-user', component:AdminUserEditComponent},
    {path:'lavador', component:LavadorListComponent},
    {path:'create-employee', component:AdminEmployeeCreateComponent},
    {path:'edit-employee', component:AdminEmployeeEditComponent},
    {path:'add-vehicle', component:AdminVehicleAddComponent},
    {path:'request-parking', component:AdminVehicleRequestComponent},
    {path:'in-parking', component:AdminVehicleInComponent},
    {path:'out-parking', component:AdminVehicleOutComponent},
    {path:'bill', component:AdminVehicleBillComponent},
    {path:'request-lavadero', component:AdminLavaderoRequestComponent},

  ]},
  {path:'lavador', component:PageLavadorComponent,
  children:[
    {path:'list', component:WorkerUserCreateComponent}
  ]},
  {path:'worker', component:PageWorkerComponent,
  children:[
    {path:'create-user', component:WorkerUserCreateComponent},
    {path:'edit-user', component:WorkerUserEditComponent},
    {path:'add-vehicle', component:WorkerVehicleAddComponent},
    {path:'request-parking', component:WorkerVehicleRequestComponent},
    {path:'in-parking', component:WorkerVehicleInComponent},
    {path:'out-parking', component:WorkerVehicleOutComponent},
    {path:'bill', component:WorkerVehicleBillComponent},
  ]},
  {path:'user', component:PageUserComponent,
  children:[
    {path:'add-vehicle', component:UserVehicleAddComponent},
    {path:'request-parking', component:UserVehicleReqComponent},
    {path:'in-parking', component:UserVehicleInComponent},
    {path:'request-lavadero', component:UserLavaderoReqComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
