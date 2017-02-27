import { 
	Component,
  Input,
  SimpleChange,
  IterableDiffers,
  KeyValueDiffers,
  EventEmitter,
  OnInit,
  OnDestroy,
  DoCheck,
  OnChanges,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
	selector: 'on-init',
	template: `
	<div class="ui label">
		<i class="cubes icon"></i> Init/Destroy
	</div>
	`
})

export class OnInitCmp implements OnInit, OnDestroy {
	ngOnInit(): void {
		console.log('On Init');
	}

	ngOnDestroy(): void {
		console.log('destroyed');
	}
}

@Component({
	selector: 'on-change',
	template: `
	<div class="ui comments">
		<div class="comment">
			<a class="avatar">
				<img src="{{imgSrc}}">
			</a>
			<div class="content">
				<a class="author">{{name}}</a>
				<div class="text">
					{{comment}}
				</div>
			</div>
		</div>
	</div>
	`
})
export class OnChangeCmp implements OnChanges {
	@Input('name') name: string;
	@Input('comment') comment: string;
	imgSrc;

	ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
		console.log('Changes', changes);
		this.imgSrc = require('../images/avatars/matt.jpg');
	}
}

@Component({
	selector: 'do-check-item',
	outputs: ['onRemove'],
	template: `
	<div class="ui feed">
		<div class="event">
			<div class="label" *ngIf="comment.author">
			</div>
			<div class="content">
				<div class="summary">
					<a class="user">
						{{comment.author}}
					</a>
					<div class="date">
						1 hours ago
					</div>
					<div class="extra text">
						{{comment.comment}}
					</div>
					<div class="meta">
						<a class="trash" (click)="remove()">
							<i class="trash icon"></i> Remove
						</a>
						<a class="trash" (click)="clear()">
							<i class="eraser icon"></i> Clear
						</a>
						<a class="like" (click)="like()">
							<i class="like icon"></i> {{comment.likes}} Likes
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	`
})
export class DoCheckItem implements DoCheck {
	@Input() comment: any;
	onRemove: EventEmitter<any>;
	differ: any;

	constructor(differs: KeyValueDiffers){
		this.differ = differs.find([]).create(null);
		this.onRemove = new EventEmitter();
	}

	ngDoCheck(): void {
		var changes = this.differ.diff(this.comment);

		if(changes) {
			changes.forEachAddedItem(r => this.logChange('added', r));
			changes.forEachRemovedItem(r => this.logChange('removed', r));
			changes.forEachChangedItem(r => this.logChange('changed', r));
		}
	}

	logChange(action, r){
		if(action === 'changed') {
			console.log(r.key, action, 'from', r.previousValue, 'to', r.currentValue);
		}
		if(action === 'added') {
			console.log(action, r.key, 'with', r.currentValue);
		}
		if(action === 'removed'){
			console.log(action, r.key, '(was '+ r.previousValue+ ')');
		}
	}

	remove(): void {
		this.onRemove.emit(this.comment);
	}
	clear(): void {
		delete this.comment.comment;
	}
	like(): void {
		this.comment.likes += 1;
	}	
}

@Component({
	selector: 'do-check',
	template: `
	<do-check-item [comment]="comment"
		*ngFor="let comment of comments"
		(onRemove)="removeComment($event)">
	</do-check-item>
	<button class="ui primary button" (click)="addComment()">
		Add Comment
	</button>
	`
})
export class DoCheckCmp implements DoCheck {
	comments: any[];
	iterable: boolean;
	authors: string[];
	texts: string[];
	differ: any;

	constructor(differs: IterableDiffers){
		this.differ = differs.find([]).create(null);
		this.comments = [];
		this.authors = ['Elliot', 'Helen', 'Jenny', 'Joe', 'Justen', 'Matt'];
    this.texts = [
      "Ours is a life of constant reruns. We're always circling back to where we'd we started, then starting all over again. Even if we don't run extra laps that day, we surely will come back for more of the same another day soon.",
      'Really cool!',
      'Thanks!'
    ];

    this.addComment();
	}

