import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
	selector: 'observable',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
	<div>
		<div>Total items: {{counter}}</div>
	</div>
	`
})
export class ObservableCmp implements OnInit {
	@Input() items: Observable<number>;
	counter = 0;

	constructor(private changeDetector: ChangeDetectorRef){}

	ngOnInit(){
		this.items.subscribe( (v) => {
			// console.log('got value ', v);
			this.counter++;
			if(this.counter % 5 == 0){
				console.log('counter ', this.counter);
				this.changeDetector.markForCheck();
			}
		},
		null,
		() => {
			this.changeDetector.markForCheck();
		
		});
	}
}

@Component({
	selector: 'change-detection-app',
	template: `
	<observable [items]="itemObservable"></observable>
	`
})

export class ObservableChangeDectectionApp {
	itemObservable = Observable.timer(100, 100).take(101);
}