import { NgModule } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'inline-style',
  styles: [`
  .highlight {
    border: 2px solid red;
    background-color: yellow;
    text-align: center;
    margin-bottom: 20px;
  }
  `],
  template: `
  <h4 class="ui horizontal divider header">
    Inline style example
  </h4>

  <div class="highlight">
    This uses component <code>styles</code>
    property
  </div>
  `
})
export class InlineStyle {
}

@Component({
	selector: 'styles-app',
	template: `
	<inline-style></inline-style>

	`
})
export class StylesApp {}


const components = [
	StylesApp,
	InlineStyle
];

@NgModule({
	declarations: components,
	exports: components
})

export class StylesAppModule {}