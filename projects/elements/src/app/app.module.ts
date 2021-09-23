import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ComponentsModule, ComponentsComponent } from 'components';

@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [],
})
export class AppModule {
  constructor(private Injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(ComponentsComponent, {
      injector: this.Injector,
    });
    customElements.define('lib-components', element);
  }
}
