import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DistrictComponent } from './pages/district/district.component';
import { SimpleComponent } from './pages/simple/simple.component';

export const routes: Routes = [
    {
        path:'',component:HomeComponent
    },
    {
        path:'district',component:DistrictComponent
    },
    {
        path:'contact',component:ContactComponent
    },
    {
        path:'simple',component:SimpleComponent
    }

];
