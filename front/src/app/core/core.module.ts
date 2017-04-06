import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2DjangoChannelsDataBindingModule, WebSocketDataBindingService } from 'ng2-django-channels-data-binding';
import { Ng2DjangoChannelsDemultiplexingModule } from 'ng2-django-channels-demultiplexing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';

import { WebsocketService } from './websocket.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    Ng2DjangoChannelsDataBindingModule,
    Ng2DjangoChannelsDemultiplexingModule.forRoot({websocket_url: 'ws://127.0.0.1:8000/api/ws'})
  ],
  providers: [WebsocketService],
  exports: [BrowserAnimationsModule, MaterialModule]
})
export class CoreModule { }
