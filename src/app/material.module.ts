import {NgModule} from '@angular/core';
import {MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,MatFormFieldModule,MatInputModule} from '@angular/material'
@NgModule({
    imports:[MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,MatFormFieldModule,MatInputModule],
    exports:[MatButtonModule,MatToolbarModule,MatSidenavModule,MatListModule,MatFormFieldModule,MatInputModule]

})
export class MaterialModule{}