	getRandomInt(max: number): number {
		return Math.floor(Math.random() * (max + 1));
	}

	getRandomItem(array: string[]): string {
		let pos: number = this.getRandomInt(array.length - 1);
		return array[pos];
	}

	addComment(): void {
		this.comments.push({
			author: this.getRandomItem(this.authors),
			comment: this.getRandomItem(this.texts),
			likes: this.getRandomInt(20)
		});
	}

	removeComment(comment) {
		let pos = this.comments.indexOf(comment);
		this.comments.splice(pos, 1);
	}

	ngDoCheck(): void {
		var changes = this.differ.diff(this.comments);

		if(changes){
			changes.forEachAddedItem(r => console.log('Added', r.item));
			changes.forEachRemovedItem(r => console.log('Removed', r.item));
		}
	}
}

@Component({
	selector: 'afters',
	template: `
	<div class="ui label">
		<i class="list icon"></i> Counter: {{counter}}
	</div>
	<button class="ui primary button" (click)="inc()">
		Increment
	</button>
	`
})
export class AftersCmp implements OnInit, OnDestroy, DoCheck,
                           OnChanges, AfterContentInit,
                           AfterContentChecked, AfterViewInit,
                           AfterViewChecked {
	counter: number = 0;

	constructor(){
		console.log('AfterCmp ----------------[constructor]');
		this.counter += 1;
	}

	inc(){
		console.log('AfterCmp-------------------[counter]');
		this.counter += 1;
	}

	ngOnInit() {
    console.log('AfterCmp - OnInit');
  }
  ngOnDestroy() {
    console.log('AfterCmp - OnDestroy');
  }
  ngDoCheck() {
    console.log('AfterCmp - DoCheck');
  }
  ngOnChanges() {
    console.log('AfterCmp - OnChanges');
  }
  ngAfterContentInit() {
    console.log('AfterCmp - AfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('AfterCmp - AfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('AfterCmp - AfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('AfterCmp - AfterViewChecked');
  }
}

@Component({
	selector: 'lifecyle-app',
	template: `
	<h4 class="ui horizontal divider header">
		OnInit and OnDestroy
	</h4>
	<button class="ui primary button" (click)="toggle()">
		Toggle
	</button>
	<on-init *ngIf="display"></on-init>

	<h4 class="ui horizontal divider header">
		OnChange
	</h4>
	<div class="ui form">
		<div class="field">
			<label>Name</label>
			<input type="text" #namefld value="{{name}}"
			(keyup)="setValues(namefld, commentfld)">
		</div>

		<div class="field">
			<label>Comment</label>
			<textarea rows="2" #commentfld
				(keyup)="setValues(namefld, commentfld)">	
				{{comment}}
			</textarea>
		</div>

	<div>
	<on-change [name]="name" [comment]="comment"></on-change>

	<h4 class="ui horizontal divider header">
		DoCheck
	</h4>
	<do-check></do-check>

	<h4 class="ui horizontal divider header">
		AfterContentInit, AfterViewInit, AfterContentChecked and AfterViewChecked
	</h4>
	<afters *ngIf="displayAfters"></afters>
	<button class="ui primary button" (click)="toggleAfters()">
		Toggle
	</button>

	`
})

export class LifecycleApp {
	display: boolean;
	name: string;
	comment: string;
	displayAfters: boolean;

	constructor(){
		this.display = true;
		this.name = 'Jesse';
		this.comment = 'I am learning a lot';

		this.displayAfters = true;
	}
	toggle(): void {
		this.display = !this.display;
	}

	setValues(namefld, commentfld): void {
		this.name = namefld.value;
		this.comment = commentfld.value;
	}
	toggleAfters(): void {
		this.displayAfters = !this.displayAfters;
	}
}