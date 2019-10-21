Angular Routing And Navigation
=====

Steps :

1) Add following code under index.html

```
<base href="/">
```

2) Add component in the app.module.ts

```
@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    EmployeeListComponent,
    PageNotFoundComponent
  ],
  
 ```
 3) Add Routing path in app-routing.module.ts
 
 ```
const routes: Routes = [
  { path: '', redirectTo: '/departments', pathMatch: 'full' },  // default route to department path
  { path: 'departments', component: DepartmentListComponent }, 
  { path: 'employees', component: EmployeeListComponent },
  { path: "**", component: PageNotFoundComponent }, // any invalid path
];

```
 
 4) Create navigation button and tell them what path to redirect in app.component.html 
 
```
 <nav>
  <button routerLink="/departments">Departments</button><br>
  <button routerLink="/employees">Employees</button>
</nav>
```

5) Add router-outlet sector so it can show routed html
  ```
<router-outlet></router-outlet>
<!-- Routed View goes here -->

 ```
