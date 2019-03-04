import { NgModule } from '@angular/core';

import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { CardModule } from 'primeng/card';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
    imports: [
        PanelModule,
        AccordionModule,
        TableModule,
        DialogModule,
        ButtonModule,
        RatingModule,
        ChartModule,
        CardModule,
        MessagesModule,
        MessageModule
    ],
    exports: [
        PanelModule,
        AccordionModule,
        TableModule,
        DialogModule,
        ButtonModule,
        RatingModule,
        ChartModule,
        CardModule,
        MessagesModule,
        MessageModule
    ]
})
export class PrimeNgModule { }
