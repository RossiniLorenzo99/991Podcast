import { Routes } from "@angular/router";
import { ListapComponent } from "./listap/listap.component";
import { RiproducipComponent } from "./riproducip/riproducip.component";

export const Approutes:Routes=[
    {path:"listap",component:ListapComponent},
    {path:"riproducip/:id",component:RiproducipComponent}

]