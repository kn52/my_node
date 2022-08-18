import { Routes } from "@angular/router";
import { ByeComponent } from "../bye/bye.component";
import { HelloComponent } from "../hello/hello.component";

export const ng_routes: Routes = [
    { path: 'bye', component: ByeComponent },
    { path: 'hello', component: HelloComponent },
];


export const ng_routing_components = [
    HelloComponent,
    ByeComponent
]