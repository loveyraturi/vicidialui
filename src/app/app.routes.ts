import {HomeComponent} from "./pages/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { CreateUserComponent } from "./components/create-user/create-user.component";
import { ShowUsersComponent } from "./components/show-users/show-users.component";
import { UpdateUserComponent } from "./components/update-user/update-user.component";

export const appRoutes=[
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'createUser',
        component: CreateUserComponent
    },
    {
        path: 'updateUser',
        component: UpdateUserComponent
    },
    {
        path: 'showUser',
        component: ShowUsersComponent
    },
    {
        path: 'others',
        loadChildren:'./pages/others/others.module#OthersModule',
    },
];