import { NgModule } from '@angular/core';

import { EnterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [EnterSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [EnterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class EnterSharedCommonModule {}
