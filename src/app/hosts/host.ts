import { Component, Input, Directive, NgModule } from '@angular/core';

@Component({
	selector: 'host-sample-app',
	template: `
	<div class="ui card">
		<div class="content">
			<a class="header">Dr. Strange</a>
			<div class="meta">
				<span class="date">Joined in 1976</span>
			</div>
			<div class="description">
        Three former parapsychology professors
        set up shop as a unique ghost removal
        service.
      </div>
    </div>
    <div class="extra content">
      <a>
        <i class="user icon"></i>
        22 Friends
      </a>
    </div>
	</div>

	`
})

export class HostApp {}

@NgModule({
	declarations: [
		HostApp
	],
	exports: [
		HostApp
	]
})

export class HostAppModule {}