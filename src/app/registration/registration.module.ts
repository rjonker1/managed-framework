import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard, SharedModule } from '../shared';

//import { EditableRegistrationResolver } from './editable-registration-resolver.service';
import { RegistrationComponent } from './registration.component'

const registrationRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'registration',
        component: RegistrationComponent,
        canActivate: [AuthGuard]
    },    
    {
        path: 'registration/:slug',
        component: RegistrationComponent,
        canActivate: [AuthGuard] //,
        // resolve: {
        //     registration: 
        // }
    }
]);

@NgModule({
    imports:[
        registrationRouting,
        SharedModule
    ],
    declarations: [
        RegistrationComponent
    ],
    providers: [

    ]
})

export class RegistrationModule{}