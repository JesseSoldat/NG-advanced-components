import {
	NgModule,
	Component,
	Input,
	Directive,
	ViewContainerRef,
	TemplateRef
} from '@angular/core';

@Directive({
	selector: '[ngBookIf]'
})

class NgBookIf {
	constructor(private viewContainer: ViewContainerRef,
							private template: TemplateRef<any>){
	}

	@Input() set ngBookIf(condition) {
		if(condition) {
			this.viewContainer.createEmbeddedView(this.template);
		} else {
			this.viewContainer.clear();
		}
	}
}

@Component({
	selector: 'template-app',
	template: `
	<button class="ui primary button" (click)="toggle()">
		Toggle
	</button>

	<div *ngBookIf="display">
		The message is displayed
	</div>
	`
})

export class IfTemplateApp {
	display: boolean;

	constructor(){
		this.display = true;
	}

	toggle(){
		this.display = !this.display;
	}
}

@NgModule({
	declarations: [
	NgBookIf,
	IfTemplateApp
	],
	exports: [IfTemplateApp]
})

export class IfTemplateAppModule {}